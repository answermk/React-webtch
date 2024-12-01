import React, { useState } from 'react';
import '../assets/styles/ResetPassword.css';

const ResetPassword = () => {
    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLengthValid = password.length >= 8;

        return (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isLengthValid);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate password strength
        if (!validatePassword(passwords.newPassword)) {
            setError('Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters');
            return;
        }

        // Check if passwords match
        if (passwords.newPassword !== passwords.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="reset-container">
                <div className="reset-card success-card">
                    <div className="success-icon">✓</div>
                    <h2>Password Reset Successful!</h2>
                    <p>Your password has been successfully updated.</p>
                    <a href="/login" className="login-link">
                        Continue to Login
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="reset-container">
            <div className="reset-card">
                <div className="reset-header">
                    <h2>Reset Your Password</h2>
                    <p>Please enter your new password below</p>
                </div>

                <form onSubmit={handleSubmit} className="reset-form">
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <div className="password-input-container">
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={passwords.newPassword}
                                onChange={handleChange}
                                required
                                className="password-input"
                                placeholder="Enter new password"
                            />
                            <span className="password-icon">🔒</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="password-input-container">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={passwords.confirmPassword}
                                onChange={handleChange}
                                required
                                className="password-input"
                                placeholder="Confirm new password"
                            />
                            <span className="password-icon">🔒</span>
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="password-requirements">
                        <h3>Password Requirements:</h3>
                        <ul>
                            <li className={passwords.newPassword.length >= 8 ? 'valid' : ''}>
                                At least 8 characters long
                            </li>
                            <li className={/[A-Z]/.test(passwords.newPassword) ? 'valid' : ''}>
                                Contains uppercase letter
                            </li>
                            <li className={/[a-z]/.test(passwords.newPassword) ? 'valid' : ''}>
                                Contains lowercase letter
                            </li>
                            <li className={/\d/.test(passwords.newPassword) ? 'valid' : ''}>
                                Contains number
                            </li>
                            <li className={/[!@#$%^&*(),.?":{}|<>]/.test(passwords.newPassword) ? 'valid' : ''}>
                                Contains special character
                            </li>
                        </ul>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`reset-button ${isLoading ? 'loading' : ''}`}
                    >
                        {isLoading ? (
                            <div className="loading-spinner"></div>
                        ) : (
                            'Reset Password'
                        )}
                    </button>

                    <div className="form-footer">
                        <a href="/login" className="back-link">
                            Back to Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;