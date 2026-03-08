import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Rodrigo Silva",
        role: "CEO",
        quote: "Precisávamos de um site profissional para apresentar nossos serviços e o resultado ficou excelente. O design é moderno, rápido e transmite exatamente a imagem que queríamos para nossa empresa."
    },
    {
        name: "Ana Oliveira",
        role: "CEO",
        quote: "Nosso projeto ganhou outra imagem depois do novo site. Ficou muito mais profissional."
    },
    {
        name: "Carlos Eduardo",
        role: "CEO",
        quote: "Profissionalismo do início ao fim. A entrega foi rápida e o resultado superou nossas expectativas."
    }
];

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

export const Testimonials: React.FC = () => {
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming = 6000;
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!autorotate) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1 === TESTIMONIALS.length ? 0 : prev + 1));
        }, autorotateTiming);
        return () => clearInterval(interval);
    }, [active, autorotate]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Animated Initials Avatar */}
                <div className="relative h-24 mb-12 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-indigo-200"
                        >
                            {getInitials(TESTIMONIALS[active].name)}
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
                </div>

                {/* Testimonial Quote */}
                <div className="mb-12 min-h-[140px] flex flex-col items-center justify-center">
                    <Quote className="text-indigo-100 mb-6" size={48} />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            ref={testimonialsRef}
                            className="relative"
                        >
                            <p className="text-2xl md:text-3xl font-display font-medium text-gray-900 leading-relaxed italic border-x-4 border-indigo-50 px-8">
                                "{TESTIMONIALS[active].quote}"
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Buttons / Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${active === index
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-white border-gray-100 text-gray-400 hover:border-indigo-200 hover:text-indigo-500"
                                }`}
                            onClick={() => {
                                setActive(index);
                                setAutorotate(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                {testimonial.name}
                                <span className="opacity-30">|</span>
                                <span className={`font-medium lowercase tracking-normal ${active === index ? 'text-indigo-200' : 'text-gray-300'}`}>
                                    {testimonial.role}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Auto-rotate progress indicator */}
                <div className="mt-12 flex justify-center gap-2">
                    {TESTIMONIALS.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full bg-gray-100 transition-all duration-500 ${active === index ? 'w-8 bg-indigo-600' : 'w-2'}`}
                        ></div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
