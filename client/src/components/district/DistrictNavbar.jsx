import React from "react";

const DistrictNavbar = () => {
    return (
        <nav className="bg-[#002147] text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
            <div className="flex items-center space-x-3">
                <img
                    src="/gov-logo.png"
                    alt="Government Logo"
                    className="h-8 w-8 object-contain"
                />
                <h1 className="text-lg font-semibold tracking-wide">
                    District Officer Dashboard
                </h1>
            </div>

            <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-200">Welcome, Officer</span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-3 py-1 rounded-md transition">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default DistrictNavbar;
