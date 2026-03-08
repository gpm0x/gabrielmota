import React from 'react';
import { Layout, Smartphone, Cpu, Palette, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Layout,
    title: "Página de Vendas",
    description: "Sua página de vendas é onde a mágica acontece. Apresente seu produto de forma convincente e converta visitantes em clientes.",
    pillars: ["Estrutura Completa", "Design único de alto padrão", "Copy Colaborativa", "Otimização de Conversão"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Smartphone,
    title: "E-commerce",
    description: "Sua loja virtual completa, com design moderno e alta performance.",
    pillars: ["Design de Alto Padrão", "Velocidade Extrema", "Integração de CRM", "Foco em Vendas"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cpu,
    title: "Site Institucional",
    description: "A base da sua presença online. Um site que reflete a essência da sua organização com elegância e confiança.",
    pillars: ["Branding Consistente", "UX Excepcional", "SEO Estratégico", "Painel de Controle"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Palette,
    title: "Sistemas sob-medida",
    description: "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio.",
    pillars: ["Design System", "Prototipagem", "Interface Moderna", "Automação de Processos"],
    gradient: "from-orange-500 to-red-500"
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-gray-900" size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <a
                    href="https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 group/link"
                  >
                    <span>Quero começar</span>
                    <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>

                <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Diferenciais</p>
                  <ul className="space-y-4">
                    {service.pillars.map((pillar, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-sm text-gray-600 font-medium tracking-tight">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        {pillar}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Gradient Side */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.gradient} opacity-20`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
