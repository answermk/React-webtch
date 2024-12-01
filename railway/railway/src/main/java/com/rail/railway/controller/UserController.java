package com.rail.railway.controller;

import com.rail.railway.dto.LoginDTO;
import com.rail.railway.dto.RegistrationDTO;
import com.rail.railway.model.User;
import com.rail.railway.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // Add this annotation for global CORS support
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody RegistrationDTO registrationDto) {
        try {
            // Log incoming registration data
            System.out.println("Received registration data: " + registrationDto);

            User user = userService.registerNewUser(registrationDto);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Registration successful");
            response.put("user", user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Log the full exception
            e.printStackTrace();

            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody LoginDTO loginDto) {
        try {
            User user = userService.authenticateUser(loginDto.getEmail(), loginDto.getPassword());
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("user", user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            System.out.println("Login Error: " + e.getMessage());  // Add logging
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
    @GetMapping("/google")
    public String redirectToGoogle() {
        // Here, you would generate the URL for Google OAuth and redirect the user
        String googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth?" +
                "client_id=YOUR_GOOGLE_CLIENT_ID&" +
                "redirect_uri=http://localhost:8083/api/auth/google/callback&" +
                "response_type=code&" +
                "scope=email%20profile";
        return "redirect:" + googleAuthUrl;
    }

    // Google OAuth callback URL
    @GetMapping("/google/callback")
    public String googleCallback(@RequestParam String code) {
        // Here, exchange the code for an access token and fetch the user data
        return "Handling Google OAuth callback with code: " + code;
    }

    // Similarly for Facebook and Twitter
    @GetMapping("/facebook")
    public String redirectToFacebook() {
        String facebookAuthUrl = "https://www.facebook.com/v10.0/dialog/oauth?" +
                "client_id=YOUR_FACEBOOK_APP_ID&" +
                "redirect_uri=http://localhost:8083/api/auth/facebook/callback&" +
                "scope=email";
        return "redirect:" + facebookAuthUrl;
    }

    @GetMapping("/facebook/callback")
    public String facebookCallback(@RequestParam String code) {
        // Handle Facebook OAuth callback
        return "Handling Facebook OAuth callback with code: " + code;
    }

    @GetMapping("/twitter")
    public String redirectToTwitter() {
        String twitterAuthUrl = "https://api.twitter.com/oauth/authenticate?" +
                "oauth_token=YOUR_OAUTH_TOKEN";
        return "redirect:" + twitterAuthUrl;
    }

    @GetMapping("/twitter/callback")
    public String twitterCallback(@RequestParam String oauth_token, @RequestParam String oauth_verifier) {
        // Handle Twitter OAuth callback
        return "Handling Twitter OAuth callback";
    }
}