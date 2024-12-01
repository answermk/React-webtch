# SmartRail: Comprehensive Railway Management System

## 🚉 Project Overview

SmartRail is an advanced web-based railway management platform designed to streamline transportation services, providing intuitive interfaces for passengers, administrators, and staff.

### 🌟 Key Features

#### User Management
- Multi-role authentication (Passenger, Admin, Accountant, Manager, Staff)
- Social media login integration
- Secure registration and login processes

#### Passenger Services
- Journey booking and tracking
- Real-time trip information
- Ticket management
- Journey history

#### Administrative Capabilities
- Route management
- Train tracking
- Passenger analytics
- Financial reporting

### 🛠 Technology Stack

#### Frontend
- React.js
- React Router
- Recharts (Data Visualization)
- Lucide React (Icons)
- Font Awesome (Social Icons)

#### Authentication
- JWT (JSON Web Tokens)
- OAuth (Google, Facebook, Twitter)
- Role-based Access Control

#### Development Tools
- Create React App
- npm/yarn
- ES6+
- CSS3
- HTML5

### 📋 Project Structure

```
smartrail/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   └── layout/
│   │
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── UserDashboard.js
│   │   ├── AdminDashboard.js
│   │   └── AccountantDashboard.js
│   │
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── Login.css
│   │   │   ├── Register.css
│   │   │   └── Dashboard.css
│   │   └── images/
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── apiService.js
│   │
│   ├── utils/
│   │   ├── validation.js
│   │   └── formatters.js
│   │
│   └── App.js
│
├── package.json
└── README.md
```

### 🚀 Getting Started

#### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or Yarn
- Modern web browser

#### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/yourusername/smartrail.git
cd smartrail
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:8083
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
REACT_APP_TWITTER_CLIENT_ID=your_twitter_client_id
```

4. Start the development server
```bash
npm start
# or
yarn start
```

### 🔐 Authentication Workflow

#### Registration Process
1. User fills registration form
2. Frontend validates input:
   - Email format
   - Password strength
   - Age verification
3. Backend checks email uniqueness
4. User account created with default role

#### Login Process
1. Multiple login methods:
   - Email/Password
   - Google OAuth
   - Facebook OAuth
   - Twitter OAuth
2. Role-based redirection:
   - Passengers → User Dashboard
   - Admins → Admin Dashboard
   - Accountants → Accountant Dashboard

📊 Dashboard Features
User Dashboard

View upcoming journeys
Track journey history
Book new tickets
PNR number search

Admin Dashboard

Manage routes
Track active trains
Monitor daily passengers
Revenue analytics

Accountant Dashboard

Financial overview
Revenue tracking
Expense monitoring
Profit/Loss analysis

Manager Dashboard

Performance Overview Dashboard
Key Performance Indicators (KPIs)

Total Passengers
Active Trains
Average Delay Times
Incident Tracking


Interactive Charts

Daily Performance Metrics
Passengers, Delays, and Incidents Tracking


Real-time Alerts and Notifications
Metric Visualization with Recharts
Dynamic Performance Data Updates

Staff Dashboard

Operational Status Dashboard
Real-time System Statistics

Active Trains Count
Passenger Volume
Active Alerts
On-Time Performance Percentage


Dynamic Stats Updates
Notification Management

Train Delay Alerts
Maintenance Notifications
Schedule Updates


Responsive Design
Interactive UI with Hover Effects

🔗 Backend Integration (Spring Boot)
Authentication and User Management

RESTful API Endpoints

/api/auth/register
/api/auth/login
OAuth Integration (Google, Facebook, Twitter)



Password Management

Forgot Password Functionality

Password Reset Requests
Secure Token-based Password Reset
Email Notification Service



Security Features

JWT-based Authentication
Role-based Access Control
CORS Configuration
Secure OAuth Callback Handling

### 🧪 Testing

#### Recommended Testing Approaches
- Unit Testing: Jest
- Component Testing: React Testing Library
- E2E Testing: Cypress

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### 📄 License

Distributed under the MIT License.

### 📞 Contact

Project Maintainer: ANswer Sand
- Email: answwersand03@gmail.com
- Project Link: https://github.com/answermk/React-webtch

### 🙏 Acknowledgements
- React.js
- Recharts
- Lucide React
- Font Awesome
- OAuth Providers

---

## 🚨 Disclaimer

This project is for educational and demonstration purposes. Ensure compliance with local regulations and obtain necessary permissions before deployment.
