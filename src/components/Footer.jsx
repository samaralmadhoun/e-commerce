import React from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';

const Footer = () => {
return (
    <footer className="bg-[#070A0F] border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
                <span className="text-3xl font-black tracking-wider text-cyan-400">
                    TECH<span className="text-white">HUB</span>
                </span>
            </div>
            
            <p className="text-slate-400 lg:text-[15px] text-sm leading-relaxed max-w-sm">
                Your ultimate destination for next-gen gaming hardware, high-end PC components, and cutting-edge tech accessories.
            </p>  
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2.5 text-sm">
                    <li><a href="#home" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Home</a></li>
                    <li><a href="#categories" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Categories</a></li>
                    <li><a href="#products" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Featured Products</a></li>
                    <li><a href="#deals" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Cyber Deals</a></li>
                </ul>
        </div>

        {/* Categories */}
        <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Top Categories</h4>
                <ul className="space-y-2.5 text-sm">
                    <li><a href="#laptops" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Gaming Laptops</a></li>
                    <li><a href="#keyboards" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Mechanical Keyboards</a></li>
                    <li><a href="#headsets" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Audio & Headsets</a></li>
                    <li><a href="#storage" className="hover:text-cyan-400 transition-colors active:text-cyan-400">Components & Storage</a></li>
                </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>support@techhub.com</span>
                </li>

                <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>+970 59 000 0000</span>
                </li>

                <li className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Gaza, Palestine</span>
                </li>

            </ul>
        </div>

        </div>


        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2026 TECHHUB. All rights reserved.</p>
        
        <div className="flex items-center gap-6 text-slate-500">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#warranty" className="hover:text-slate-300 transition-colors">Warranty Info</a>
        </div>
        </div>

    </div>
    </footer>
);
};

export default Footer;