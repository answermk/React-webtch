import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
                <p className="text-gray-700 mb-6">
                    You do not have permission to access this page.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/login"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Go to Login
                    </Link>
                    <Link
                        to="/"
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;