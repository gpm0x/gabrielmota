import React from 'react';
import { Layout, Smartphone, Cpu, Palette, ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: Cpu,
    title: "Site Institucional",
    subtitle: "Branding & Presença Digital",
    description: "A base da sua presença online. Um site que reflete a essência da sua organização com elegância e confiança.",
    pillars: ["Branding Consistente", "UX Excepcional", "SEO Estratégico", "Painel de Gestão (CMS)"],
    gradient: "from-emerald-600 to-teal-600",
    isPopular: true
  },
  {
    icon: Layout,
    title: "Página de Vendas",
    subtitle: "Conversão & Autoridade",
    description: "Sua página de vendas é onde a mágica acontece. Apresente seu produto de forma convincente e converta visitantes em clientes.",
    pillars: ["Estrutura de Copy Vendedora", "Design Único de Alto Padrão", "Foco Total em COnversão", "Otimização de Velocidade"],
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: Smartphone,
    title: "E-commerce",
    subtitle: "Vendas Online Escaláveis",
    description: "Sua loja virtual completa, com design moderno e alta performance para escala nacional ou internacional.",
    pillars: ["Design de Alto Padrão", "Velocidade Extrema (PageSpeed)", "Integração de Métodos de Pagamento", "Foco em Experiência de Compra"],
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Palette,
    title: "Sistemas sob-medida",
    subtitle: "Automação & Processos",
    description: "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
    pillars: ["Design System Próprio", "Prototipagem de Fluxos", "Interface Moderna & Ágil", "Automação de Processos Internos"],
    gradient: "from-orange-600 to-red-600",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as any
    }
  }
};

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-20 top-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="mb-20 md:text-center max-w-4xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-4 block">Processo & Excelência</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            O processo de criação da sua página de <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">alto padrão</span> é dividido em pilares fundamentais.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Cada pilar foi pensado cuidadosamente para que sua experiência seja única e sua entrega, impecável.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-full flex flex-col p-8 md:p-10 rounded-[3rem] bg-gray-50 border border-gray-100/80 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="absolute top-8 right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-200 z-20">
                  <Sparkles size={10} fill="currentColor" />
                  Mais Procurado
                </div>
              )}

              {/* Icon & Title Area */}
              <div className="flex items-center gap-5 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ring-1 ring-black/5`}>
                  <service.icon className="text-gray-900" size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-0.5">{service.subtitle}</span>
                  <h3 className="text-2xl font-display font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed mb-10 text-lg line-clamp-3">
                {service.description}
              </p>

              {/* Pillars (Feature List) */}
              <div className="flex-grow space-y-4 mb-10 bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 group-hover:border-indigo-100 group-hover:bg-indigo-50/10 transition-colors">
                {service.pillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-tight">{pillar}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-end justify-between pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  className="relative group/btn overflow-hidden px-8 py-3.5 rounded-2xl bg-gray-900 text-white font-bold text-sm shadow-xl shadow-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Contratar Agora
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </span>
                </a>
              </div>

              {/* Decorative Background Accent */}
              <div className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-[0.03] rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]`}></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
