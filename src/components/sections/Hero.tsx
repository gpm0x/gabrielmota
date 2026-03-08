import React, { useRef, useState } from 'react';
import { Rocket, Star, Calendar, Globe, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../data';

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Simple 3D Tilt Effect Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const techStack = ['HTML', 'CSS', 'JS', 'React JS', 'TS', 'Figma'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any
      }
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10">
      {/* Main Banner Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="relative rounded-[2.5rem] bg-gradient-to-br from-[#e0e7ff] via-[#f3f4f6] to-[#eef2ff] overflow-hidden shadow-sm min-h-[550px] flex items-center"
      >

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        {/* Background Decorative Text (Watermark) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 select-none pointer-events-none text-black font-display font-black text-[15vw] sm:text-[12rem] leading-none whitespace-nowrap z-0"
        >
          GABRIEL
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 h-full">

          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center px-8 sm:px-16 py-12 lg:py-0 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 w-fit mb-6 shadow-sm ring-1 ring-black/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Frontend Engineer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-gray-900 leading-[0.9] italic mb-6 uppercase">
              Transforme sua <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 pr-4 pb-2">PRESENÇA</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 max-w-md font-medium leading-relaxed mb-10">
              A qualidade da sua Landing Page reflete no valor que seus leads enxergarão. Está na hora de uma página de <span className="text-indigo-600 font-bold">Alto Padrão</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* High Impact CTA Button */}
              <a
                href="https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento
                  <Rocket className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social, i) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (i * 0.1), duration: 0.5, type: 'spring' }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 border border-gray-200 shadow-sm hover:scale-110 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md transition-all duration-200"
                    aria-label={social.title}
                    title={social.title}
                  >
                    <social.icon size={20} strokeWidth={2} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: High Impact 3D Profile Card */}
          <div className="relative h-full min-h-[450px] lg:min-h-auto flex items-center justify-center order-1 lg:order-2 px-8 py-10 perspective-1000">

            {/* Ambient Glow behind card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-[60px] rounded-full animate-pulse"
            ></motion.div>

            {/* Interactive 3D Card */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ x: 100, opacity: 0, rotateY: 30 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              }}
              className="relative w-full max-w-[380px] bg-[#111111] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden transition-transform duration-100 ease-out group"
            >
              {/* Card Decorative Header Background */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-900/50 to-transparent z-0"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl z-0"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">

                {/* Header: Avatar & Name */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex gap-4 items-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-black p-1 shadow-xl ring-4 ring-white/5">
                        <div className="w-full h-full bg-black rounded-xl flex items-center justify-center overflow-hidden relative">
                          <img
                            src="/src/assets/images/gabriel.png"
                            alt="Gabriel Mota"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-[#111111] w-6 h-6 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white leading-tight">Gabriel Mota</h2>
                      <div className="flex items-center gap-1.5 text-indigo-400 font-medium text-xs mt-1 bg-indigo-500/10 px-2 py-0.5 rounded-md w-fit border border-indigo-500/20">
                        <Briefcase size={12} />
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                  <Sparkles className="text-yellow-500 animate-[spin_4s_linear_infinite]" size={24} />
                </div>

                {/* Bio Text */}
                <div className="mb-8 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-r-full"></div>
                  <div className="text-gray-300 text-sm leading-relaxed font-light space-y-2">
                    <p>
                      Founder <span className="text-white font-semibold"> da SoftTech Inovations</span>.
                    </p>
                    <p>
                      Sócio e Co-founder<span className="text-white font-semibold"> do DietAI</span>
                    </p>
                    <p>
                      Founder <span className="text-white font-semibold"> da GROWFYAI</span>
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {/* Stats items can also be animated for extra polish if needed */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/5 hover:bg-white/10 transition-colors text-center group/stat">
                    <div className="flex justify-center mb-1 text-blue-400 group-hover/stat:scale-110 transition-transform"><Calendar size={18} /></div>
                    <div className="font-bold text-white text-lg leading-none mb-1">21</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Anos</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/5 hover:bg-white/10 transition-colors text-center group/stat">
                    <div className="flex justify-center mb-1 text-purple-400 group-hover/stat:scale-110 transition-transform"><Rocket size={18} /></div>
                    <div className="font-bold text-white text-lg leading-none mb-1">30+</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Projetos</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/5 hover:bg-white/10 transition-colors text-center group/stat">
                    <div className="flex justify-center mb-1 text-yellow-400 group-hover/stat:scale-110 transition-transform"><Star size={18} /></div>
                    <div className="font-bold text-white text-lg leading-none mb-1">PRO</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Nível</div>
                  </div>
                </div>

                {/* Bottom Action: Tech Stack */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-medium bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Stack Principal</span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Globe size={12} />
                      <span>São Paulo, BR</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
