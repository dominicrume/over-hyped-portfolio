import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />

        {/* Main Content */}
        <div className="z-10 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neon-cyan mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                SYSTEM ONLINE
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-2 leading-none">
                ARCHITECTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple animate-pulse-slow">
                    INTELLIGENCE
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Engineering the convergence of <span className="text-white font-medium">Blockchain</span>, <span className="text-white font-medium">AI Agents</span>, and <span className="text-white font-medium">Big Data</span>. 
                I don't just write code; I build systems that drive quantifiable business impact.
            </p>

            <div className="flex justify-center gap-4 pt-8">
                <button className="px-8 py-3 bg-white text-obsidian font-bold rounded-full hover:bg-slate-200 transition-colors">
                    View Portfolio
                </button>
                <button className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
                    Access Specs
                </button>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-slate-500">
            <ChevronDown size={24} />
        </div>
    </div>
  );
};

export default Hero;