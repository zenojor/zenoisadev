import React from 'react';
import { SectionFrame } from './ui/SectionFrame';
import { Project } from '../types';
import { ExternalLink, Github, Disc, ArrowRight } from 'lucide-react';
import { RetroButton } from './ui/RetroButton';
import { useInView } from '../hooks/useInView';

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'INFINITE_POP_UPS',
    description: '一个基于原生JavaScript的无限弹窗项目，用Anime.js以及Pixi.js分别实现了弹窗的动画效果和像素粒子效果.',
    tech: ['JavaScript', 'Anime.js', 'Pixi.js'],
    year: '2025',
    status: 'ONLINE',
    demoUrl: 'https://4tiez.netlify.app/',
    codeUrl: '#',
  },
  {
    id: 'p2',
    title: 'ZENO_IS_A_DEV',
    description: '一个基于React以及TailwindCSS的个人网站.',
    tech: ['TypeScript', 'React', 'Tailwind'],
    year: '2025',
    status: 'DEV',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'p3',
    title: '合成大西瓜',
    description: '一个基于Cocos2D的简单的运用物理引擎实现的合成大西瓜小游戏',
    tech: ['Cocos2D', 'JavaScript'],
    year: '2025',
    status: 'ONLINE',
    demoUrl: 'https://bigtiez.netlify.app/',
    codeUrl: '#',
  },
];

export const Projects: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <SectionFrame title="PROJECT_ARCHIVES" id="projects" code="04-A">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={`group bg-white border-2 border-zeno-blue hover:border-zeno-yellow transition-all duration-700 ease-out relative flex flex-col h-full transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Header style like a floppy disk label */}
            <div className="bg-zeno-blue text-white p-3 flex justify-between items-center group-hover:bg-zeno-yellow group-hover:text-zeno-blue transition-colors">
              <span className="font-bold truncate">{project.title}</span>
              <span className={`text-[10px] px-1 py-0.5 border ${project.status === 'ONLINE' ? 'border-green-400 text-green-400' : 'border-orange-400 text-orange-400'} group-hover:border-zeno-blue group-hover:text-zeno-blue`}>
                {project.status}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4 text-zeno-blue/60 text-xs font-mono border-b border-gray-200 pb-2">
                YEAR: {project.year} // ID: {project.id.toUpperCase()}
              </div>
              <p className="text-zeno-blue mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t-2 border-dotted border-gray-300">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-bold text-zeno-blue hover:text-zeno-yellow hover:bg-zeno-blue px-2 py-1 transition-colors"
                    >
                      <ExternalLink size={14} /> DEMO
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-bold text-zeno-blue hover:text-zeno-yellow hover:bg-zeno-blue px-2 py-1 transition-colors"
                    >
                      <Github size={14} /> CODE
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Decorative Tape Reel Icon */}
            <div className="absolute top-[-10px] right-[-10px] bg-zeno-offwhite border border-zeno-blue p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Disc className="text-zeno-blue animate-spin-slow" size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className={`mt-12 flex justify-center items-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <RetroButton
          label="查看更多.ALL"
          variant="secondary"
          icon={<ArrowRight size={20} />}
          onClick={() => window.open('https://github.com/zenojor', '_blank')}
          className="w-full md:w-auto justify-center"
        />
      </div>
    </SectionFrame>
  );
};