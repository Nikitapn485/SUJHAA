import React from 'react';
import centralNavbar from './centralNavbar';
import centralSidebar from './centralSidebar';
import centralDashBoard from './centralDashBoard';

const CentralLayout = () => {
    return (
        <div>
            <centralNavbar />
            <div className='flex'>
                <centralSidebar />
                <centralDashBoard.jsx />
            </div>
        </div>
    )
}

export default CentralLayout;