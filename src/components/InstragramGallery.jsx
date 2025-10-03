import React from "react";

const InstagramGallery = () => {

    const images = [
        "https://i.ibb.co.com/Kc3HxgTn/Rectangle-9.png",
        "https://i.ibb.co.com/V0VvSkYM/Rectangle-10.png",
        "https://i.ibb.co.com/Kcnnz4wn/Rectangle-11.png",
        "https://i.ibb.co.com/rRD4jjLY/Rectangle-12.png",
        "https://i.ibb.co.com/qMfNG7Gz/Rectangle-13.png",
        "https://i.ibb.co.com/NdZ5BkbV/Rectangle-14.png",
        "https://i.ibb.co.com/7xHDgsgj/Rectangle-15.png",
        "https://i.ibb.co.com/TxfrpJbt/Rectangle-16.png",
    ];

    return (
        <div className="bg-[#f2f2f2] py-12 px-6 rounded-2xl mt-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-brown-700 drop-shadow-sm">
                Follow on Instagram
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={src}
                            alt={`Coffee ${index + 1}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramGallery;
