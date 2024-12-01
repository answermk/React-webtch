import "../assets/styles/StaffDashboard.css";
import React, { useState, useEffect } from "react";
import {
    Train,
    Users,
    AlertTriangle,
    Clock,
    Settings,
    Bell,
} from "lucide-react";


const StaffDashboard = () => {
    const [selectedTab, setSelectedTab] = useState("overview");
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Train 203 arriving 5 minutes late", type: "warning" },
        { id: 2, message: "Platform 4 maintenance completed", type: "success" },
        { id: 3, message: "New schedule update available", type: "info" },
    ]);

    const [stats, setStats] = useState({
        activeTrains: 24,
        passengers: 4521,
        alerts: 3,
        onTimePerformance: 96,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats((prev) => ({
                ...prev,
                passengers: prev.passengers + Math.floor(Math.random() * 10),
                onTimePerformance: 90 + Math.floor(Math.random() * 10),
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Top Navigation */}
            <nav>
                <div className="flex">
                    <div className="flex items-center space-x-4">
                        <Train className="h-8 w-8" />
                        <h1>SmartRail Staff Portal</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Bell className="h-6 w-6 hover:text-blue-200 cursor-pointer" />
                        <Settings className="h-6 w-6 hover:text-blue-200 cursor-pointer" />
                        <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(stats).map(([key, value], index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105">
                            <div className="flex items-center justify-between">
                                {key === "activeTrains" && <Train className="h-8 w-8 text-blue-500" />}
                                {key === "passengers" && <Users className="h-8 w-8 text-green-500" />}
                                {key === "alerts" && <AlertTriangle className="h-8 w-8 text-yellow-500" />}
                                {key === "onTimePerformance" && <Clock className="h-8 w-8 text-purple-500" />}
                                <span className="text-2xl font-bold">{value}</span>
                            </div>
                            <p className="text-gray-600 mt-2">
                                {key
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Notifications Panel */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4">Recent Notifications</h2>
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 rounded-lg ${
                                    notification.type === "warning"
                                        ? "bg-yellow-100"
                                        : notification.type === "success"
                                            ? "bg-green-100"
                                            : "bg-blue-100"
                                } transform hover:-translate-y-1`}
                            >
                                <p className="text-gray-800">{notification.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
