import React from 'react';
import { SectionFrame } from './ui/SectionFrame';
import { Skill } from '../types';
import {
  Code2,
  Layout,
  Server,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Zap,
  GitBranch,
  Braces,
  Container,
  Image,
  Film,
  PenTool,
  Music
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SKILLS: (Skill & { icon: React.ReactNode })[] = [
  // Frontend
  { name: 'React', level: 95, category: 'FRONTEND', icon: <Code2 size={20} /> },
  { name: 'Next.js', level: 90, category: 'FRONTEND', icon: <Globe size={20} /> },
  { name: 'TypeScript', level: 92, category: 'FRONTEND', icon: <Braces size={20} /> },
  { name: 'Tailwind', level: 95, category: 'FRONTEND', icon: <Layout size={20} /> },
  { name: 'Vue.js', level: 85, category: 'FRONTEND', icon: <Layers size={20} /> },

  // Backend
  { name: 'Node.js', level: 88, category: 'BACKEND', icon: <Server size={20} /> },
  { name: 'Python', level: 75, category: 'BACKEND', icon: <Terminal size={20} /> },
  { name: 'C', level: 70, category: 'BACKEND', icon: <Terminal size={20} /> },

  // Tools
  { name: 'Docker', level: 78, category: 'TOOLS', icon: <Container size={20} /> },
  { name: 'Git', level: 90, category: 'TOOLS', icon: <GitBranch size={20} /> },
  { name: 'Vite', level: 92, category: 'TOOLS', icon: <Zap size={20} /> },

  // Creative
  { name: 'Photoshop', level: 85, category: 'CREATIVE', icon: <Image size={20} /> },
  { name: 'After Effects', level: 80, category: 'CREATIVE', icon: <Film size={20} /> },
  { name: 'Illustrator', level: 82, category: 'CREATIVE', icon: <PenTool size={20} /> },
  { name: 'FL Studio', level: 90, category: 'CREATIVE', icon: <Music size={20} /> },
];

export const Skills: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <SectionFrame title="SYSTEM_DIAGNOSTICS" id="about" code="09-F">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Operational Brief (Bio) - Spans 4 columns */}
        <div className={`lg:col-span-4 flex flex-col h-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="bg-zeno-blue text-white p-4 border-2 border-zeno-blue mb-6 shadow-[4px_4px_0px_0px_rgba(240,214,66,1)]">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-zeno-yellow animate-pulse"></span>
              OPERATIONAL_BRIEF
            </h3>
            <div className="h-[2px] w-full bg-zeno-white/20 mb-4"></div>
            <p className="text-sm leading-relaxed text-zeno-white/90 font-light">
              来自重庆的一名24级计算机类学生。对前端开发有浓厚的兴趣，正在学习React和TypeScript。热衷于开发有趣且实用的项目，热衷于钻研新的技术。除了网页开发，我在设计以及音乐方面也有所涉猎。我会用AE,PS以及其他设计软件来做一些视觉作品。也略懂一些混音技术。
            </p>
          </div>

          <div className="mt-auto border-2 border-dashed border-zeno-blue/30 p-4 bg-white/50">
            <div className="text-[10px] font-bold text-zeno-blue/50 mb-2 tracking-widest">CURRENT_STATUS</div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute top-0 left-0 opacity-50"></div>
              </div>
              <span className="text-lg font-bold text-zeno-blue">AVAILABLE</span>
            </div>
            <div className="text-xs text-zeno-blue/70 mt-1">Ready for contract work</div>
          </div>
        </div>

        {/* Right Column: Tech Grid - Spans 8 columns */}
        <div className="lg:col-span-8">
          <div className={`flex items-center justify-between mb-4 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h4 className="text-sm font-bold text-zeno-blue uppercase tracking-widest bg-zeno-yellow/20 px-2 py-1 inline-block">
              INSTALLED_MODULES ({SKILLS.length})
            </h4>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-1 bg-zeno-blue/30"></div>)}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SKILLS.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <div
                  className="group relative bg-white border border-zeno-blue hover:border-zeno-yellow p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1935A3] h-full cursor-default"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-zeno-yellow opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>

                  <div className="relative z-10 flex flex-col items-center text-center gap-2">
                    <div className="text-zeno-blue group-hover:text-zeno-blue transition-colors p-2 bg-zeno-offwhite rounded-sm group-hover:bg-white/50">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-zeno-blue">{skill.name}</div>
                      <div className="text-[9px] text-zeno-blue/50 font-mono mt-1 group-hover:text-zeno-blue/70">
                        {skill.category}
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zeno-blue opacity-20 group-hover:opacity-100 group-hover:border-zeno-blue"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionFrame>
  );
};