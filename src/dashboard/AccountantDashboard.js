import "../assets/styles/AccountantDashboard.css";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
    DollarSign,
    Users,
    TrendingUp,
    Clock,
    ChevronDown,
    Bell
} from 'lucide-react';


const mockData = [
    { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
    { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
    { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
    { month: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
    { month: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
    { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
];

const statsData = [
    { title: 'Total Revenue', icon: DollarSign, value: '$28,450', change: '+12.5%', color: 'blue' },
    { title: 'Total Expenses', icon: TrendingUp, value: '$15,790', change: '-2.4%', color: 'red' },
    { title: 'Active Clients', icon: Users, value: '284', change: '+3.2%', color: 'green' },
    { title: 'Pending Tasks', icon: Clock, value: '12', change: '-5', color: 'yellow' },
];

const transactionsData = [
    { id: 'TRX-001', client: 'Acme Corp', amount: '$1,200', status: 'Completed', date: '2024-03-15' },
    { id: 'TRX-002', client: 'Global Tech', amount: '$3,450', status: 'Pending', date: '2024-03-14' },
    { id: 'TRX-003', client: 'Smith & Co', amount: '$890', status: 'Completed', date: '2024-03-13' },
    { id: 'TRX-004', client: 'Tech Solutions', amount: '$2,300', status: 'Failed', date: '2024-03-12' },
];

const AccountantDashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const renderHeader = () => (
        <div className="dashboard-header">
            <h1>Financial Dashboard</h1>
            <div className="header-actions">
                <button className="notification-btn">
                    <Bell className="icon" />
                </button>
                <div className="profile">
                    <div className="avatar">JD</div>
                    <ChevronDown className="icon-small" />
                </div>
            </div>
        </div>
    );

    const renderStatsCards = () => (
        <div className="stats-grid">
            {statsData.map((stat, index) => (
                <div key={index} className={`stat-card stat-card-${stat.color}`}>
                    <div className="stat-content">
                        <div>
                            <p className="stat-title">{stat.title}</p>
                            <h3 className="stat-value">{stat.value}</h3>
                        </div>
                        <div className={`stat-icon-container bg-${stat.color}`}>
                            <stat.icon className="stat-icon" />
                        </div>
                    </div>
                    <p className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                        {stat.change} from last month
                    </p>
                </div>
            ))}
        </div>
    );

    const renderChart = () => (
        <div className="chart-container">
            <h2>Financial Overview</h2>
            <div className="chart">
                <ResponsiveContainer>
                    <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} animationDuration={1500} />
                        <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} animationDuration={1500} />
                        <Line type="monotone" dataKey="profit" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} animationDuration={1500} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    const renderTransactions = () => (
        <div className="transactions-container">
            <h2>Recent Transactions</h2>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Client</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactionsData.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.id}</td>
                            <td>{transaction.client}</td>
                            <td>{transaction.amount}</td>
                            <td>
                  <span className={`status-pill status-${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                            </td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className={`dashboard ${isLoaded ? 'loaded' : ''}`}>
            {renderHeader()}
            {renderStatsCards()}
            {renderChart()}
            {renderTransactions()}
        </div>
    );
};

export default AccountantDashboard;