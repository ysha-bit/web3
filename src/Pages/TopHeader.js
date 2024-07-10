/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header flex items-center justify-between px-4 py-2 bg-gray-100">
        <div id="logo1" className="flex-shrink-0">
            <img src="assets/Plogo.png" alt="Polisi image" className="h-20 w-20" />
        </div>
        <div className="tittle text-center flex-grow">
            <h1 className="h1 text-3xl font-bold">Police Traffic Online System ZANZIBAR</h1>
        </div>
        <div id="logo2" className="flex-shrink-0">
            <img src="assets/flag.png" alt="hakuna pucha kwanza" className="h-20 w-20" />
        </div>
    </div>
    );
}

export default TopHeader;