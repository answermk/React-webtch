import React, { useState } from 'react';
import "../assets/styles/UserDashboard.css";

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const upcomingJourneys = [
        {
            id: "T123",
            from: "London Euston",
            to: "Manchester Piccadilly",
            date: "2024-11-25",
            time: "14:30",
            platform: "3",
            status: "On Time"
        },
        {
            id: "T124",
            from: "Manchester Piccadilly",
            to: "Leeds",
            date: "2024-11-28",
            time: "09:45",
            platform: "5",
            status: "On Time"
        }
    ];

    const pastJourneys = [
        {
            id: "T120",
            from: "Birmingham New Street",
            to: "London Euston",
            date: "2024-11-15",
            time: "11:30",
            status: "Completed"
        }
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h1>My Rail Journey Portal</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px' }}>Welcome, John</span>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <button style={{ flex: 1, padding: '10px' }}>Book New Journey</button>
                <div style={{ flex: 2, display: 'flex', gap: '10px' }}>
                    <input type="text" placeholder="Enter PNR number" style={{ flex: 1, padding: '5px' }} />
                    <button style={{ padding: '5px' }}>Search</button>
                </div>
                <div style={{ flex: 1, backgroundColor: '#f8d7da', padding: '10px', borderRadius: '5px' }}>
                    Rail strikes planned for Dec 1-3. Check updates.
                </div>
            </div>

            {/* Journey Management */}
            <div>
                <div style={{ marginBottom: '20px' }}>
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        style={{
                            marginRight: '10px',
                            padding: '10px',
                            backgroundColor: activeTab === 'upcoming' ? '#007bff' : '#f0f0f0',
                            color: activeTab === 'upcoming' ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setActiveTab('past')}
                        style={{
                            padding: '10px',
                            backgroundColor: activeTab === 'past' ? '#007bff' : '#f0f0f0',
                            color: activeTab === 'past' ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Past
                    </button>
                </div>

                <div>
                    {(activeTab === 'upcoming' ? upcomingJourneys : pastJourneys).map((journey) => (
                        <div
                            key={journey.id}
                            style={{
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                marginBottom: '10px'
                            }}
                        >
                            <div>
                                <strong>{journey.from} → {journey.to}</strong>
                                <div style={{ marginTop: '5px', fontSize: '14px', color: '#555' }}>
                                    <div>Date: {journey.date}</div>
                                    <div>Time: {journey.time}</div>
                                    {journey.platform && <div>Platform: {journey.platform}</div>}
                                    <div>Status: <span style={{ color: journey.status === 'On Time' ? 'green' : 'red' }}>{journey.status}</span></div>
                                </div>
                            </div>
                            {activeTab === 'upcoming' && (
                                <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                                    <button style={{ padding: '5px', border: '1px solid #ddd' }}>View Ticket</button>
                                    <button style={{ padding: '5px', border: '1px solid #ddd' }}>Download</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
