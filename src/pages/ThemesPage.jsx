import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Changed from "framer-motion" to "motion/react" as per common usage and AnimatePresence
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { FaCode, FaMobileAlt, FaDatabase, FaBitcoin, FaLightbulb, FaCity, FaHeartbeat, FaShieldAlt, FaFirstAid, FaTractor, FaTimes } from "react-icons/fa";

const softwareThemes = [
    {
        title: "Web Development Track",
        description: "Develop web apps providing great user experiences with features like real-time data processing, responsive design.",
        icon: <FaCode className="text-4xl text-blue-400" />,
        objective: "To develop innovative web applications that provide engaging user experiences, leverage modern technologies, and incorporate advanced features like real-time data processing and responsive design.",
        techStack: [
            "Front-end: HTML, CSS, JavaScript (ES6+), React/Angular, Tailwind CSS/SCSS, WebSockets",
            "Back-end: Node.js, Express.js, MongoDB/PostgreSQL, RESTful APIs/GraphQL",
            "Additional: Docker, Kubernetes, Firebase, WebRTC, Google Maps API, Stripe, Twilio"
        ],
        challengeIdeas: [
            "Real-Time Collaborative Platform",
            "Augmented Reality E-commerce",
            "Cross-Platform Progressive Web App (PWA)"
        ]
    },
    {
        title: "Mobile App Development Track",
        description: "Create sophisticated mobile applications with features like AI, IoT, and real-time communication.",
        icon: <FaMobileAlt className="text-4xl text-green-400" />,
        objective: "To create sophisticated mobile applications that provide rich user experiences, integrate with devices, and utilize advanced features such as AI, IoT, and real-time communication.",
        techStack: [
            "Front-end: React Native, Flutter, JavaScript (ES6+), Dart",
            "Back-end: Firebase, AWS, Azure",
            "Additional: TensorFlow.js/Core ML, MQTT protocol, responsive design"
        ],
        challengeIdeas: [
            "AI-Powered Personal Assistant",
            "Health Monitoring and Predictive Analytics",
            "IoT-Enabled Smart Home Control System"
        ]
    },
    {
        title: "Data Science & Machine Learning",
        description: "Create predictive models and implement sophisticated machine learning algorithms to solve real-world problems.",
        icon: <FaDatabase className="text-4xl text-purple-400" />,
        objective: "To create predictive models, analyze large datasets, and implement sophisticated machine learning algorithms that can address real-world problems.",
        techStack: [
            "Programming: Python, NumPy, Pandas, Scikit-Learn, TensorFlow, PyTorch",
            "Tools: Jupyter Notebook, Google Colab, Apache Spark",
            "Deployment: Flask, FastAPI, Docker",
            "Visualization: Matplotlib, Seaborn, Plotly"
        ],
        challengeIdeas: [
            "Natural Language Understanding (NLU) System",
            "Advanced Image Processing and Augmented Reality",
            "Predictive Healthcare Analytics"
        ]
    },
    {
        title: "Blockchain & Cryptography Track",
        description: "Explore blockchain, contracts, and cryptographic techniques for security, scalability, and decentralization.",
        icon: <FaBitcoin className="text-4xl text-yellow-400" />,
        objective: "To explore the implementation of blockchain technology, smart contracts, and cryptographic techniques in real-world applications, ensuring security, scalability, and decentralization.",
        techStack: [
            "Blockchain: Ethereum, Hyperledger, Solidity, Truffle, Remix",
            "Cryptography: Web3.js, CryptoJS, Bouncy Castle",
            "Storage: IPFS",
            "Additional: Stablecoins, smart contract auditing"
        ],
        challengeIdeas: [
            "Decentralized Identity Verification",
            "Supply Chain Transparency and Tokenization",
            "Cross-Border Payments and Remittances"
        ]
    },
    {
        title: "Open Innovation Track",
        description: "Encourage participants to create scalable, sustainable, and impactful solutions for real-world challenges.",
        icon: <FaLightbulb className="text-4xl text-orange-400" />,
        objective: "To encourage participants to create innovative solutions to real-world challenges using any technology stack, focusing on scalability, sustainability, and user impact.",
        techStack: [
            "Development: MERN/MEAN stack",
            "Cloud: AWS, Azure, Google Cloud",
            "IoT: MQTT, Raspberry Pi, Arduino",
            "AI: Google Cloud AI, IBM Watson, Microsoft Azure AI"
        ],
        challengeIdeas: [
            "Smart City Management System",
            "Environmental Impact Analysis Tool",
            "Smart Agriculture Solution"
        ]
    },
];

