import React from 'react';
import { ShoppingCart } from 'lucide-react'; 

const Nav = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <span className="text-xl font-bold text-purple-700">DigiTools</span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#products" className="hover:text-purple-600 transition">Products</a>
        <a href="#features" className="hover:text-purple-600 transition">Features</a>
        <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
        <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
        <a href="#faq" className="hover:text-purple-600 transition">FAQ</a>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-gray-700 hover:text-[#4F39F6] transition relative">
          <ShoppingCart size={20} />
        </button>
        
        <button className="text-gray-700 font-medium hover:text-[#4F39F6] transition">
          Login
        </button>

        <button id='txt-white' className="bg-gradient-to-r cursor-pointer from-[#4F39F6] to-[#800080] text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Nav;