package com.rail.railway.service;

import com.rail.railway.model.User;
import com.rail.railway.userRepository.UserRepository;
import jakarta.mail.MessagingException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;
import java.util.UUID;

@Service
public class PasswordService {

    private static final Logger logger = LoggerFactory.getLogger(PasswordService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    /**
     * Initiates a password reset process by generating a reset token and sending it to the user's email.
     *
     * @param email the email address of the user requesting a password reset
     * @throws MessagingException if there is an issue sending the email
     */
    public void initiatePasswordReset(String email) throws MessagingException {
        logger.debug("Initiating password reset for email: {}", email);

        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {
            logger.warn("No user found with email: {}", email);
            throw new MessagingException("If this email exists, instructions will be sent shortly.");
        }

        User user = userOptional.get();

        // Generate a reset token and associate it with the user
        String resetToken = UUID.randomUUID().toString();
        user.setResetToken(resetToken);

        userRepository.save(user); // Save the user with the updated reset token

        try {
            emailService.sendPasswordResetEmail(email, resetToken);
            logger.debug("Password reset email sent successfully to {}", email);
        } catch (MessagingException e) {
            logger.error("Error sending password reset email to {}", email, e);
            throw e; // Re-throw to indicate failure
        }
    }

    /**
     * Resets the user's password using a valid reset token.
     *
     * @param token       the token provided to reset the password
     * @param newPassword the new password to set
     * @return true if the reset was successful, false otherwise
     */
    public boolean resetPassword(String token, String newPassword) {
        logger.debug("Attempting to reset password with token: {}", token);

        Optional<User> userOptional = userRepository.findByResetToken(token);

        if (userOptional.isEmpty()) {
            logger.warn("Invalid or expired reset token: {}", token);
            return false;
        }

        User user = userOptional.get();

        // Hash the new password using BCrypt
        String hashedPassword = BCrypt.hashpw(newPassword, BCrypt.gensalt());
        user.setPassword(hashedPassword);

        // Clear the reset token to prevent reuse
        user.setResetToken(null);

        userRepository.save(user); // Save the updated user
        logger.debug("Password reset successful for user: {}", user.getEmail());
        return true;
    }
}
