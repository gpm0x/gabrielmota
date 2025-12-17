import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkCard from './components/LinkCard';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import { MAIN_LINKS } from './data';
import { ArrowDown, Rocket, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Main Links Grid */}
      <section id="links" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-20 scroll-mt-28">
        
        {/* Section Title / Divider */}
        <div className="flex items-center gap-4 mb-8 opacity-60">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <ArrowDown size={14} /> Acesso Rápido
          </span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MAIN_LINKS.map((link, index) => (
            <LinkCard key={link.id} item={link} index={index} />
          ))}
        </div>
      </section>

      {/* Services Section (Moved BEFORE About) */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* High Impact CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] bg-[#0f0f11] overflow-hidden px-6 py-20 md:py-28 text-center shadow-2xl shadow-black/20 group">
           
           {/* Animated Background Gradients */}
           <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] animate-pulse delay-1000"></div>
           </div>
           
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

           <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Sparkles size={12} />
                <span>Nova Fase</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl md:leading-tight font-display font-black text-white mb-8 tracking-tight">
               Tem uma ideia incrível? <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
                 Vamos construir o futuro.
               </span>
             </h2>

             <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
               Estou disponível para novos projetos de desenvolvimento e consultoria de UI/UX.
               Transforme sua visão em um produto digital de alta performance.
             </p>
             
             <a 
               href="https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento" 
               target="_blank"
               rel="noreferrer"
               className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-gray-900 font-bold rounded-full overflow-hidden shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-xl"
             >
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-100 group-hover:opacity-0 transition-opacity"></span>
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
               
               <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                 Solicitar Orçamento
                 <Rocket className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" size={26} />
               </span>
             </a>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;