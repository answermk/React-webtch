package com.rail.railway.controller;

import com.rail.railway.dto.ForgotPasswordRequest;
import com.rail.railway.service.PasswordService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/password")
public class PasswordController {

    private static final Logger logger = LoggerFactory.getLogger(PasswordController.class);

    @Autowired
    private PasswordService passwordService;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        try {
            passwordService.initiatePasswordReset(request.getEmail());
            return ResponseEntity.ok("Password reset instructions sent");
        } catch (MessagingException e) {
            logger.error("Error sending email: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("Error sending email");
        } catch (Exception e) {
            logger.error("Unexpected error: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("An unexpected error occurred");
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(
            @RequestParam String token,
            @RequestBody String newPassword
    ) {
        boolean resetSuccessful = passwordService.resetPassword(token, newPassword);

        if (resetSuccessful) {
            return ResponseEntity.ok("Password reset successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid or expired token");
        }
    }
}
