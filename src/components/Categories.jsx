import React from 'react';
import { Laptop, HeadphoneOff, Keyboard, Mouse, Smartphone, HardDrive, ArrowUpRight } from 'lucide-react';

const categories = [
{
    id: 1,
    title: 'Gaming Laptops',
    count: '24 Products',
    icon: Laptop,
    color: 'from-cyan-500/20 to-blue-500/10',
},
{
    id: 2,
    title: 'Audio & Headsets',
    count: '38 Products',
    icon: HeadphoneOff,
    color: 'from-blue-500/20 to-indigo-500/10',
},
{
    id: 3,
    title: 'Mechanical Keyboards',
    count: '19 Products',
    icon: Keyboard,
    color: 'from-cyan-500/20 to-teal-500/10',
},
{
    id: 4,
    title: 'Gaming Mice',
    count: '27 Products',
    icon: Mouse,
    color: 'from-sky-500/20 to-blue-500/10',
},
{
    id: 5,
    title: 'Smart Gadgets',
    count: '42 Products',
    icon: Smartphone,
    color: 'from-teal-500/20 to-cyan-500/10',
},
{
    id: 6,
    title: 'Components & Storage',
    count: '31 Products',
    icon: HardDrive,
    color: 'from-blue-600/20 to-cyan-500/10',
},
];

const Categories = () => {
return (
    <section className="py-16 bg-[#070A0F] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800/80 pb-6">
            <div>
                <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                    Browse By Category
                </span>
                
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Explore Tech Collections
            </h2>

            </div>
                <p className="text-slate-400 text-md max-w-md mt-2 md:mt-0">
                    Find everything you need for your ultimate workspace and gaming setup.
                </p>
            </div> 

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
                const IconComponent = cat.icon;

            return (
                <div
                    key={cat.id}
                    className="group relative active:scale-95 transition-all bg-[#151C2C]/80 hover:bg-[#1E293B]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">

                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    
                    <div className="p-3.5 bg-slate-900 border border-slate-700/60 rounded-xl group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {cat.title}
                        </h3>

                        <span className="text-md text-slate-400 font-medium">
                            {cat.count}
                        </span>
                    </div>
                </div>

                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </div>
                </div>
            );
        })}
        </div>

        </div>
    </section>
  );
};

export default Categories;