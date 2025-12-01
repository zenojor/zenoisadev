import React, { useState } from 'react';
import { SectionFrame } from './ui/SectionFrame';
import { Github, Mail, Globe, ArrowUpRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { BilibiliIcon } from './icons/BilibiliIcon';
import { XiaohongshuIcon } from './icons/XiaohongshuIcon';
import { SteamIcon } from './icons/SteamIcon';

interface SocialLink {
  id: string;
  label: string;
  icon: React.ReactNode;
  url: string;
  username: string;
  status: 'ONLINE' | 'OFFLINE';
  type: 'LINK' | 'ACTION';
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GITHUB_UPLINK',
    icon: <Github size={24} />,
    url: 'https://github.com/zenojor',
    username: 'SSH://ZENOJOR',
    status: 'ONLINE',
    type: 'LINK'
  },
  {
    id: 'bilibili',
    label: 'BILIBILI_NODE',
    icon: <BilibiliIcon size={24} />,
    url: 'https://space.bilibili.com/23738480',
    username: '@ZEUS087',
    status: 'ONLINE',
    type: 'LINK'
  },
  {
    id: 'xiaohongshu',
    label: 'RED_NOTE_RELAY',
    icon: <XiaohongshuIcon size={24} />,
    url: '#',
    username: '###',
    status: 'ONLINE',
    type: 'LINK'
  },
  {
    id: 'blog',
    label: 'NEURAL_LOGS',
    icon: <Globe size={24} />,
    url: '#',
    username: '### WIP ###',
    status: 'ONLINE',
    type: 'LINK'
  },
  {
    id: 'steam',
    label: 'STEAM_LINK',
    icon: <SteamIcon size={24} />,
    url: 'https://steamcommunity.com/id/zemua',
    username: 'ID: ZENO.',
    status: 'ONLINE',
    type: 'LINK'
  },
  {
    id: 'email',
    label: 'MAIL_PROTOCOL',
    icon: <Mail size={24} />,
    url: 'zenoknowda@gmail.com',
    username: 'ZENOKNOWDA@GMAIL.COM',
    status: 'ONLINE',
    type: 'ACTION'
  }
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useInView<HTMLDivElement>(0.1);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionFrame title="COMM_UPLINK_V2" id="contact" code="99-X">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header Console */}
        <div className={`flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zeno-blue/30 pb-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          <div>
            <h3 className="text-2xl font-bold text-zeno-blue mb-1 uppercase tracking-tighter flex items-center gap-2">
              <span className="w-2 h-2 bg-zeno-yellow animate-pulse"></span>
              TRANSMISSION_HUB
            </h3>
            <p className="text-xs text-zeno-blue/60 font-mono tracking-widest">
              SECURE_CHANNELS_ESTABLISHED
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-[10px] text-zeno-blue/40 font-mono">
              ENCRYPTION: AES-256-GCM<br />
              LATENCY: 12ms
            </div>
          </div>
        </div>

        {/* Vector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target={link.type === 'LINK' ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (link.id === 'email') {
                  // Optional: Copy on click logic could go here
                }
              }}
              className={`group relative h-24 block overflow-hidden transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Animated Background Fill */}
              <div className="absolute inset-0 bg-zeno-yellow transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

              {/* Border Container */}
              <div className="absolute inset-0 border border-zeno-blue/30 group-hover:border-zeno-blue transition-colors z-10 pointer-events-none">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zeno-blue transition-all group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zeno-blue transition-all group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex items-center justify-between px-6 group-hover:px-8 transition-all duration-300">
                <div className="flex items-center gap-4">
                  {/* Index Number */}
                  <span className="font-mono text-xs font-bold text-zeno-blue/40 group-hover:text-zeno-blue transition-colors">
                    {(index + 1).toString().padStart(3, '0')}
                  </span>

                  {/* Icon Box */}
                  <div className="text-zeno-blue group-hover:text-zeno-blue transition-transform group-hover:scale-110 duration-300">
                    {link.icon}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-wider text-zeno-blue group-hover:text-zeno-blue">
                      {link.label}
                    </span>
                    <span className="text-[10px] font-mono text-zeno-blue/60 group-hover:text-zeno-blue/80">
                      {link.username}
                    </span>
                  </div>
                </div>

                {/* Status/Action Icon */}
                <div className="text-zeno-blue opacity-50 group-hover:opacity-100 transition-opacity">
                  {link.id === 'email' && copied ? <Check size={18} /> : <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Signal Footer Visualization */}
        <div className={`mt-12 border-t border-zeno-blue/10 pt-6 flex flex-col items-center transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-end gap-1 h-8 mb-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-zeno-blue/20"
                style={{
                  height: `${Math.random() * 100}%`,
                  animation: `pulse ${Math.random() * 1 + 0.5}s infinite`
                }}
              ></div>
            ))}
          </div>
          <div className="text-[10px] tracking-[0.3em] text-zeno-blue/50 font-bold animate-pulse">
            CARRIER_SIGNAL_LOCKED
          </div>
        </div>
      </div>
    </SectionFrame>
  );
};