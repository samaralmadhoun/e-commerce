import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

const PromoBanner = () => {
return (
    <section className="py-12 bg-[#070A0F]  relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#151C2C] via-[#0F172A] to-[#151C2C] border border-cyan-500/30 overflow-hidden p-8 sm:p-12 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            
    
            <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>Limited Time Offer</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight uppercase">
                Special Cyber Deal <br />
                    <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        Up To 35% OFF
                    </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Upgrade your gaming setup with premier mechanical keyboards, high-fidelity headsets, and ultra-fast storage components.
            </p>

            <div>
                <button className="flex hover:bg-cyan-400 active:scale-95 transition-all items-center cursor-pointer gap-3 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] uppercase tracking-wider">
                    <span>Claim Discount</span>
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
            </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-0">
            <div className="bg-[#0B0F17]/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md">
                <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold text-base mb-1">2-Year Warranty</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Full official coverage on all high-end gaming hardware & accessories.
                </p>
            </div>

            <div className="bg-[#0B0F17]/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md">
                <Truck className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold text-base mb-1">Express Delivery</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Safe, insured, and ultra-fast doorstep shipping for your orders.
                </p>
            </div>
            </div>

        </div>

        </div>

    </div>
    </section>
);
};

export default PromoBanner;