import React from "react";
import { Home, Users, BarChart2, FileText, AlertCircle, Settings, Activity, Database } from "lucide-react";

const DistrictSidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#002147] text-gray-100 flex flex-col pt-20 shadow-lg border-r border-gray-700">

            {/* Home */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <Home className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Home</span>
            </a>

            {/* Beneficiary Management */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <Users className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Beneficiary Management</span>
            </a>

            {/* Fund Tracker */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <Database className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Fund Tracker</span>
            </a>

            {/* Training Status */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <BarChart2 className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Training Status</span>
            </a>

            {/* Reports & Audit */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <FileText className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Reports & Audit</span>
            </a>

            {/* AI Alerts */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors"
            >
                <AlertCircle className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">AI Alerts</span>
            </a>

            {/* Settings */}
            <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-[#012b5c] transition-colors mt-auto mb-6"
            >
                <Settings className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Settings</span>
            </a>
        </aside>
    );
};

export default DistrictSidebar;
