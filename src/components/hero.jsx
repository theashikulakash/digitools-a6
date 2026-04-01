import React from 'react';
import { Sparkles, Play } from 'lucide-react';
import bannerImg from '../assets/banner.png';

const Hero = () => {
    return (
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="md:w-1/2 space-y-6 flex flex-col items-center md:items-start">
                <span className="bg-purple-100 inline-flex items-center gap-2 text-purple-600 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    <Sparkles size={16} />
                    New: AI-Powered Tools Available
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Supercharge Your <br className="hidden sm:block" />
                    <span className="sec-text">Digital Workflow</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-md">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                    <button id='txt-white' className="bg-gradient-to-r from-[#4F39F6] to-[#800080] cursor-pointer text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition w-full sm:w-auto">
                        Explore Products
                    </button>
                    <button className="border border-purple-600 cursor-pointer text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition flex items-center justify-center w-full sm:w-auto">
                        <Play size={18} className='mr-2' />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end w-full">
                <img src={bannerImg} alt="Digital Workflow" className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl" />
            </div>
        </section>
    );
};

export default Hero;