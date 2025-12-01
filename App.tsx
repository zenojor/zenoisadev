import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './types';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Menu, X, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());

  // Clock Timer
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Spy to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['root', 'projects', 'about', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for navbar height (approx 80px)
          if (rect.top <= 100) {
            current = section === 'root' ? 'home' : section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-zeno-blue text-zeno-blue font-mono selection:bg-zeno-yellow selection:text-zeno-blue">
      {/* Retro Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zeno-blue border-b-4 border-zeno-yellow shadow-lg h-20">
        <div className="w-full h-full max-w-[1400px] mx-auto px-4 lg:px-6 flex justify-between items-center">

          {/* Left: Identity - Simplified to match Time Display style, removed vertical divider */}
          <div className="flex items-center h-12 md:mr-6">
            <div className="flex flex-col items-start text-xs font-bold text-white/90">
              <span className="opacity-60 tracking-wider text-zeno-yellow">STATUS</span>
              <div className="flex items-center gap-2 tracking-widest">
                <span>:: SYS_ACTIVE</span>
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping absolute top-0 left-0 opacity-70"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items (Center-Right) */}
          <div className="hidden lg:flex items-center gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    px-3 py-1 font-bold text-sm tracking-widest transition-all duration-200 border-2
                    ${isActive
                      ? 'bg-zeno-yellow text-zeno-blue border-zeno-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-transparent text-white/70 border-transparent hover:text-white hover:border-white/20 hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: Time */}
          <div className="hidden md:flex items-center gap-6 min-w-fit pl-6 border-l-2 border-zeno-white/20 ml-6 h-12">
            <div className="flex flex-col items-end text-xs font-bold text-white/90">
              <span className="opacity-60 tracking-wider text-zeno-yellow">UTC+8</span>
              <span className="tabular-nums tracking-widest">{formatTime(time)}</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-zeno-blue p-2 border-2 border-zeno-white bg-zeno-yellow shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zeno-blue pt-24 px-6 flex flex-col gap-4 lg:hidden border-b-4 border-zeno-yellow">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="bg-zeno-blue border-2 border-zeno-yellow p-4 text-center font-bold text-lg text-zeno-yellow shadow-[4px_4px_0px_0px_#F0D642] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-zeno-yellow hover:text-zeno-blue"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto mb-8 flex justify-between items-center border-t-2 border-zeno-yellow/30 pt-4 text-zeno-white">
            <div className="text-sm font-bold">
              {formatTime(time)}
            </div>
            <div className="text-sm font-bold text-zeno-yellow">
              UTC+8
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-0">
        <Hero />

        <div className="bg-zeno-blue relative pb-20">
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 text-zeno-white/60 py-12 border-t border-zeno-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            <p>© {new Date().getFullYear()} ZENO-IS-A-DEV</p>
            <p className="text-xs mt-1 opacity-50">VER_1.0</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/zenojor" className="hover:text-zeno-yellow transition-colors">GITHUB</a>
            <a href="https://space.bilibili.com/23738480" className="hover:text-zeno-yellow transition-colors">BILIBILI</a>
            <a href="#" className="hover:text-zeno-yellow transition-colors">XIAOHONGSHU</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;