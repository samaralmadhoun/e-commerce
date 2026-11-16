import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const products = [
{
    id: 1,
    name: 'ROG Strix Scar 18 Gaming Laptop',
    category: 'Laptops',
    price: 2499.99,
    originalPrice: 2799.99,
    rating: 4.9,
    reviews: 128,
    image: '/laptop.jpg',
    tag: 'Best Seller',
},
{
    id: 2,
    name: 'Cyber Acoustics Wireless Headset',
    category: 'Audio',
    price: 189.00,
    originalPrice: 229.00,
    rating: 4.8,
    reviews: 95,
    image: '/Wireless Headset.jpg',
    tag: 'Sale',
},
{
    id: 3,
    name: 'Apex Pro Mechanical Keyboard',
    category: 'Keyboards',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 210,
    image: '/keyboard.png',
    tag: 'New',
},
{
    id: 4,
    name: 'Viper Wireless Precision Mouse',
    category: 'Mice',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 340,
    image: '/mouse.jpg',
    tag: 'Popular',
},
];

const FeaturedProducts = () => {
const [favorites, setFavorites] = useState({});

const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
};

return (
    <section className="py-16 bg-[#070A0F] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-slate-800/80 pb-6">
        <div>
            <span className="text-cyan-400 text-sm tracking-widest uppercase">
                Top Selection
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Products
            </h2>
        </div>

        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors mt-4 sm:mt-0 flex items-center gap-1">
            View All Products &rarr;
        </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="group relative bg-[#151C2C]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1"
                >
            
                <div className="relative aspect-square bg-slate-900/60 overflow-hidden flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                {product.tag && (
                    <span className="absolute top-3 left-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                        {product.tag}
                    </span>
                )}

                <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-slate-900/70 hover:bg-slate-900 border border-slate-700/60 rounded-full text-slate-300 hover:text-red-400 transition-colors backdrop-blur-md"
                >

                    <Heart
                        className={`w-4 h-4 cursor-pointer ${
                        favorites[product.id] ? 'fill-red-500 text-red-500' : ''
                        }`}
                    />
                </button>

                </div>

            
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <span className="text-xs text-slate-400 font-medium">
                        {product.category}
                    </span>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1 mt-1">
                        {product.name}
                    </h3>

                  {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-2">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-slate-200">
                            {product.rating}
                        </span>

                        <span className="text-xs text-slate-500">
                            ({product.reviews})
                        </span>
                    </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                    <span className="text-lg font-black text-white">
                        ${product.price}
                    </span>

                    {product.originalPrice && (
                        <span className="block text-xs text-slate-500 line-through">
                            ${product.originalPrice}
                        </span>
                    )}
                </div>

                    <button className="flex hover:bg-cyan-400 active:scale-95 transition-all items-center gap-2 px-3.5 py-2 cursor-pointer rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 text-cyan-400 hover:text-slate-950 font-bold text-xs transition-all shadow-md group/btn">
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                    </button>

                </div>
                </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
};

export default FeaturedProducts;