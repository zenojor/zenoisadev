import React from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionFrameProps {
  title: string;
  id: string;
  children: React.ReactNode;
  code?: string;
}

export const SectionFrame: React.FC<SectionFrameProps> = ({ title, id, children, code = "00-1" }) => {
  const { ref, isVisible } = useInView<HTMLElement>(0.1);

  return (
    <section 
      ref={ref}
      id={id} 
      className={`relative w-full max-w-6xl mx-auto mb-24 px-4 scroll-mt-24 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Decorative Top Bar */}
      <div className="flex items-end mb-2">
        <div className="bg-zeno-yellow text-zeno-blue px-4 py-1 font-bold text-sm border-2 border-zeno-yellow">
          DIR: {title}
        </div>
        <div className="h-[2px] bg-zeno-yellow flex-grow ml-2 relative top-[-2px]"></div>
        <div className="text-zeno-yellow font-xs ml-2 tracking-widest opacity-70 hidden sm:block">
          SEC-{code} // R-W
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-zeno-offwhite border-l-4 border-zeno-yellow p-6 md:p-10 relative shadow-[10px_10px_0px_0px_rgba(25,53,163,0.5)]">
        {/* Corner Decals */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-zeno-blue"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-zeno-blue"></div>
        
        {children}
      </div>
    </section>
  );
};