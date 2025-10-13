import React, { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, Users, Database, Cog, TrendingUp, Globe, Shield, Award, FileText, Building2, ChevronRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const trainingData = [
        { month: 'Jan', progress: 60 },
        { month: 'Feb', progress: 68 },
        { month: 'Mar', progress: 74 },
        { month: 'Apr', progress: 83 },
        { month: 'May', progress: 88 },
        { month: 'Jun', progress: 95 }
    ];

    const impactData = [
        { name: 'Rural', value: 65, color: '#FF9933' },
        { name: 'Urban', value: 25, color: '#138808' },
        { name: 'Semi-Urban', value: 10, color: '#000080' }
    ];

    const features = [
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Smart Monitoring",
            desc: "Real-time dashboards for comprehensive policy impact analysis and data-driven decision making across all administrative levels."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Citizen Integration",
            desc: "Unified database ensuring transparent beneficiary tracking, seamless service delivery, and enhanced citizen engagement."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Data-Driven Governance",
            desc: "Cross-department data integration enabling efficient execution and evidence-based policy formulation."
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "Intelligent Automation",
            desc: "AI-powered reporting systems and automated workflow management for enhanced administrative efficiency."
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Multi-Level Collaboration",
            desc: "Seamless integration between Central, State, and District administrations for synchronized governance."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Nationwide Scalability",
            desc: "Robust cloud infrastructure deployed across 700+ districts ensuring uniform service delivery nationwide."
        }
    ];

    const stats = [
        { value: "29+", label: "States & UTs Integrated", icon: <Globe className="w-6 h-6" /> },
        { value: "720+", label: "District Dashboards Active", icon: <BarChart3 className="w-6 h-6" /> },
        { value: "1.5 Cr+", label: "Beneficiaries Empowered", icon: <Users className="w-6 h-6" /> },
        { value: "99.8%", label: "System Uptime", icon: <Shield className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b-4 border-orange-500 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://pmajay.dosje.gov.in/public/latest/images/logo.png"
                                alt="Government of India"
                                className="h-14 w-14"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">SUJHAA</h1>
                                <p className="text-xs text-gray-600 font-medium">Smart Unified Jan Hit Access Application</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#overview" className="text-gray-700 hover:text-orange-600 font-medium transition">Overview</a>
                            <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition">Features</a>
                            <a href="#analytics" className="text-gray-700 hover:text-orange-600 font-medium transition">Analytics</a>
                            <a href="#impact" className="text-gray-700 hover:text-orange-600 font-medium transition">Impact</a>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-md">
                                Portal Login
                            </button>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden py-4 border-t">
                            <a href="#overview" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">Overview</a>
                            <a href="#features" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">Features</a>
                            <a href="#analytics" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">Analytics</a>
                            <a href="#impact" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">Impact</a>
                            <button className="mt-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded font-semibold">
                                Portal Login
                            </button>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-2 w-full">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Award className="w-5 h-5 mr-2 text-yellow-400" />
                            <span className="text-sm font-semibold text-gray-100">Digital India Initiative</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                            Transforming Governance Through
                            <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                                Intelligent Data Analytics
                            </span>
                        </h1>

                        <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 mx-auto mb-8"></div>

                        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto font-semibold">
                            SUJHAA integrates all administrative levels into one unified, real-time analytics platform driving transparency, accountability, and citizen-centric governance across the nation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-lg flex items-center justify-center transform hover:scale-105">
                                Explore Platform
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition border border-white/30 transform hover:scale-105">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-b-2 border-gray-200 -mt-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200">
                                <div className="flex justify-center text-orange-600 mb-2">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            National Mission Overview
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A comprehensive governance platform designed to empower administrators with actionable insights and enable seamless cross-departmental collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-500 group"
                            >
                                <div className="text-orange-600 mb-4 group-hover:scale-110 transition">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <section id="analytics" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Data-Driven Insights
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real-time analytics and comprehensive reporting for informed decision-making at every level of governance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 mr-3 text-orange-600" />
                                Training Progress Analytics
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={trainingData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis dataKey="month" stroke="#6b7280" />
                                    <YAxis stroke="#6b7280" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="progress"
                                        stroke="#f97316"
                                        strokeWidth={3}
                                        dot={{ fill: '#f97316', r: 5 }}
                                        activeDot={{ r: 7 }}
                                        name="Progress (%)"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Users className="w-6 h-6 mr-3 text-green-600" />
                                Beneficiary Distribution
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={impactData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {impactData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section id="impact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Measurable Impact Across India
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Transforming governance through technology, transparency, and timely interventions nationwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-md border-t-4 border-orange-500">
                            <div className="text-5xl font-bold text-orange-600 mb-2">29+</div>
                            <div className="text-gray-700 font-semibold text-lg mb-1">States & Union Territories</div>
                            <div className="text-gray-600 text-sm">Complete administrative integration</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md border-t-4 border-blue-600">
                            <div className="text-5xl font-bold text-blue-600 mb-2">720+</div>
                            <div className="text-gray-700 font-semibold text-lg mb-1">Active District Dashboards</div>
                            <div className="text-gray-600 text-sm">Real-time monitoring and reporting</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md border-t-4 border-green-600">
                            <div className="text-5xl font-bold text-green-600 mb-2">1.5 Cr+</div>
                            <div className="text-gray-700 font-semibold text-lg mb-1">Beneficiaries Served</div>
                            <div className="text-gray-600 text-sm">Direct citizen empowerment</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 text-white text-center shadow-xl">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                        <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Governance?</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join hundreds of administrators leveraging SUJHAA for data-driven, transparent, and efficient governance.
                        </p>
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-lg">
                            Request Access
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white border-t-4 border-orange-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <img
                                    src="https://pmajay.dosje.gov.in/public/latest/images/logo.png"
                                    alt="Government of India"
                                    className="h-12 w-12"
                                />
                                <div>
                                    <h3 className="font-bold text-lg">SUJHAA</h3>
                                    <p className="text-sm text-blue-200">Digital Governance Platform</p>
                                </div>
                            </div>
                            <p className="text-blue-200 text-sm leading-relaxed">
                                Empowering governance through intelligent data analytics and seamless administrative integration.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-blue-200 text-sm">
                                <li><a href="#" className="hover:text-orange-400 transition">About the Mission</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition">Documentation</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition">Training Resources</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition">Support Portal</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Contact Information</h4>
                            <ul className="space-y-2 text-blue-200 text-sm">
                                <li>Ministry of Electronics & IT</li>
                                <li>Government of India</li>
                                <li>Email: support@sujhaa.gov.in</li>
                                <li>Helpline: 1800-XXX-XXXX</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-blue-700 pt-8 text-center text-blue-200 text-sm">
                        <p className="mb-2">© 2025 Government of India. All Rights Reserved.</p>
                        <p>Developed under the Digital India Initiative | Ministry of Electronics & Information Technology</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;