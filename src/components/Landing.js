import React, { useState, useEffect } from "react";
import { Home, Train, Lock, User, Mail, MapPin, Bell, Globe } from "lucide-react";
import '../assets/styles/Landing.css';
const Landing = () => {
    const [language, setLanguage] = useState("en");
    const [isLoaded, setIsLoaded] = useState(false);

    // Translation object moved inside the component
    const translations = {
        en: {
            title: "SmartRail",
            motto: "Your gateway to easy and fast train travel booking.",
            login: "Login",
            register: "Register",
            aboutUs: "About Us",
            aboutText:
                "SmartRail is your one-stop platform for easy train ticket bookings and schedules. We aim to simplify your travel experience with seamless navigation, efficient services, and real-time updates.",
            features: "Features",
            findUs: "Find Us",
            contactUs: "Contact Us",
            contactButton: "Send Message",
            location: "We are located at:",
            address: "123 Rail Avenue, Train City, TX, USA",
        },
        de: {
            title: "SmartRail",
            motto: "Ihr Tor zu einfacher und schneller Zugbuchung.",
            login: "Einloggen",
            register: "Registrieren",
            aboutUs: "Über Uns",
            aboutText:
                "SmartRail ist Ihre zentrale Plattform für einfache Zugbuchungen und Fahrpläne. Wir vereinfachen Ihre Reiseerfahrung mit nahtloser Navigation, effizienten Diensten und Echtzeit-Updates.",
            features: "Funktionen",
            findUs: "Finden Sie uns",
            contactUs: "Kontaktieren Sie uns",
            contactButton: "Nachricht Senden",
            location: "Wir befinden uns bei:",
            address: "123 Rail Avenue, Train City, TX, USA",
        },
        fr: {
            title: "SmartRail",
            motto: "Votre passerelle pour une réservation de train rapide et facile.",
            login: "Connexion",
            register: "S'inscrire",
            aboutUs: "À Propos de Nous",
            aboutText:
                "SmartRail est votre plateforme unique pour des réservations de train faciles et des horaires. Nous simplifions votre expérience de voyage avec une navigation fluide, des services efficaces et des mises à jour en temps réel.",
            features: "Fonctionnalités",
            findUs: "Trouvez-nous",
            contactUs: "Contactez-nous",
            contactButton: "Envoyer un Message",
            location: "Nous sommes situés à :",
            address: "123 Rail Avenue, Train City, TX, USA",
        },
    };

    useEffect(() => {
        // Add load animation trigger
        setIsLoaded(true);
    }, []);

    return (
        <div className={`landing-container p-6 max-w-4xl mx-auto 
            ${isLoaded ? 'opacity-100' : 'opacity-0'} 
            transition-opacity duration-1000 ease-in-out`}>
            {/* Language Selector with Slide-in Animation */}
            <div className="language-selector flex items-center mb-6
                animate-slide-in-top">
                <Globe className="mr-2 animate-spin-slow" />
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="language-dropdown border rounded p-2
                        hover:scale-105 transition-transform duration-300"
                >
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                </select>
            </div>

            {/* Hero Section with Fade and Scale Animation */}
            <header className="landing-header text-center mb-12
                animate-fade-in-scale">
                <h1 className="project-title text-4xl font-bold mb-4 flex items-center justify-center
                    hover:animate-bounce-soft">
                    <Train className="mr-3 animate-pulse-slow"/> {translations[language].title}
                </h1>
                <p className="project-motto text-xl mb-6 animate-slide-in-right">{translations[language].motto}</p>
                <div className="landing-buttons flex justify-center space-x-6 animate-pop-in">
                    <a
                        href="/login"
                        className="bg-white text-blue-900 font-bold py-4 px-8 rounded-full
               hover:bg-blue-100 transition duration-300
               transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <User className="inline-block mr-2"/> {translations[language].login}
                    </a>
                    <a
                        href="/register"
                        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full
               hover:bg-blue-700 transition duration-300
               transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <User className="inline-block mr-2"/> {translations[language].register}
                    </a>
                </div>

            </header>

            {/* About Us Section */}
            <section className="about-section mb-12 animate-fade-in-bottom delay-200">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Train className="mr-3 animate-wiggle"/> {translations[language].aboutUs}
                </h2>
                <p className="animate-slide-in-left">{translations[language].aboutText}</p>
            </section>

            {/* Features Section */}
            <section className="features-section mb-12 animate-fade-in-bottom delay-400">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Bell className="mr-3 animate-ping-slow" /> {translations[language].features}
                </h2>
                <ul className="space-y-2">
                    {["Real-time train schedule tracking",
                        "Easy ticket booking and management",
                        "Personalized notifications and alerts",
                        "Secure payment gateways"].map((feature, index) => (
                        <li key={feature} className={`flex items-center 
                            animate-slide-in-right delay-${(index + 1) * 100}`}>
                            <Train className="mr-3" /> {feature}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Find Us Section */}
            <section className="find-us-section mb-12 animate-fade-in-bottom delay-600">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-3" /> {translations[language].findUs}
                </h2>
                <p>{translations[language].location}</p>
                <p>{translations[language].address}</p>
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 animate-pulse">
                    Map Placeholder
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section animate-fade-in-bottom delay-800">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Mail className="mr-3" /> {translations[language].contactUs}
                </h2>
                <form className="contact-form space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    alert("Contact form submission not implemented");
                }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        <Mail className="inline-block mr-2" /> {translations[language].contactButton}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Landing;
