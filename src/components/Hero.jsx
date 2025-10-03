import React from 'react';
import heroBg from '../assets/more/12.jpg';

const Hero = () => {
    return (
        <div
            className="h-[600px] flex relative"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Full Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Section */}
            <div className="relative z-10 w-full md:w-1/2 text-right text-white self-center ml-auto mr-6 md:mr-32 p-6">
                <h3 className="mb-5 text-3xl md:text-5xl font-serif font-bold italic drop-shadow-lg">
                    Would you like a Cup of Delicious Coffee?
                </h3>

                <p className="mb-8 text-sm md:text-lg leading-relaxed drop-shadow-md">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>

                <button className="btn bg-white hover:bg-[#d0a76f] text-black border-none px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold shadow-md">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Hero;
