import React from 'react';
import { Plus, Minus, TrendingUp, ShieldCheck, UserCheck, MessageSquare, Zap } from 'lucide-react';

const BENEFITS = [
    {
        icon: TrendingUp,
        title: "+ Conversões",
        description: "Uma landing page bem projetada com um design impactante pode ajudar a aumentar as taxas de conversão, incentivando mais visitantes a se inscreverem ou comprarem o produto lançado.",
        type: 'positive'
    },
    {
        icon: ShieldCheck,
        title: "+ Confiança",
        description: "Um design impactante e uma apresentação bem estruturada ajudam a criar uma imagem confiável e segura do seu produto, aumentando a probabilidade de que os visitantes se sintam confortáveis ao fornecer suas informações pessoais ou financeiras.",
        type: 'positive'
    },
    {
        icon: UserCheck,
        title: "+ Personalização",
        description: "Uma landing page de alto padrão entrega uma personalização na experiência do usuário e faz um apelo mais emocional aos visitantes, incentivando-os a tomar medidas para se envolver com o seu produto.",
        type: 'positive'
    },
    {
        icon: MessageSquare,
        title: "+ Comunicação",
        description: "Uma landing page bem projetada permite que você se comunique claramente com seus visitantes, oferecendo informações úteis sobre o produto, seus recursos e benefícios, e incentivando-os a agir.",
        type: 'positive'
    },
    {
        icon: Zap,
        title: "+ Profissionalismo",
        description: "Uma landing page de alta qualidade mostra que você leva a sério o seu negócio e está disposto a investir tempo e recursos em seus lançamentos de produtos digitais, criando uma impressão profissional nos visitantes.",
        type: 'positive'
    },
    {
        icon: Minus,
        title: "- Perdas",
        description: "Uma landing page de alto padrão consegue transmitir mais credibilidade na sua oferta, fazendo com que quando seu lead acessar sua página ele terá certeza que se trata de algo profissional, diminuindo assim, as incertezas sobre a veracidade da oferta.",
        type: 'negative'
    }
];

const Benefits: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-400 leading-tight">
                        Como uma <span className="text-gray-900 font-bold">Landing Page</span> de alto padrão pode te ajudar :
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${benefit.type === 'positive' ? 'bg-indigo-50 text-indigo-600' : 'bg-red-50 text-red-600'} group-hover:scale-110 transition-transform`}>
                                    <benefit.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                                    {benefit.title}
                                </h3>
                            </div>

                            <p className="text-gray-500 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Infinite Scrolling Carousel Footer */}
                <div className="mt-20 relative overflow-hidden group">
                    <div className="flex gap-16 whitespace-nowrap animate-infinite-scroll py-4">
                        {/* Dynamically repeat the benefits for a seamless loop */}
                        {[...BENEFITS, ...BENEFITS, ...BENEFITS, ...BENEFITS].map((benefit, index) => (
                            <span
                                key={index}
                                className={`text-xl font-bold uppercase tracking-widest flex items-center gap-3 transition-colors duration-300 ${benefit.type === 'positive' ? 'text-gray-300 group-hover:text-indigo-600' : 'text-gray-300 group-hover:text-red-600'}`}
                            >
                                <span className="text-2xl opacity-50">{benefit.type === 'positive' ? '+' : '-'}</span>
                                {benefit.title.replace('+ ', '').replace('- ', '')}
                            </span>
                        ))}
                    </div>

                    {/* Custom Side Fades for the carousel */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
