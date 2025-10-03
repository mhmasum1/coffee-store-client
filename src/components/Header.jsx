import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-[oklch(28.6%_0.066_53.813)] shadow-md py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="no-underline">
                    <h1 className="text-3xl font-bold text-white">
                        ☕ Cup & Comfort
                    </h1>
                </Link>

                {/* Add Coffee Button */}
                <Link to="/addCoffee">
                    <button className="bg-white font-bold text-black px-6 py-2 rounded-lg cursor-pointer text-base hover:bg-gray-100 transition">
                        Add Coffee
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
