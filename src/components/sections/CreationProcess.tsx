import React from 'react';
import {
    Search,
    PenTool,
    Figma,
    Code,
    Zap,
    CheckCircle2
} from 'lucide-react';

const STEPS = [
    {
        number: '01',
        title: 'Briefing & Estratégia',
        description: 'Entendimento profundo do seu negócio, público-alvo e objetivos para traçar o melhor caminho.',
        icon: Search,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        number: '02',
        title: 'Planejamento & Copy',
        description: 'Definição da estrutura narrativa e escrita persuasiva (Copywriting) focada em conversão.',
        icon: PenTool,
        color: 'from-indigo-500 to-purple-500'
    },
    {
        number: '03',
        title: 'Design Exclusivo',
        description: 'Criação de um layout sob medida no Figma, focado em UX/UI e alto impacto visual.',
        icon: Figma,
        color: 'from-purple-500 to-pink-500'
    },
    {
        number: '04',
        title: 'Desenvolvimento',
        description: 'Transformação do design em uma página real, ultra-rápida e otimizada usando React/Next.js.',
        icon: Code,
        color: 'from-pink-500 to-rose-500'
    },
    {
        number: '05',
        title: 'Performance & SEO',
        description: 'Otimização de velocidade, indexação no Google e testes rigorosos de usabilidade.',
        icon: Zap,
        color: 'from-rose-500 to-orange-500'
    },
    {
        number: '06',
        title: 'Entrega & Suporte',
        description: 'Lançamento da sua página e acompanhamento para garantir que tudo performe como o esperado.',
        icon: CheckCircle2,
        color: 'from-orange-500 to-amber-500'
    }
];

const CreationProcess: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-3 block">Metodologia</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6">
                        O PROCESSO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase">ALTO PADRÃO</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Cada etapa foi desenhada para garantir que sua experiência seja única e sua página traga resultados reais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STEPS.map((step, index) => (
                        <div
                            key={index}
                            className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Step Number Background */}
                            <div className="absolute top-4 right-8 font-display font-black text-8xl text-gray-50 group-hover:text-indigo-50/50 transition-colors duration-300 -z-0">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="text-white" size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>

                            {/* Hover Decorative Line */}
                            <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CreationProcess;
