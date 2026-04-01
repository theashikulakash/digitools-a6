import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Nav = ({ cartCount = 0, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-34 flex items-center mx-auto justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <span onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="text-xl font-bold text-purple-700 cursor-pointer">DigiTools</span>
      </div>


      <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#products" className="hover:text-purple-600 transition">Products</a>
        <a href="#features" className="hover:text-purple-600 transition">Features</a>
        <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
        <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
        <a href="#faq" className="hover:text-purple-600 transition">FAQ</a>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <button 
          onClick={() => {
            setActiveTab('cart');
            setTimeout(() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="text-gray-700 hover:text-[#4F39F6] transition relative cursor-pointer"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none animate-pulse">
              {cartCount > 9 ? '9+' : cartCount}
            </span>
          )}
        </button>

        <button className="hidden sm:block text-gray-700 font-medium hover:text-[#4F39F6] transition">
          Login
        </button>

        <button id='txt-white' className="hidden sm:block bg-gradient-to-r cursor-pointer from-[#4F39F6] to-[#800080] text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-md">
          Get Started
        </button>


        <button 
          className="lg:hidden text-gray-700 hover:text-purple-600 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden flex flex-col p-6 space-y-4 border-t border-gray-100 z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-purple-600 transition">Products</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-purple-600 transition">Features</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-purple-600 transition">Pricing</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-purple-600 transition">Testimonials</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-purple-600 transition">FAQ</a>
          <hr className="border-gray-100" />
          <div className="flex flex-col space-y-3 sm:hidden">
            <button className="text-gray-700 font-medium hover:text-purple-600 transition text-left">
              Login
            </button>
            <button id='txt-white' className="bg-gradient-to-r from-[#4F39F6] to-[#800080] text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-md text-center">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
