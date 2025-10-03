import React from 'react';
import heroBg from '../assets/more/12.jpg';

const Hero = () => {
    return (
        <div
            className="h-[600px] flex relative"
            fixed height instead of min-h-screen
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="relative z-10 w-1/2 text-right text-white self-center ml-auto mr-32 p-4">

                <h3 className="mb-5 text-5xl text-white font-serif font-bold italic">
                    Would you like a Cup of Delicious Coffee?
                </h3>

                <p className="mb-8 text-white text-lg leading-relaxed">
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>

                <button className="btn bg-[white] hover:bg-[#d0a76f] text-black border-none px-8 py-3 text-lg">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Hero;