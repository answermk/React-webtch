import "../assets/styles/ManagerDashboard.css";
import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Bell, Users, Train, Clock, AlertTriangle, Calendar } from "lucide-react";

const ManagerDashboard = () => {
    const [selectedMetric, setSelectedMetric] = useState("passengers");

    const performanceData = [
        { name: "Mon", passengers: 4000, delays: 24, incidents: 2 },
        { name: "Tue", passengers: 3000, delays: 13, incidents: 1 },
        { name: "Wed", passengers: 5000, delays: 18, incidents: 3 },
        { name: "Thu", passengers: 4500, delays: 21, incidents: 0 },
        { name: "Fri", passengers: 6000, delays: 25, incidents: 2 },
        { name: "Sat", passengers: 3500, delays: 15, incidents: 1 },
        { name: "Sun", passengers: 2800, delays: 10, incidents: 0 },
    ];

    const alerts = [
        { id: 1, type: "warning", message: "Scheduled maintenance on Line 3 tonight" },
        { id: 2, type: "error", message: "Signal failure reported at Central Station" },
    ];

    const stats = [
        {
            title: "Total Passengers",
            value: "28.8K",
            icon: <Users />,
            trend: "+12%",
            positive: true,
        },
        {
            title: "Active Trains",
            value: "42",
            icon: <Train />,
            trend: "Normal",
            positive: true,
        },
        {
            title: "Avg Delay",
            value: "4.2m",
            icon: <Clock />,
            trend: "-8%",
            positive: true,
        },
        {
            title: "Incidents",
            value: "3",
            icon: <AlertTriangle />,
            trend: "+1",
            positive: false,
        },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Rail Operations Dashboard</h1>
                <div>
                    <button className="icon-button">
                        <Bell />
                    </button>
                    <button className="icon-button">
                        <Calendar />
                    </button>
                </div>
            </div>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div>
                            <p>{stat.title}</p>
                            <p className="stat-value">{stat.value}</p>
                            <p className={`stat-trend ${stat.positive ? "positive" : "negative"}`}>
                                {stat.trend}
                            </p>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="performance-overview">
                <h2>Performance Overview</h2>
                <div>
                    {["passengers", "delays", "incidents"].map((metric) => (
                        <button
                            key={metric}
                            className={`metric-button ${
                                selectedMetric === metric ? "active" : "inactive"
                            }`}
                            onClick={() => setSelectedMetric(metric)}
                        >
                            {metric}
                        </button>
                    ))}
                </div>
                <ResponsiveContainer height={300}>
                    <LineChart data={performanceData}>
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey={selectedMetric} stroke="#3b82f6" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="alert-container">
                {alerts.map((alert) => (
                    <div key={alert.id} className={`alert-message alert-${alert.type}`}>
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerDashboard;
