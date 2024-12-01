import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './dashboard/AdminDashboard';
import ManagerDashboard from './dashboard/ManagerDashboard';
import StaffDashboard from './dashboard/StaffDashboard';
import AccountantDashboard from './dashboard/AccountantDashboard';
import UserDashboard from './dashboard/UserDashboard';

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles }) => {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />

                {/* Protected Routes */}
                <Route
                    path="/admindashboard"
                    element={
                        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ADMIN']}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/managerdashboard"
                    element={
                        <ProtectedRoute allowedRoles={['ROLE_MANAGER', 'MANAGER']}>
                            <ManagerDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/staffdashboard"
                    element={
                        <ProtectedRoute allowedRoles={['ROLE_STAFF', 'STAFF']}>
                            <StaffDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/accountantdashboard"
                    element={
                        <ProtectedRoute allowedRoles={['ROLE_ACCOUNTANT', 'ACCOUNTANT']}>
                            <AccountantDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/userdashboard"
                    element={
                        <ProtectedRoute allowedRoles={['ROLE_USER', 'USER']}>
                            <UserDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Catch-all route */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;