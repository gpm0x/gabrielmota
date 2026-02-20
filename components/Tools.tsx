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

const Tools: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/30 -skew-x-12 z-0"></div>

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

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {TOOLS.map((tool, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 ${tool.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <tool.icon className={`${tool.color}`} size={32} strokeWidth={1.5} />
                            </div>
                            <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
