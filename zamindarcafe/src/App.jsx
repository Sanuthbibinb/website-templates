import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee, MapPin, Phone, Instagram, Facebook, ChevronRight, Star, Quote, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from './data.js';
import Metahelmet from './components/Metahelmet.jsx';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const phoneNumber = "919482211264";
  const message = "Hello! I want to order.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Metahelmet/>
      <div className="min-h-screen bg-zamindar-dark text-zamindar-light font-sans overflow-x-hidden selection:bg-zamindar-yellow selection:text-black">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-zamindar-gray/50 ${scrolled ? 'bg-zamindar-dark/90 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-zamindar-dark shadow-[0_0_15px_rgba(255,193,7,0.4)] overflow-hidden">
                  <img src="/logo.png" alt="Zamindar's Cafe Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-heading font-black text-2xl tracking-widest text-zamindar-yellow uppercase leading-none drop-shadow-md">
                    Zamindar's
                  </span>
                  <span className="font-heading text-xs tracking-[0.3em] text-gray-400 uppercase font-semibold mt-1">
                    Cafe
                  </span>
                </div>
              </motion.div>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-10">
                {['Home', 'Menu', 'About'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-300 hover:text-zamindar-yellow transition-all duration-300 font-semibold text-sm uppercase tracking-wider relative group"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-zamindar-yellow transition-all group-hover:w-full"></span>
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-zamindar-yellow text-zamindar-dark font-bold uppercase text-sm tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transform hover:-translate-y-1"
                >
                  Visit Us
                </motion.a>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-zamindar-light hover:text-zamindar-yellow transition-colors p-2"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-zamindar-dark/95 backdrop-blur-xl border-b border-zamindar-gray/50 absolute w-full"
              >
                <div className="px-6 pt-4 pb-8 flex flex-col space-y-6">
                  {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-xl font-heading font-bold text-gray-300 hover:text-zamindar-yellow transition-colors uppercase tracking-widest"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <main>
          {/* Catchy Hero Section */}
          <section id="home" className="min-h-[100svh] relative flex items-center pt-24 pb-12 overflow-hidden bg-zamindar-dark border-b border-zinc-800">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zamindar-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zamindar-yellow/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content */}
                <div className="pt-10 lg:pt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zamindar-yellow/30 text-zamindar-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(255,193,7,0.15)]"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zamindar-yellow opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zamindar-yellow"></span>
                    </span>
                    Welcome To Zamindar's
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl lg:text-[5rem] font-heading font-black text-white leading-[1.05] tracking-tight mb-6"
                  >
                    Taste The <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zamindar-yellow via-[#ffd75e] to-zamindar-yellow relative inline-block drop-shadow-[0_0_25px_rgba(255,193,7,0.3)]">
                      Royalty
                      <span className="absolute -bottom-2 left-0 w-full h-3 bg-zamindar-yellow/20 -rotate-2 rounded-full hidden sm:block"></span>
                    </span>
                    <br /> In Every Sip.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg border-l-4 border-zamindar-yellow pl-5"
                  >
                    Experience the perfect blend of rustic ambiance and premium flavors. Your ultimate cozy hideout in Hongasandra for authentic teas, coffees, and street bites.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="#menu"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-zamindar-yellow to-[#e5ad06] text-zamindar-dark font-black text-base uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,193,7,0.4)] hover:shadow-[0_0_30px_rgba(255,193,7,0.6)]"
                    >
                      <Coffee size={20} />
                      View Menu
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-zinc-700 hover:border-zamindar-yellow text-white font-bold text-base uppercase tracking-wider hover:text-zamindar-yellow hover:bg-zamindar-yellow/5 transition-all duration-300"
                    >
                      Reserve Table
                    </a>
                  </motion.div>
                  {/* Status Badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 flex flex-wrap items-center gap-6"
                  >
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-zamindar-dark overflow-hidden bg-zinc-800">
                          <img src={`/cafeimg${i}.webp`} className="w-full h-full object-cover" alt="Customer" onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                      ))}
                      <div className="w-12 h-12 rounded-full border-2 border-zamindar-dark bg-zinc-800 flex items-center justify-center text-xs font-bold text-white z-10 shadow-lg">
                        500+
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-zamindar-yellow mb-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-zamindar-yellow" />)}
                      </div>
                      <p className="text-sm text-gray-400 font-medium">Happy Customers Today</p>
                    </div>
                  </motion.div>
                </div>
                {/* Right Images Composition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="relative hidden lg:block h-[600px] w-full mt-10 lg:mt-0"
                >
                  {/* Main Large Image */}
                  <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 group">
                    <div className="absolute inset-0 bg-zamindar-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src="/cafeimg1.webp"
                      alt="Cafe Interior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      onError={(e) => { e.target.src = '/cafeimg1.webp' }}
                    />
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 border-[3px] border-zamindar-yellow/30 rounded-[2.5rem] mix-blend-overlay pointer-events-none"></div>
                  </div>
                  {/* Floating Secondary Image */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden border-4 border-zamindar-dark shadow-2xl z-20 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-zamindar-dark/60 to-transparent z-10"></div>
                    <img src="/cafeimg5.webp" alt="Cafe Details" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  </motion.div>
                  {/* Floating Glassmorphism Element */}
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-12 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl z-30 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-zamindar-yellow to-[#e5ad06] rounded-full flex items-center justify-center shadow-inner">
                      <Coffee size={24} className="text-zamindar-dark" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight">Best in Class</h4>
                      <p className="text-zamindar-yellow text-sm font-medium">Signature Blends</p>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-10 right-[-20px] w-24 h-24 bg-[radial-gradient(circle,rgba(255,193,7,0.2)_2px,transparent_2px)] bg-[length:10px_10px] z-0"></div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 lg:hidden"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold rotate-90 translate-y-8 translate-x-30 mb-10">Scroll</span>
              <div className="w-[2px] h-16 bg-zinc-800 relative overflow-hidden rounded-full translate-x-30 translate-y-2">
                <motion.div
                  animate={{ y: [-20, 80] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-zamindar-yellow shadow-[0_0_10px_rgba(255,193,7,1)]"
                />
              </div>
            </motion.div>
          </section>
          {/* About Section */}
          <section id="about" className="py-24 relative bg-[#0a0a0a] border-b border-zinc-800">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zamindar-yellow/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,193,7,0.1)] border border-zinc-800 relative z-10 bg-zinc-900 group">
                    <img
                      src="/cafeimg1.webp"
                      alt="Cafe Ambiance"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = '/zamindar_cafe_hero.png'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zamindar-dark/80 via-transparent to-transparent mix-blend-overlay"></div>

                    {/* Floating badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl flex items-center gap-4">
                      <div className="w-14 h-14 bg-zamindar-yellow rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,193,7,0.4)]">
                        <Star size={24} className="text-zamindar-dark fill-zamindar-dark" />
                      </div>
                      <div>
                        <h4 className="text-white font-heading font-black text-xl">4.9/5 Rating</h4>
                        <p className="text-sm text-gray-400 font-medium">Loved by our daily customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-full h-full border-2 border-zamindar-yellow/20 rounded-3xl z-0 hidden md:block"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-zamindar-yellow"></div>
                    <h3 className="uppercase tracking-widest text-zamindar-yellow font-bold text-sm">Our Story</h3>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-8">
                    Where Heritage Meets <br className="hidden md:block" />
                    <span className="text-gray-400 font-light italic">Everyday Comfort.</span>
                  </h2>
                  <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                    <p>
                      Nestled in the heart of Hongasandra, <strong className="text-white font-semibold">Zamindar's Cafe</strong> was born out of a desire to revive the grandeur of vintage hospitality while offering the cozy charm of a modern hangout spot.
                    </p>
                    <p>
                      Our vibrant yellow walls and warm interiors reflect the joyful spirit of a royal gathering. Whether you're here for our signature Sonti Coffee, a refreshing Mocktail, or just a quick bite of crispy Fries, we promise an experience that lingers.
                    </p>
                  </div>

                  {/* Kannada Hero Quote */}
                  <div className="mt-10 p-6 bg-gradient-to-r from-zinc-900/80 to-zinc-900/30 border-l-4 border-zamindar-yellow rounded-r-2xl relative overflow-hidden">
                    <Quote size={80} className="absolute -top-4 -right-4 text-zinc-800/50 z-0 rotate-12" />
                    <div className="relative z-10 flex flex-col gap-2">
                      <p className="font-heading font-bold text-2xl text-zamindar-yellow drop-shadow-md">
                        "ಯಾವತ್ತೂ ನಗುತ್ತಾ ಇರಿ, ಖುಷಿಯಾಗಿರಿ"
                      </p>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mt-2 flex items-center gap-2">
                        <span className="w-6 h-[1px] bg-gray-500"></span> Dr. Puneeth Rajkumar
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* Gallery Section */}
          <section className="py-20 bg-zamindar-dark border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-heading font-black text-white mb-4 uppercase tracking-wider"
                >
                  The <span className="text-zamindar-yellow">Ambiance</span>
                </motion.h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square rounded-xl overflow-hidden shadow-lg group relative border border-zinc-800"
                  >
                    <img
                      src={i === 4 ? '/cafeimgq4.webp' : `/cafeimg${i}.webp`}
                      alt={`Cafe Ambiance ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-zamindar-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Menu Section */}
          <section id="menu" className="min-h-screen py-24 relative bg-zamindar-dark">
            {/* Decorative subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #FFC107 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-wider"
                >
                  Our <span className="text-zamindar-yellow drop-shadow-[0_0_15px_rgba(255,193,7,0.3)]">Menu</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-24 h-1.5 bg-zamindar-yellow mx-auto rounded-full shadow-[0_0_10px_rgba(255,193,7,0.5)]"
                ></motion.div>
              </div>
              {/* Category Tabs */}
              <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-16 pb-4 scroll-smooth sm:flex-wrap justify-start sm:justify-center">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm uppercase tracking-widest border ${activeCategory === category.id
                        ? 'bg-zamindar-yellow text-zamindar-dark border-zamindar-yellow shadow-[0_0_20px_rgba(255,193,7,0.4)] transform scale-105'
                        : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              {/* Menu Items Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuCategories.find(c => c.id === activeCategory)?.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 hover:border-zamindar-yellow/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zamindar-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-zamindar-yellow transition-colors tracking-wide pr-4 leading-snug">{item.name}</h3>
                        <div className="bg-zamindar-dark border border-zinc-800 px-3 py-1 rounded-lg shadow-inner group-hover:border-zamindar-yellow/30 transition-colors">
                          <span className="font-black text-zamindar-yellow text-lg shrink-0">₹{item.price}</span>
                        </div>
                      </div>

                      <div className="w-full flex items-center gap-4 mt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
                        <Coffee size={14} className="text-zinc-600 group-hover:text-zamindar-yellow transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
          {/* Reviews Section */}
          <section id="reviews" className="py-24 relative bg-[#0a0a0a] border-b border-zinc-800 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800/50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-wider"
                >
                  What People <span className="text-zamindar-yellow drop-shadow-[0_0_15px_rgba(255,193,7,0.3)]">Say</span>
                </motion.h2>
                <div className="w-24 h-1.5 bg-zamindar-yellow mx-auto rounded-full shadow-[0_0_10px_rgba(255,193,7,0.5)] mb-8"></div>

                <div className="flex justify-center items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} className="text-zamindar-yellow fill-zamindar-yellow" />)}
                </div>
                <p className="text-gray-400 font-medium">4.9 on Google Reviews</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Anjan Kumar", text: "I recently visited Zamindar's cafe, a newly opened cafe in the area... The ambiance was cozy and welcoming. The tea itself was well-brewed, with a fresh, calming flavor." },
                  { name: "Pavan Kumar", text: "Tea is very tasty....and ambience is also looking very nice...nice place to chat with friends with tea and snacks.." },
                  { name: "Rachana N", text: "It's nice little place. Taste of the sandwiches were amazing. Loved the black current bubble milkshake." },
                  { name: "Naveeñ Babù", text: "Zamindar's Cafe is awesome for both taste and atmosphere! It's a must-visit spot for a cozy and delicious cafe experience." }
                ].map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative group hover:border-zamindar-yellow/50 transition-colors"
                  >
                    <Quote size={40} className="absolute -top-4 right-4 text-zinc-800 group-hover:text-zamindar-yellow/20 transition-colors" />
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-zamindar-yellow fill-zamindar-yellow" />)}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-zamindar-dark border border-zinc-700 flex items-center justify-center text-zamindar-yellow font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm">{review.name}</h5>
                        <span className="text-xs text-gray-500">Local Guide</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Google Reviews Trust Block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-10 max-w-2xl mx-auto relative overflow-hidden group">
                  {/* Yellow accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-zamindar-yellow rounded-full shadow-[0_0_15px_rgba(255,193,7,0.5)]"></div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-zamindar-yellow fill-zamindar-yellow" />)}
                      </div>
                    </div>

                    <h3 className="text-3xl font-heading font-black text-white mb-2 tracking-tight">⭐ 4.9 Rating on Google</h3>
                    <p className="text-gray-400 font-medium mb-8">Based on Google Reviews</p>

                    <a
                      href="https://www.google.com/search?q=Zamindar's+Cafe+Hongasandra+reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-full border border-zamindar-yellow text-zamindar-yellow font-bold uppercase text-sm tracking-widest hover:bg-zamindar-yellow hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,193,7,0.1)] hover:shadow-[0_0_25px_rgba(255,193,7,0.3)]"
                    >
                      Read All Reviews
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Location / Map Section */}
          <section className="bg-zamindar-dark border-b border-zinc-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-[0_0_30px_rgba(255,193,7,0.05)] h-[400px] relative bg-zinc-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.317765103099!2d77.62143007604314!3d12.887251716719139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150009c91ee3%3A0xea41f6e2f1803730!2s11th%20Main%20Rd%2C%20Maruthi%20Layout%2C%20Hongasandra%2C%20Bengaluru%2C%20Karnataka%20560114!5e0!3m2!1sen!2sin!4v1709618147600!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-zamindar-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-zamindar-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* Brand Info */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zamindar-dark overflow-hidden">
                    <img src="/logo.png" alt="Zamindar's Cafe Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-black text-xl tracking-widest text-zamindar-yellow uppercase leading-none">Zamindar's</span>
                    <span className="font-heading text-[10px] tracking-[0.3em] text-gray-400 uppercase font-semibold mt-1">Cafe</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base pr-4">
                  Experience the royal taste in every sip and bite. A cozy retreat embodying the vintage zamindar vibe for your perfect hangout, serving the finest teas, premium coffees, and delightful street bites.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center hover:bg-zamindar-yellow hover:text-black hover:border-zamindar-yellow transition-all duration-300 group">
                    <Instagram size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center hover:bg-zamindar-yellow hover:text-black hover:border-zamindar-yellow transition-all duration-300 group">
                    <Facebook size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="md:col-span-4 md:col-start-6">
                <h3 className="font-heading font-bold text-xl mb-6 text-white tracking-wide">Visit Us</h3>
                <ul className="space-y-6 text-gray-400">
                  <li className="flex items-start gap-4 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800 shadow-inner group-hover:border-zamindar-yellow/50">
                      <MapPin size={20} className="text-zamindar-yellow" />
                    </div>
                    <span className="leading-relaxed mt-1 text-sm pt-1">
                      11th Main Rd, Maruthi Layout,<br />
                      Hongasandra, Bengaluru,<br />
                      Karnataka 560114
                    </span>
                  </li>
                  <li className="flex items-center gap-4 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800 shadow-inner group-hover:border-zamindar-yellow/50">
                      <Phone size={20} className="text-zamindar-yellow" />
                    </div>
                    <span className="text-base font-semibold tracking-wide mt-1">096767 28598</span>
                  </li>
                </ul>
              </div>

              {/* Timings */}
              <div className="md:col-span-3">
                <h3 className="font-heading font-bold text-xl mb-6 text-white tracking-wide">Opening Hours</h3>
                <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800">
                    <Clock size={20} className="text-zamindar-yellow" />
                    <span className="text-white font-bold uppercase tracking-wider text-sm">Everyday</span>
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between items-center group">
                      <span className="text-gray-400 group-hover:text-white transition-colors">Mon - Sun</span>
                      <span className="text-zamindar-yellow font-bold bg-zamindar-yellow/10 px-3 py-1 rounded-lg">6:00 AM - 10:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 mt-16 pt-8 flex flex-col items-center gap-6">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                <p className="text-zinc-600 text-sm font-medium">
                  &copy; {new Date().getFullYear()} Zamindar's Cafe. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                  <a href="#" className="hover:text-zamindar-yellow transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-zamindar-yellow transition-colors">Terms of Service</a>
                </div>
              </div>

              {/* Demo Credit Footer Badge */}
              <div className="text-center pt-8 border-t border-zinc-900/50 w-full max-w-md">
                <p className="text-zinc-700 text-xs font-medium tracking-widest uppercase mb-1">
                  Website demo created for Zamindar Cafe
                </p>
                <p className="text-zinc-800 text-[10px] font-bold tracking-widest uppercase">
                  Contact developer for website setup
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Floating WhatsApp Order Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-3 py-3 lg:py-2 lg:px-2 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:rotate-12 transition-transform duration-300">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="hidden lg:block font-bold text-[10px] tracking-widest uppercase whitespace-nowrap">Order on WhatsApp</span>
        </motion.a>
      </div>
    </>
  );
}

export default App;
