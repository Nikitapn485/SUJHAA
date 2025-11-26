import React from 'react'
import Navbar from './Navbar';
import { Sidebar } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const BeneficiaryLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default BeneficiaryLayout;