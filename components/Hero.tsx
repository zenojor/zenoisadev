import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Disc, Volume2, Rewind, FastForward, Play } from 'lucide-react';
import { RetroButton } from './ui/RetroButton';

export const Hero: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // Tape Counter Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev < 999 ? prev + 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 -mt-24">
        {/* Top decoration */}
        <div className="flex justify-between items-end mb-8 border-b-2 border-zeno-yellow pb-2 animate-fade-in-up opacity-0">
          <span className="text-zeno-yellow text-xs sm:text-sm tracking-[0.2em]">FREQ: 104.5 MHZ</span>
          {/* Signal Blocks: Cycling Animation */}
          <div className="flex gap-2">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-3 h-3 bg-zeno-yellow animate-pulse"
                style={{ animationDelay: `${i * 300}ms` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Main Title */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tighter shadow-black drop-shadow-lg animate-fade-in-up opacity-0 delay-100">
              HELLO,<br />
              I AM <span className="text-zeno-yellow bg-zeno-blue px-2 inline-block transform hover:scale-105 transition-transform duration-300">ZENO</span>
            </h1>
            <p className="text-xl md:text-2xl text-zeno-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in-up opacity-0 delay-200">
              <span className="bg-zeno-yellow text-zeno-blue px-1 font-bold mr-2">ROLE:</span>
              FRONTEND_DEVELOPER & <br></br>
              UI_ENGINEER & ARTIST
            </p>
            <p className="text-sm md:text-base text-zeno-white/70 mb-10 max-w-xl font-light border-l-0 lg:border-l-2 border-zeno-yellow lg:pl-4 animate-fade-in-up opacity-0 delay-200">
              创造力渲染我看到的一切.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 delay-300">
              <RetroButton label="VIEW PROJECTS" onClick={scrollToProjects} />
              <RetroButton label="LINK NOW" variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
          </div>

          {/* Right Column: Cassette Deck Visualizer */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in-up opacity-0 delay-300 scale-90 lg:scale-100">
            <div className="relative bg-[#1a1a1a] border-4 border-zeno-white/10 rounded-xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Device Header */}
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                <div className="text-xs text-zeno-yellow font-bold tracking-widest">SONY_WALKMAN_PROTO_01</div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="text-[10px] text-red-500 font-bold">REC</div>
                </div>
              </div>

              {/* Tape Window */}
              <div className="bg-zeno-white/90 rounded p-4 mb-4 relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:4px_4px]"></div>

                <div className="flex justify-between items-center relative z-10">
                  {/* Left Spool */}
                  <div className="w-16 h-16 rounded-full border-4 border-gray-400 bg-white flex items-center justify-center animate-spin-slow">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 border-dashed"></div>
                    <div className="absolute w-2 h-2 bg-black rounded-full"></div>
                  </div>

                  {/* Tape Window Middle */}
                  <div className="flex-grow mx-4 h-12 bg-transparent border-t-2 border-b-2 border-black/10 flex items-center justify-center">
                    <div className="text-xs font-mono font-bold text-black/50">TDK-90</div>
                  </div>

                  {/* Right Spool */}
                  <div className="w-16 h-16 rounded-full border-4 border-gray-400 bg-white flex items-center justify-center animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 border-dashed"></div>
                    <div className="absolute w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Controls & Display */}
              <div className="grid grid-cols-2 gap-4">
                {/* LCD Display */}
                <div className="bg-[#2a3b2a] p-2 rounded border-2 border-gray-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="font-mono text-green-400 text-sm opacity-80 flex justify-between">
                    <span>PLAY</span>
                    <span>A-SIDE</span>
                  </div>
                  <div className="font-mono text-green-400 text-xl font-bold tracking-widest text-center mt-1">
                    {counter.toString().padStart(3, '0')}
                  </div>
                </div>

                {/* VU Meter */}
                <div className="flex gap-1 items-end justify-center bg-black/50 p-2 rounded h-full">
                  {[1, 2, 3, 4, 5].map(bar => (
                    <div key={bar} className="w-2 bg-zeno-yellow/20 h-full relative overflow-hidden">
                      <div
                        className="absolute bottom-0 left-0 w-full bg-zeno-yellow transition-all duration-150"
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          opacity: 0.8
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Buttons */}
              <div className="flex justify-between mt-6 px-2">
                <div className="w-8 h-8 rounded bg-gray-700 shadow-[0_4px_0_#333] active:shadow-none active:translate-y-[4px] flex items-center justify-center cursor-pointer hover:bg-gray-600">
                  <Rewind size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded bg-zeno-yellow shadow-[0_4px_0_#b5a02e] active:shadow-none active:translate-y-[4px] translate-y-[2px] shadow-none flex items-center justify-center cursor-pointer">
                  <Play size={14} className="text-zeno-blue fill-current" />
                </div>
                <div className="w-8 h-8 rounded bg-gray-700 shadow-[0_4px_0_#333] active:shadow-none active:translate-y-[4px] flex items-center justify-center cursor-pointer hover:bg-gray-600">
                  <FastForward size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded bg-gray-700 shadow-[0_4px_0_#333] active:shadow-none active:translate-y-[4px] flex items-center justify-center cursor-pointer hover:bg-gray-600">
                  <div className="w-3 h-3 bg-white"></div>
                </div>
              </div>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -z-10 top-10 -right-10 text-zeno-yellow/10">
              <Disc size={200} className="animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce cursor-pointer hover:text-white transition-colors" onClick={scrollToProjects}>
        <ArrowDownCircle className="text-zeno-yellow w-10 h-10" />
      </div>
    </div>
  );
};