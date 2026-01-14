import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal as TerminalIcon } from 'lucide-react';

const ContactTerminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "INITIALIZING SECURE LINK...",
    "CONNECTED TO NODE: POLYMATH_NEXUS_01",
    "STATUS: AWAITING INPUT"
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory(prev => [...prev, `> user: ${input}`, "PROCESSING...", "MSG_BLOCK_MINED: Message transmitted successfully to owner."]);
    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-mono text-sm">
      <div className="bg-obsidian border border-slate-700 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
                <TerminalIcon size={12} />
                <span>bash — 80x24</span>
            </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-64 overflow-y-auto bg-black/90 text-green-400 space-y-2">
            {history.map((line, i) => (
                <div key={i} className={`${line.startsWith('>') ? 'text-white' : 'text-green-400/80'}`}>
                    {line}
                </div>
            ))}
            <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleCommand} className="border-t border-slate-700 p-2 bg-slate-900 flex items-center gap-2">
            <span className="text-green-500 animate-pulse">{'>'}</span>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter message to transmit..."
                className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600 focus:ring-0"
            />
            <button type="submit" className="text-slate-400 hover:text-green-400 transition-colors">
                <Send size={16} />
            </button>
        </form>
      </div>
    </div>
  );
};

export default ContactTerminal;