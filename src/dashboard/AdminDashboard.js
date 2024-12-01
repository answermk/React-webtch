import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Menu, Search, Train, Users, Clock, DollarSign, MapPin, ChevronDown } from 'lucide-react';
import '../assets/styles/AdminDashboard.css';

// Custom Card Components
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
        {children}
    </div>
);

const CardContent = ({ children, className = '' }) => (
    <div className={className}>
        {children}
    </div>
);

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Enhanced user authentication and data retrieval
    useEffect(() => {
        const validateUserAndFetchData = () => {
            try {
                // Attempt to retrieve user data from localStorage
                const userStr = localStorage.getItem('user');
                console.log('Raw user data:', userStr);

                if (!userStr) {
                    console.error('No user data found. Redirecting to login.');
                    navigate('/login');
                    return;
                }

                const userData = JSON.parse(userStr);
                console.log('Parsed user data:', userData);

                // Additional role validation
                if (!userData.role ||
                    !['ROLE_ADMIN', 'ADMIN'].includes(userData.role)) {
                    console.error('Unauthorized access. Redirecting.');
                    navigate('/unauthorized');
                    return;
                }

                setUser(userData);
            } catch (error) {
                console.error('Error processing user data:', error);
                navigate('/login');
            } finally {
                setIsLoading(false);
            }
        };

        validateUserAndFetchData();
    }, [navigate]);

    // Predefined metrics and trips data
    const metrics = [
        { title: 'Total Routes', value: '124', icon: MapPin, change: '+12%', color: 'text-blue-600' },
        { title: 'Active Trains', value: '47', icon: Train, change: '+5%', color: 'text-green-600' },
        { title: 'Daily Passengers', value: '15.4k', icon: Users, change: '+18%', color: 'text-purple-600' },
        { title: 'Revenue', value: '$284.5k', icon: DollarSign, change: '+24%', color: 'text-orange-600' },
    ];

    const recentTrips = [
        { id: 1, route: 'New York - Boston', departure: '09:00 AM', status: 'On Time', passengers: 342 },
        { id: 2, route: 'Boston - Washington', departure: '10:30 AM', status: 'Delayed', passengers: 256 },
        { id: 3, route: 'Philadelphia - New York', departure: '11:45 AM', status: 'On Time', passengers: 189 },
        { id: 4, route: 'Washington - Boston', departure: '01:15 PM', status: 'On Time', passengers: 298 },
    ];

    // Loading state handler
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    // Render dashboard content
    return (
        <div className="dashboard">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="menu-button">
                        <Menu className="icon" />
                    </button>
                    <h1 className="navbar-title">Railway Admin Dashboard</h1>
                </div>
                <div className="navbar-right">
                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <Search className="search-icon" />
                    </div>
                    <button className="notification-button">
                        <Bell className="icon" />
                        <span className="notification-dot"></span>
                    </button>
                    <div className="profile-section">
                        <img src="/api/placeholder/32/32" alt="Avatar" className="avatar" />
                        <span className="username">{user?.username || 'Admin User'}</span>
                        <ChevronDown className="chevron-icon" />
                    </div>
                </div>
            </nav>

            <div className="content-wrapper">
                {/* Sidebar */}
                {isSidebarOpen && (
                    <aside className="sidebar">
                        <div className="sidebar-menu">
                            <button className="sidebar-item">
                                <Train className="icon" />
                                <span>Trains</span>
                            </button>
                            <button className="sidebar-item">
                                <MapPin className="icon" />
                                <span>Routes</span>
                            </button>
                            <button className="sidebar-item">
                                <Users className="icon" />
                                <span>Passengers</span>
                            </button>
                            <button className="sidebar-item">
                                <Clock className="icon" />
                                <span>Schedule</span>
                            </button>
                        </div>
                    </aside>
                )}

                {/* Main Content */}
                <main className="main-content">
                    {/* Metrics Grid */}
                    <div className="metrics-grid">
                        {metrics.map((metric, index) => (
                            <Card key={index}>
                                <CardContent className="metric-card">
                                    <div className="metric-content">
                                        <div>
                                            <p className="metric-title">{metric.title}</p>
                                            <h3 className="metric-value">{metric.value}</h3>
                                            <span className="metric-change">{metric.change}</span>
                                        </div>
                                        <metric.icon className={`metric-icon ${metric.color}`} />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Recent Trips Table */}
                    <Card>
                        <CardContent className="trips-card">
                            <div className="trips-header">
                                <h2 className="trips-title">Recent Trips</h2>
                                <button className="view-all-button">View All</button>
                            </div>
                            <div className="table-container">
                                <table className="trips-table">
                                    <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>Departure</th>
                                        <th>Status</th>
                                        <th>Passengers</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recentTrips.map((trip) => (
                                        <tr key={trip.id}>
                                            <td>{trip.route}</td>
                                            <td>{trip.departure}</td>
                                            <td>
                                                    <span className={`status-badge ${trip.status === 'On Time' ? 'status-ontime' : 'status-delayed'}`}>
                                                        {trip.status}
                                                    </span>
                                            </td>
                                            <td>{trip.passengers}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;