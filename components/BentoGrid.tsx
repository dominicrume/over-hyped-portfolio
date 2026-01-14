import React from 'react';
import { Project, LensMode } from '../types';
import { Github, ExternalLink, Code2, TrendingUp, DollarSign, Clock } from 'lucide-react';

interface Props {
  projects: Project[];
  mode: LensMode;
}

const BentoGrid: React.FC<Props> = ({ projects, mode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project, idx) => (
        <div 
          key={project.id}
          className={`
            group relative overflow-hidden rounded-2xl border bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:scale-[1.02]
            ${idx === 0 || idx === 3 ? 'md:col-span-2' : 'md:col-span-1'}
            ${mode === 'technical' ? 'border-cyan-900/50 hover:border-cyan-500/50' : 'border-purple-900/50 hover:border-purple-500/50'}
          `}
        >
          {/* Header */}
          <div className="p-6 pb-2">
            <div className="flex justify-between items-start">
                <div>
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-white/5 ${mode === 'technical' ? 'text-cyan-400' : 'text-purple-400'}`}>
                        {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="flex gap-2">
                    {project.repoLink && (
                        <a href={project.repoLink} className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-slate-400 text-sm mt-2 font-light">
                {project.shortDescription}
            </p>
          </div>

          {/* Dynamic Content Body */}
          <div className="p-6 pt-2 h-full min-h-[200px] flex flex-col justify-between">
            {mode === 'technical' ? (
                // TECHNICAL VIEW
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-black/50 p-3 rounded-lg border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto relative">
                        <div className="absolute top-2 right-2 text-slate-600">
                             <Code2 size={14} />
                        </div>
                        <pre className="text-xs leading-relaxed">
                            <code className="language-python">{project.codeSnippet}</code>
                        </pre>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((tech) => (
                            <div key={tech.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300">
                                <span className={`w-1.5 h-1.5 rounded-full ${tech.color.replace('text-', 'bg-')}`}></span>
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // BUSINESS VIEW
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-2 gap-4">
                        {project.businessMetrics.map((metric, i) => (
                            <div key={i} className="bg-purple-900/10 border border-purple-500/20 p-3 rounded-xl">
                                <p className="text-slate-400 text-[10px] uppercase tracking-wider">{metric.label}</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                                    {metric.trend === 'up' && <TrendingUp size={14} className="text-green-400" />}
                                    {metric.trend === 'down' && <TrendingUp size={14} className="text-green-400 rotate-180" />}
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-tight">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-2 border-purple-500">
                        <h4 className="text-purple-300 text-xs font-bold uppercase mb-1">Impact Analysis</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {project.businessCase}
                        </p>
                    </div>
                </div>
            )}
          </div>
          
          {/* Hover Effect Light */}
          <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${mode === 'technical' ? 'from-cyan-500/5 via-transparent to-transparent' : 'from-purple-500/5 via-transparent to-transparent'}`} />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;