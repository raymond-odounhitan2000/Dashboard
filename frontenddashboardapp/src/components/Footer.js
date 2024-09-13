import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-lg font-semibold mb-2">My Awesome Site</p>
                        <p className="text-sm text-center placeholder:delay-1000">
                            © {new Date().getFullYear()} My Awesome Site. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
