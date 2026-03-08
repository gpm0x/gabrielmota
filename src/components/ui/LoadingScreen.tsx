import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setIsFinished(true), 500);
                    return 100;
                }
                // Varying speed for a more natural feel
                const increment = prev < 30 ? 1 : prev < 70 ? 2 : 1.5;
                return Math.min(prev + increment, 100);
            });
        }, 20);

        return () => clearInterval(progressInterval);
    }, []);

    const name = "GABRIEL MOTA";
    const firstName = "GABRIEL";
    const lastName = "MOTA";

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {!isFinished && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: {
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.2
                        }
                    }}
                >
                    {/* Background Ambient Glow */}
                    <motion.div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[150px]" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-12">
                        {/* Animated Name */}
                        <div className="text-center">
                            <motion.h1
                                className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-4"
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="inline-block mr-4">
                                    {firstName.split('').map((char, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            variants={{
                                                hidden: { y: 100, opacity: 0 },
                                                visible: { y: 0, opacity: 1 }
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: i * 0.05,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                                <span className="inline-block text-indigo-500">
                                    {lastName.split('').map((char, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            variants={{
                                                hidden: { y: 100, opacity: 0 },
                                                visible: { y: 0, opacity: 1 }
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.4 + i * 0.05,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.5em] uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                Desenvolvedor Full Stack
                            </motion.p>
                        </div>

                        {/* Minimalist Progress */}
                        <div className="w-64 md:w-80 flex flex-col items-center gap-4">
                            <div className="relative w-full h-[2px] bg-white/5 overflow-hidden rounded-full">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                            <motion.div
                                className="text-white/40 font-mono text-[10px] tracking-widest uppercase flex items-center gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <span>Loading Portfolio</span>
                                <span className="text-white font-bold">{Math.floor(progress)}%</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Vignette Effect */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
