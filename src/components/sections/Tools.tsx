import React from 'react';
import {
    Palette,
    Code2,
    Terminal,
    LayoutTemplate,
    Layers,
    Cpu,
    Share2,
    GitBranch
} from 'lucide-react';

const TOOLS = [
    { name: 'Figma', icon: Palette, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'React', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'TypeScript', icon: Terminal, color: 'text-blue-600', bg: 'bg-blue-600/10' },
    { name: 'Tailwind CSS', icon: LayoutTemplate, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { name: 'Lucide Icons', icon: Layers, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-600', bg: 'bg-green-600/10' },
    { name: 'Next.js', icon: Share2, color: 'text-gray-900', bg: 'bg-gray-900/10' },
    { name: 'Git', icon: GitBranch, color: 'text-red-500', bg: 'bg-red-500/10' },
];

const INFINITE_TOOLS = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS];

const Tools: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-3 block">Ecossistema Digital</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6">
                        FERRAMENTAS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase">ALTO PADRÃO</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Utilizo as melhores tecnologias do mercado para garantir que seu projeto seja rápido, escalável e visualmente impecável.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative mt-20">
                    <div className="flex gap-8 whitespace-nowrap animate-scroll-tools py-4">
                        {INFINITE_TOOLS.map((tool, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-4 px-8 py-5 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className={`w-12 h-12 ${tool.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <tool.icon className={`${tool.color}`} size={24} strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>

            <style>{`
                @keyframes scroll-tools {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-tools {
                    animation: scroll-tools 30s linear infinite;
                    width: max-content;
                }
                .animate-scroll-tools:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Tools;
