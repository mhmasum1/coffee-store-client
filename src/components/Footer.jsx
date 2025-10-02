import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, label: 'Facebook' },
        { icon: Twitter, label: 'Twitter' },
        { icon: Instagram, label: 'Instagram' },
        { icon: Linkedin, label: 'LinkedIn' }
    ];

    const contactInfo = [
        { icon: Phone, text: '+88 01533 333 333' },
        { icon: Mail, text: 'info@gmail.com' },
        { icon: MapPin, text: '72, Wall street, King Road, Dhaka' }
    ];

    return (
        <footer className="bg-[#FEF3C7] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">


                    <div className="space-y-8">

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-amber-950 rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                                <div className="text-white text-2xl">☕</div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold ">
                                Cup & Comfort
                            </h2>
                        </div>

                        <p className=" text-lg leading-relaxed max-w-md">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>


                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <div
                                        key={index}
                                        className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center text-white"
                                    >
                                        <Icon size={20} />
                                    </div>
                                );
                            })}
                        </div>


                        <div className="space-y-6 pt-4">
                            <h3 className="text-3xl font-serif font-bold">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 "
                                        >
                                            <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transform transition-all duration-300">
                                                <Icon size={18} />
                                            </div>
                                            <span className="text-lg">{contact.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold  text-center lg:text-left">
                            Connect with Us
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-6 py-4 bg-white border border-amber-200 rounded-2xl text-black placeholder-black "
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-6 py-4 bg-white border border-amber-200 rounded-2xl text-black placeholder-black"
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full px-6 py-4 bg-white border border-amber-200 rounded-2xl text-black placeholder-black"
                                />
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <button className="group relative px-8 py-4 bg-amber-900 text-white rounded-full font-serif text-lg font-semibold hover:bg-amber-950 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 cursor-pointer">
                                    <span>Send Message</span>
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t-2 border-rose-200">
                    <p className="text-center text-amber-800 text-sm md:text-base">
                        © 2025 Espresso Emporium. All rights reserved. Made with ☕ and ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;