import React, { useState } from 'react';
import { LensMode } from './types';
import { SKILL_DATA, PROJECTS } from './constants';
import DualLensToggle from './components/DualLensToggle';
import Hero from './components/Hero';
import SkillsGraph from './components/SkillsGraph';
import BentoGrid from './components/BentoGrid';
import ContactTerminal from './components/ContactTerminal';

const App: React.FC = () => {
  const [lensMode, setLensMode] = useState<LensMode>('technical');

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 selection:bg-neon-cyan selection:text-obsidian overflow-x-hidden font-sans">
      
      {/* Navigation Shell */}
      <nav className="fixed top-0 w-full z-40 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-mono font-bold text-xl tracking-tighter">
                POLY<span className="text-neon-cyan">MATH</span>.NEXUS
            </div>
            <div className="hidden md:flex gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">ARCHIVE</a>
                <a href="#" className="hover:text-white transition-colors">ABOUT</a>
                <a href="#" className="hover:text-white transition-colors">CONTACT</a>
            </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-32 space-y-24">
        
        {/* Section 1: Hero */}
        <section>
            <Hero />
        </section>

        {/* Section 2: Skills Graph */}
        <section className="max-w-7xl mx-auto px-4">
            <div className="mb-8 pl-4 border-l-2 border-neon-cyan">
                <h2 className="text-2xl font-bold text-white">Proficiency Matrix</h2>
                <p className="text-slate-400">Interactive Visualization of Tech Stack Clusters</p>
            </div>
            <div className="h-[500px] w-full">
                <SkillsGraph data={SKILL_DATA} />
            </div>
        </section>

        {/* Section 3: Project Vault (Bento) */}
        <section className="max-w-7xl mx-auto px-4">
             <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="pl-4 border-l-2 border-neon-purple">
                    <h2 className="text-2xl font-bold text-white">Project Vault</h2>
                    <p className="text-slate-400">Select artifacts from the repository</p>
                </div>
                <div className="text-right hidden md:block">
                     <p className="text-xs font-mono text-slate-500">CURRENT VIEW MODE:</p>
                     <p className={`text-sm font-bold tracking-widest uppercase ${lensMode === 'technical' ? 'text-neon-cyan' : 'text-neon-purple'}`}>
                         {lensMode}
                     </p>
                </div>
            </div>
            <BentoGrid projects={PROJECTS} mode={lensMode} />
        </section>

        {/* Section 4: Contact */}
        <section className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Initialize Handshake</h2>
                <p className="text-slate-400">Secure communication channel open.</p>
            </div>
            <ContactTerminal />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-600 text-xs font-mono">
        <p>SYSTEM ARCHITECTURE V2.4.0 // DEPLOYED ON VERCEL</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} THE POLYMATH NEXUS. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Floating Toggle Switch */}
      <DualLensToggle mode={lensMode} setMode={setLensMode} />

    </div>
  );
};

export default App;