import React from 'react';
import { LensMode } from '../types';
import { Terminal, Briefcase } from 'lucide-react';

interface Props {
  mode: LensMode;
  setMode: (mode: LensMode) => void;
}

const DualLensToggle: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-obsidian/80 backdrop-blur-lg border border-white/10 p-1 rounded-full flex shadow-2xl shadow-cyan-500/20">
        <button
          onClick={() => setMode('technical')}
          className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 overflow-hidden group ${
            mode === 'technical' ? 'text-obsidian' : 'text-slate-400 hover:text-white'
          }`}
        >
          {mode === 'technical' && (
            <div className="absolute inset-0 bg-neon-cyan/90 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
          )}
          <span className="relative z-10 flex items-center gap-2 font-mono text-sm font-bold tracking-wider">
            <Terminal size={16} />
            <span className="hidden sm:inline">TECHNICAL</span>
          </span>
        </button>

        <button
          onClick={() => setMode('business')}
          className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 overflow-hidden group ${
            mode === 'business' ? 'text-obsidian' : 'text-slate-400 hover:text-white'
          }`}
        >
          {mode === 'business' && (
            <div className="absolute inset-0 bg-neon-purple/90 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
          )}
          <span className="relative z-10 flex items-center gap-2 font-mono text-sm font-bold tracking-wider">
            <Briefcase size={16} />
            <span className="hidden sm:inline">BUSINESS</span>
          </span>
        </button>
      </div>
      
      <div className="mt-2 text-center">
         <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
           Change your perspective
         </p>
      </div>
    </div>
  );
};

export default DualLensToggle;