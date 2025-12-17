import React from 'react';
import { Layout, Smartphone, Cpu, Palette, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Layout,
    title: "Landing Page",
    description: "Desenvolvimento de landing pages premium, focadas em conversão e experiência do usuário, usando React, Next.js e TypeScript.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Criação de interfaces intuitivas e Design Systems profissionais que fortalecem a identidade da sua marca.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Sistemas & Apps",
    description: "Desenvolvimento de sistemas personalizados, aplicativos nativos e PWAs com foco em performance e escalabilidade.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Cpu,
    title: "Projetos Personalizados",
    description: "Soluções tecnológicas sob medida, integrando web, mobile e automação para potencializar o crescimento do seu negócio.",
    gradient: "from-emerald-500 to-teal-500"
  }  
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-20 top-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-2 block">Expertise & Soluções</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Transformando complexidade em <span className="italic text-gray-500">experiência digital.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Como especialista em tecnologia, entrego soluções que unem performance técnica com impacto visual de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-gray-900" size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Saber mais</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;