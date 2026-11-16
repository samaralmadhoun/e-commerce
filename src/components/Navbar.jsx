import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    
    <header className="sticky top-0 z-50 bg-[#070A0F] backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-4xl font-extrabold tracking-wider text-cyan-400 bg-clip-text">
              TECH<span className="text-white">HUB</span>
              </span>
          </div>

          <ShoppingCart className="w-5 h-5 lg:hidden translate-x-10 text-gray-300 hover:bg-cyan-400 active:scale-95 transition-all group-hover:scale-110 transition-transform" />

          <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center md:gap-5 gap-8 text-md font-medium text-slate-300">
            <NavLink to="/" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Shop</NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Gaming</NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Audio</NavLink>
            <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Contact</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute right-5 bottom-2.5 w-6 h-5 text-slate-500/80 pointer-events-none" />
              <input
                type="text"
                placeholder="Live Search..."
                className="w-48 xl:w-64 bg-slate-900 border border-slate-700/80 rounded-full py-2 pl-4 pr-10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div className="relative">
              <ShoppingCart className="w-7 h-6  text-gray-300 cursor-pointer" strokeWidth={1.5} />
            </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-lg ${
        isMobileMenuOpen ? 'max-h-96 opacity-100 py-6 space-y-2 px-4' : 'max-h-0 opacity-0 py-0 px-4 pointer-events-none'
      }`} 
      >
          
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Live Search..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-sm text-slate-200"
            />
          </div>
          
          <nav className=" flex flex-col items-start items-center gap-5 text-md font-medium text-slate-300">
          <NavLink to="/" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Shop</NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Laptops</NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Gaming</NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Audio</NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>About Us</ NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
                isActive ? "text-cyan-400 transition-colors" : "hover:text-cyan-400 transition-colors"}>Contact</NavLink>
        </nav>
        </div>
      
      </div>
      
    </header>
  );
};

export default Navbar;