import React from 'react';

const LandscapeBlocker = () => {
    return (
        <div className="landscape-blocker fixed inset-0 z-[9999] bg-black text-white hidden flex-col justify-center items-center text-center p-10">
            <h2 className="text-2xl font-bold mb-2">Please Rotate Your Device</h2>
            <p className="text-gray-400">We support only Portrait Mode for the best experience.</p>
        </div>
    );
};

export default LandscapeBlocker;
