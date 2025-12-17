import React from 'react';
import { Award, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 z-0"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Container */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-gray-200 to-gray-100 rounded-[2rem] rotate-2 opacity-100 transition-transform duration-500 group-hover:rotate-1"></div>
            
            <div className="relative aspect-[3/4] rounded-[1.8rem] overflow-hidden bg-white shadow-2xl shadow-gray-200/50 border border-white">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://github.com/gpm0x.png')] bg-cover bg-center transition-all duration-700 hover:scale-105"></div>
                 
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                      <p className="text-white font-display font-bold text-2xl">Gabriel Mota</p>
                      <p className="text-indigo-200 text-sm font-medium">Frontend Engineer</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                   <p className="text-sm font-bold text-gray-900">Aberto para trabalhar</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Sobre Mim
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Quem é <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Gabriel Mota?
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Expert em desenvolvimento Frontend e UI/UX Design para produtos digitais de alto impacto. Meu foco está em ajudar startups, empresas e empreendedores a alcançarem novos patamares de tecnologia e design.
              </p>
              <p>
                Com vasta experiência no mercado, sou <strong className="text-gray-900 font-semibold bg-indigo-50 px-1 rounded">Founder da SoftTech Inovations</strong> e <strong className="text-gray-900 font-semibold bg-indigo-50 px-1 rounded">Sócio/Co-founder do DietAI</strong>, entregando resultados que elevam a percepção de valor das marcas e aumentam suas conversões.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 text-gray-700 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600">
                  <Briefcase size={20} />
                </div>
                <span className="font-semibold">Founder SoftTech & DietAI</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 text-gray-700 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-yellow-500">
                   <Award size={20} />
                </div>
                <span className="font-semibold">+5 Anos de Experiência</span>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião."
                target="_blank"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all duration-300"
              >
                Agende Sua Reunião Gratuita
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;