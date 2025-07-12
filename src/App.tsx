import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Hero from './components/Hero';
import PlantGuides from './components/PlantGuides';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import TikTokStats from './components/TikTokStats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Simple routing based on hash
  const currentHash = window.location.hash;
  
  if (currentHash === '#checkout') {
    return (
      <CartProvider>
        <Checkout />
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Header />
        <Cart />
        <Hero />
        <TikTokStats />
        <PlantGuides />
        <Gallery />
        <Shop />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;