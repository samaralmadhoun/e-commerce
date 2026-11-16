import React from 'react';

const Hero = () => {
   return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#070A0F] py-16 dir-ltr" dir="ltr">
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="absolute inset-0 flex justify-between items-center pointer-events-none px-4 md:px-12 opacity-40">
        <div className="w-1 h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]" />
        <div className="w-1 h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            <div className="lg:col-span-2 flex flex-col items-start space-y-13">
            <div className="space-y-7">
                <span className="text-slate-500 text-md md:translate-x-35 font-medium tracking-wider">
                    Gaming Laptop RTX 4090
                </span>

                <h1 className="lg:text-7xl text-3xl font-bold  text-white leading-tight">
                    MASTER YOUR GAME. <br />
                    <span className="text-white lg:text-7xl text-3xl">NEXT-GEN PERFORMANCE.</span>
                </h1>
            </div>

            <button className="flex items-center justify-center gap-2 lg:px-8 lg:py-4 px-3 py-2 cursor-pointer hover:bg-cyan-400 active:scale-95 transition-all rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black transition-shadow shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] text-xl tracking-wider">
                ENTER THE FUTURE
            </button>
            </div>

            <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-6xl scale-110 lg:scale-125 aspect-[16/9] flex items-center justify-center">
            
            <div className="absolute bottom-10 w-3/4 h-25 bg-cyan-500/30 rounded-full blur-2xl transform -rotate-12 pointer-events-none" />

            <img 
                src="/hero-removebg-preview.png" 
                alt="" 
                className="w-full h-full object-contain relative z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"/>
            </div>
            </div>

        </div>
        </div>
    </section>
    );
};

export default Hero;