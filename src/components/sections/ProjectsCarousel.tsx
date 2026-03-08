import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Layout, Sparkles } from 'lucide-react';

const PROJECTS = [
    {
        id: 1,
        title: "GlobalBank",
        description: "Landing page de alto padrão para uma banco digital chamado GlobalBank. Objetivo de conversão e experiência do usuário fluida.",
        image: "/src/assets/images/globalbank.png",
        tags: ["React", "Framer Motion", "Tailwind"],
        link: "https://globalbankai.vercel.app/",
        accent: "from-indigo-600 to-purple-600"
    },
    {
        id: 2,
        title: "Clube do Livro",
        description: "Página de vendas de alta conversão para um produto digital para vender livros em PDF.",
        image: "/src/assets/images/clubedolivro.png",
        tags: ["TypeScript", "Next.js", "UI/UX Design"],
        link: "https://clubedoslivros.vercel.app/",
        accent: "from-blue-600 to-cyan-500"
    },
    {
        id: 3,
        title: "Shadows E-sports",
        description: "Landing page de alto padrão para plataforma de IA focada em nutrição. Design minimalista com foco em conversão e experiência do usuário fluida.",
        image: "/src/assets/images/shadows.png",
        tags: ["Web3", "Node.js", "D3.js"],
        link: "https://shadows-esports.vercel.app/",
        accent: "from-green-500 to-emerald-700"
    }
];

const ProjectsCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % PROJECTS.length);
        }, 10000); // 10 seconds for better immersion
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 bg-[#050505] overflow-hidden relative">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                        >
                            <Sparkles size={12} className="fill-indigo-400" />
                            <span>Projetos de Alto Impacto</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-black text-white leading-none uppercase tracking-tighter italic"
                        >
                            Portfólio <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">Selecionado</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gray-500 text-lg md:text-xl max-w-sm font-medium leading-tight"
                    >
                        Transformando visões complexas em interfaces digitais <span className="text-white">memoráveis</span>.
                    </motion.p>
                </div>

                {/* Main Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Info Side */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-display font-black text-white/10">0{PROJECTS[index].id}</span>
                                    <div className={`h-1 w-20 bg-gradient-to-r ${PROJECTS[index].accent} rounded-full`}></div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                                        {PROJECTS[index].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                        {PROJECTS[index].description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {PROJECTS[index].tags.map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px] font-black uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={PROJECTS[index].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform group`}
                                >
                                    Ver Projeto Online
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Vision Side */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="relative group">
                            {/* Browser Mockup Frame */}
                            <div className="relative bg-[#1a1a1a] rounded-t-xl border-x border-t border-white/10 p-3 flex items-center gap-1.5 shadow-2xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                <div className="ml-4 flex-grow bg-white/5 rounded-md h-5 border border-white/5 flex items-center px-3 text-[8px] text-white/30 font-mono tracking-wider truncate">
                                    https://gabrielmota.dev/projects/{PROJECTS[index].title.toLowerCase().replace(/\s+/g, '-')}
                                </div>
                            </div>

                            <div className="relative aspect-[16/10] bg-white/5 rounded-b-[2.5rem] p-1 border-x border-b border-white/10 overflow-hidden shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="w-full h-full rounded-b-[2rem] overflow-hidden bg-gray-900"
                                    >
                                        <img
                                            src={PROJECTS[index].image}
                                            alt={PROJECTS[index].title}
                                            className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110"
                                        />

                                        {/* Ambient Glow from Image */}
                                        <div className={`absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-tr ${PROJECTS[index].accent}`}></div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Floating Badge */}
                            <motion.a
                                href={PROJECTS[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-black z-20 hidden md:flex hover:scale-110 transition-transform cursor-pointer"
                            >
                                <Globe size={24} className="text-gray-900 mb-1" />
                                <span className="text-[10px] font-black text-gray-900 uppercase leading-none">Live</span>
                                <span className="text-[10px] font-black text-gray-900 uppercase">View</span>
                            </motion.a>

                            {/* Scroll Progress Bar */}
                            <div className="absolute -bottom-10 left-0 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    key={index}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                    className={`h-full bg-gradient-to-r ${PROJECTS[index].accent}`}
                                />
                            </div>
                        </div>

                        {/* Pagination Tabs */}
                        <div className="mt-20 flex justify-center lg:justify-end gap-3 px-4">
                            {PROJECTS.map((project, idx) => (
                                <button
                                    key={project.id}
                                    onClick={() => setIndex(idx)}
                                    className={`group relative h-12 flex items-center gap-4 transition-all duration-500 overflow-hidden ${index === idx ? 'w-48' : 'w-12 opacity-40 hover:opacity-100 text-white'}`}
                                >
                                    <span className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border font-black text-xs transition-colors ${index === idx ? 'bg-white border-white text-gray-900' : 'border-white/20 text-white'}`}>
                                        0{project.id}
                                    </span>
                                    <span className={`flex-grow font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all duration-500 ${index === idx ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 translate-x-4'}`}>
                                        {project.title.split(' ')[0]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ProjectsCarousel;
