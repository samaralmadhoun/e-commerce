import react from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

    <main>

    <Routes>

          <Route 
            path="/" 
            element={

              <>
                
              <Hero />
              <Categories />
              <FeaturedProducts />
              <PromoBanner />

              </>
              
            } 
          />

          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        
      </main>

        <Footer />
        
    </>
  );
}
export default App;