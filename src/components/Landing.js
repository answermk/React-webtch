import '../assets/styles/Landing.css';
import React from 'react';


const Landing = () => {
    return (
        <div className="font-sans scroll-smooth">
            {/* Navbar */}
            <header className="fixed w-full z-50 transition-all duration-300" id="navbar">
                <nav className="nav-glass">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="/images/logo.png" className="w-12 h-12 mr-3 transform hover:rotate-12 transition-transform duration-300" alt="SmartRail Logo"/>
                            <span className="font-bold text-2xl tracking-tight text-white">SmartRail</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-300">About</a>
                            <a href="#features" className="text-white hover:text-blue-200 transition-colors duration-300">Features</a>
                            <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-300">Contact</a>

                            <div className="flex space-x-2 ml-8">
                                <a href="?lang=en" className="px-3 py-1 rounded-full transition-colors duration-300">EN</a>
                                <a href="?lang=fr" className="px-3 py-1 rounded-full transition-colors duration-300">FR</a>
                                <a href="?lang=de" className="px-3 py-1 rounded-full transition-colors duration-300">DE</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main role="main">
                <section className="hero-gradient text-white pt-32 pb-24 relative wave-container min-h-screen flex items-center">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                    Welcome to <br/><span className="text-blue-300">SmartRail</span>
                                </h1>
                                <p className="text-xl mb-10 text-blue-100">
                                    Revolutionizing your travel experience with seamless and efficient train journeys.
                                </p>
                                <div className="flex space-x-6">
                                    <a href="/login" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1">
                                        Login
                                    </a>
                                    <a href="/register" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wave"></div>
                </section>

                {/* Content Sections */}
                <div className="flex flex-wrap gap-4">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <img src="/images/t1.jpeg" alt="Train 1" className="wave-animation rounded-lg shadow-xl w-full h-auto delay-0"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <img src="/images/t2.jpeg" alt="Train 2" className="wave-animation rounded-lg shadow-xl w-full h-auto delay-100"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <img src="/images/t3.jpeg" alt="Train 3" className="wave-animation rounded-lg shadow-xl w-full h-auto delay-200"/>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About SmartRail</h2>
                        <div className="flex flex-wrap">
                            {/* Mission, Vision, Goal Cards */}
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                                    <p>Sustainable, efficient, and comfortable rail transportation for all.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                                    <p>Smart rail systems connecting people and places seamlessly.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-8">
                                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                    <h3 className="text-xl font-semibold mb-4">Our Goal</h3>
                                    <p>To lead in smart rail solutions by 2030.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">Our
                            Features</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Feature Cards */}
                            <div className="feature-card bg-white rounded-xl shadow-lg p-8" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-5xl text-blue-600 mb-6 icon-pulse">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Fast Booking</h3>
                                <p className="text-gray-600">Book tickets in just a few clicks with our intuitive
                                    interface.</p>
                            </div>
                            <div className="feature-card bg-white rounded-xl shadow-lg p-8" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-5xl text-blue-600 mb-6 icon-pulse">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Real-time Updates on schedules and
                                    changes.</h3>
                                <p className="text-gray-600">Stay informed with live updates</p>
                            </div>
                            <div className="feature-card bg-white rounded-xl shadow-lg p-8" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-5xl text-blue-600 mb-6 icon-pulse">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Eco-friendly Travel</h3>
                                <p className="text-gray-600">Reduce your carbon footprint with train travel.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">Get in
                            Touch</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <form action="/contact" method="post">
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input type="text" name="name"
                                           className="form-input w-full p-3 rounded-lg bg-gray-50"/>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input type="text" name="email"
                                           className="form-input w-full p-3 rounded-lg bg-gray-50"/>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Message</label>
                                    <input type="text" name="message"
                                           className="form-input w-full p-3 rounded-lg bg-gray-50"/>
                                </div>

                                <button type="submit"
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                                <p>Message Sent</p>
                            </div>

                            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                                <p>Message Not Sent</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-left">
                                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                    <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                                    <p className="mb-4">Connect with us on social media:</p>
                                    <div className="flex space-x-4 mb-6">
                                        <a href="#" className="text-blue-600 hover:text-blue-800"><i
                                            className="fab fa-facebook fa-2x"></i></a>
                                        <a href="#" className="text-blue-400 hover:text-blue-600"><i
                                            className="fab fa-twitter fa-2x"></i></a>
                                        <a href="#" className="text-blue-700 hover:text-blue-900"><i
                                            className="fab fa-linkedin fa-2x"></i></a>
                                        <a href="#" className="text-gray-800 hover:text-gray-600"><i
                                            className="fab fa-github fa-2x"></i></a>
                                    </div>
                                    <p className="text-gray-600 mb-2"><i className="fas fa-phone-alt"></i> +(250)
                                        783-423-567</p>
                                    <p className="text-gray-600 mb-2"><i
                                        className="fas fa-envelope"></i> info@smartrail.com</p>
                                    <p className="text-gray-600 mb-2"><i className="fas fa-map-marker-alt"></i> 123 Rail
                                        Ave, Kigali, Rwanda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 SmartRail. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 mx-4">Privacy Policy</a>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 mx-4">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