const hardwareThemes = [
    {
        title: "Smart Cities and IoT Solutions",
        description: "Enhance urban living with IoT, AI, and analytics for smarter, efficient, and sustainable cities.",
        icon: <FaCity className="text-4xl text-cyan-400" />,
        objective: "To develop hardware and software solutions that enhance urban living by leveraging IoT technologies, data analytics, and AI.",
        techStack: [
            "Hardware: Raspberry Pi, Arduino, ESP32, sensors (temperature, humidity, motion), actuators, LoRa modules",
            "Software: MQTT, Node.js, Firebase, AWS IoT Core, React.js",
            "Cloud: AWS IoT, Microsoft Azure IoT Hub, Google Cloud IoT",
            "Data Analytics: Python (Pandas, NumPy, Matplotlib)",
            "AI/ML: TensorFlow.js, PyTorch for predictive analytics"
        ],
        challengeIdeas: [
            "Smart Traffic Management System",
            "IoT-Enabled Waste Management System",
            "Energy-Efficient Lighting System"
        ]
    },
    {
        title: "IoT-Enabled Healthcare and Assistive Technologies",
        description: "Revolutionize healthcare with tools for diagnosis, delivery, and assistive technologies.",
        icon: <FaHeartbeat className="text-4xl text-red-400" />,
        objective: "To create innovative tools that improve healthcare delivery, enable early diagnosis, and assist individuals with disabilities.",
        techStack: [
            "Hardware: Wearables, Raspberry Pi, Arduino, ECG, SpO2 sensors",
            "Software: Python, TensorFlow, Flask, AWS HealthLake",
            "AI/ML: NLP for chatbots, predictive analytics, computer vision"
        ],
        challengeIdeas: [
            "AI-Powered Diagnostic Tool",
            "Wearable Health Monitor",
            "Robotic Assistive Device"
        ]
    },
    {
        title: "Smart Wearables for Safety",
        description: "Develop wearables for monitoring, tracking, and emergency alerts, ensuring safety in real-time.",
        icon: <FaShieldAlt className="text-4xl text-indigo-400" />,
        objective: "To create wearable devices that provide real-time monitoring, tracking, and emergency alert functionalities.",
        techStack: [
            "Microcontrollers: Arduino Nano, ESP32",
            "Sensors: Accelerometers, GPS modules, GSM",
            "Power: Li-Po batteries, BLE for communication"
        ],
        challengeIdeas: [
            "Personal Safety Device",
            "Fall Detection System",
            "Geofencing Monitoring"
        ]
    },
    {
        title: "Disaster Management and Emergency Response",
        description: "Develop tools and systems to enhance preparedness, response, and recovery.",
        icon: <FaFirstAid className="text-4xl text-pink-400" />,
        objective: "To create tools and systems that improve disaster preparedness, response, and recovery.",
        techStack: [
            "Hardware: Drones, IoT sensors, GPS trackers",
            "Software: Python, OpenCV, TensorFlow, Flask",
            "Communication: MQTT, Zigbee, satellite communication"
        ],
        challengeIdeas: [
            "IoT-Based Early Warning System",
            "Drone-Assisted Disaster Recovery",
            "Wearable Emergency Locator"
        ]
    },
    {
        title: "Agritech and Rural Innovation",
        description: "Empower farmers with tech solutions for productivity, resource management, and enhanced market access.",
        icon: <FaTractor className="text-4xl text-emerald-400" />,
        objective: "To develop solutions for precision farming, automated irrigation, and market access for rural communities.",
        techStack: [
            "Hardware: IoT sensors, Arduino, drones",
            "Software: Node.js, Firebase, TensorFlow",
            "Communication: Zigbee, LoRa, Bluetooth"
        ],
        challengeIdeas: [
            "IoT-Enabled Precision Farming",
            "Automated Irrigation System",
            "Blockchain-Based Supply Chain Tracking"
        ]
    },
];

const ThemeModal = ({ theme, onClose }) => {
    if (!theme) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#1a0b2e] border border-neutral-700 rounded-2xl p-6 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-white/10">
                        {theme.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-zentry text-white">{theme.title}</h2>
                </div>

                <div className="space-y-6 text-gray-300 font-general">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">Objective</h4>
                        <p>{theme.objective || theme.description}</p>
                    </div>

                    {theme.techStack && (
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2">Technology Stack</h4>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                {theme.techStack.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {theme.challengeIdeas && (
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2">Challenge Ideas</h4>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                {theme.challengeIdeas.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const ThemesPage = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);

    return (
        <section id="themes" className="py-20 bg-black text-white relative overflow-hidden min-h-screen">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,36,255,0.15),transparent_70%)]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center font-zentry text-4xl md:text-7xl mb-16 uppercase"
                >
                    Themes
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Software Track Section - LEFT */}
                    <div className="w-full lg:w-1/2">
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-zentry mb-8 text-center lg:text-left text-blue-400 border-b border-blue-400/30 pb-4"
                        >
                            Software Track
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {softwareThemes.map((theme, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <SpotlightCard
                                        className="h-full flex flex-col items-start text-left gap-4 bg-[#1a0b2e]/60 border-neutral-800/50 p-6 rounded-xl hover:border-blue-500/30 transition-colors"
                                        spotlightColor="rgba(59, 130, 246, 0.2)"
                                    >
                                        <div className="p-3 rounded-lg bg-blue-500/10 self-start">
                                            {theme.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-robert-medium text-white mb-2">
                                                {theme.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-general leading-snug line-clamp-3 mb-4">
                                                {theme.description}
                                            </p>
                                            <button
                                                onClick={() => setSelectedTheme(theme)}
                                                className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group"
                                            >
                                                Read More
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Hardware Track Section - RIGHT */}
                    <div className="w-full lg:w-1/2">
                        <motion.h3
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-zentry mb-8 text-center lg:text-left text-green-400 border-b border-green-400/30 pb-4"
                        >
                            Software + Hardware Track
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hardwareThemes.map((theme, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <SpotlightCard
                                        className="h-full flex flex-col items-start text-left gap-4 bg-[#1a0b2e]/60 border-neutral-800/50 p-6 rounded-xl hover:border-green-500/30 transition-colors"
                                        spotlightColor="rgba(34, 197, 94, 0.2)"
                                    >
                                        <div className="p-3 rounded-lg bg-green-500/10 self-start">
                                            {theme.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-robert-medium text-white mb-2">
                                                {theme.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-general leading-snug mb-4 line-clamp-3">
                                                {theme.description}
                                            </p>
                                            <button
                                                onClick={() => setSelectedTheme(theme)}
                                                className="text-sm font-bold text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 group"
                                            >
                                                Read More
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedTheme && (
                    <ThemeModal theme={selectedTheme} onClose={() => setSelectedTheme(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ThemesPage;
