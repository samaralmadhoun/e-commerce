import React, { useState } from 'react';
import { Search, Star, ShoppingCart, ArrowUpDown } from 'lucide-react';

const productsData = [
  // Laptops
  {
      id: 1, name: 'ASUS ROG Strix Scar 16',
      category: 'Laptops',
      price: 2499, 
      rating: 4.9, 
      image: '/laptop.jpg' 
  },

  { 
    id: 2, 
    name: 'Razer Blade 15 Gaming', 
    category: 'Laptops', 
    price: 2199, 
    rating: 4.8, 
    image: '/laptop1.jpg' 
  },
  
  // Keyboards
  { 
    id: 3, 
    name: 'Cyberpunk Mechanical RGB', 
    category: 'Keyboards', 
    price: 149, 
    rating: 4.8, 
    image: '/keyboard.png' 
  },
  { 
    id: 4, 
    name: 'Logitech G PRO X Wireless', 
    category: 'Keyboards', 
    price: 199, 
    rating: 4.7, 
    image: '/keyboard1.jpg' 
  },

  // Headsets & Audio
  { 
    id: 5, 
    name: 'SteelSeries Arctis Nova Pro', 
    category: 'Headsets', 
    price: 349, 
    rating: 4.9, 
    image: '/Wireless Headset.jpg' 
  },
  { 
    id: 6, 
    name: 'HyperX Cloud Alpha Wireless', 
    category: 'Headsets', 
    price: 179, 
    rating: 4.6, 
    image: '/wireless earbuds.jpg' 
  },

  // Components (GPU / Memory)
  { 
    id: 7, 
    name: 'Nvidia RTX 4090 OC 24GB', 
    category: 'Components', 
    price: 1799, 
    rating: 5.0, 
    image: '/component.jpg' 
  },
  { 
    id: 8, 
    name: 'Corsair Vengeance 32GB DDR5', 
    category: 'Components', 
    price: 159, 
    rating: 4.8, 
    image: '/component1.jpg' 
  },

  // Accessories & Mice
  { 
    id: 9, 
    name: 'Logitech G Pro X Superlight', 
    category: 'Accessories', 
    price: 139, 
    rating: 4.9, 
    image: '/mouse.jpg' 
  },
  { 
    id: 10, 
    name: 'Razer DeathAdder V3 Pro', 
    category: 'Accessories', 
    price: 149, 
    rating: 4.7, 
    image: '/mouse1.jpg' 
  },

  // Displays
  { 
    id: 11, 
    name: 'Samsung Odyssey G9 49" OLED', 
    category: 'Displays', 
    price: 1299, 
    rating: 4.9, 
    image: '/display.jpg' 
  },
  { 
    id: 12, 
    name: 'ASUS Swift 27" 240Hz 4K', 
    category: 'Displays', 
    price: 699, 
    rating: 4.8, 
    image: '/display1.jpg' 
  },
];

const categories = ['All', 'Laptops', 'Keyboards', 'Headsets', 'Components', 'Displays', 'Accessories'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = productsData
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            <span className="text-4xl font-extrabold tracking-wider text-cyan-400 bg-clip-text">
              TECH</span><span className="text-4xl">HUB</span> <span className="text-cyan-400">Store</span>
            </h1>
            <p className="text-slate-400 text-md md:text-xl mt-2">Browse our complete collection of high-end hardware & tech gear.</p>
          </div>
          <span className="text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3 py-1.5 rounded-xl w-fit">
            {filteredProducts.length} Products Found
          </span>
        </div>

        {/* Filters & Control Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10 bg-[#0F172A]/90 border border-slate-800 p-4 rounded-2xl">
          
          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search hardware..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#151C2C] border border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-cyan-400 text-white placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto py-1 scrollbar-none">
            { categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 cursor-pointer rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-[#151C2C] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
            <ArrowUpDown className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#151C2C] border cursor-pointer border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none focus:border-cyan-400 w-full lg:w-auto"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[#0F172A] border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Product Image */}
                <div className="h-80 overflow-hidden relative bg-[#151C2C]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800 text-cyan-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold">{product.rating}</span>
                    </div>

                    <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <span className="text-lg font-black text-cyan-400">${product.price}</span>
                    
                    <button className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-slate-950 text-xs font-bold rounded-xl transition-all">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0F172A]/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400">No products found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;