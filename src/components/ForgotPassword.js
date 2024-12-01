import React, { useState } from 'react';
import '../assets/styles/ForgotPassword.css'

const Alert = ({ children, type }) => (
    <div className={`alert ${type === 'error' ? 'alert-error' : 'alert-success'}`}>
        {children}
    </div>
);

const Icon = ({ type }) => {
    if (type === 'mail') {
        return (
            <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        );
    }
    return null;
};

const LoadingSpinner = () => (
    <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
    </svg>
);

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8083/api/password/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const errorText = await response.text();
                setError(errorText || 'An unexpected error occurred. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="container">
                <div className="form-card success-card">
                    <Alert type="success">
                        Password reset instructions have been sent to your email.
                        Please check your inbox.
                    </Alert>
                    <p className="help-text">
                        Didn't receive the email? Check your spam folder or try again.
                    </p>
                    <button
                        onClick={() => {
                            setIsSuccess(false);
                            setEmail('');
                        }}
                        className="text-button"
                    >
                        Try another email
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="header">
                <h2 className="title">Forgot your password?</h2>
                <p className="subtitle">
                    No worries, we'll send you reset instructions.
                </p>
            </div>

            <div className="form-card">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="label">
                            Email address
                        </label>
                        <div className="input-container">
                            <Icon type="mail" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {error && (
                        <Alert type="error">
                            {error}
                        </Alert>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="submit-button"
                    >
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            "Reset password"
                        )}
                    </button>

                    <div className="text-center">
                        <a
                            href="/login"
                            className="back-link"
                        >
                            Back to login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;