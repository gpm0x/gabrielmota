import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold font-display text-lg">
                 GM
               </div>
               <div>
                 <h4 className="font-bold text-xl text-gray-900 leading-none">Gabriel Mota</h4>
                 <p className="text-sm text-gray-500 mt-1">Premium Digital Solutions</p>
               </div>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Criando experiências digitais que conectam marcas a pessoas através de design e tecnologia de ponta.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h5 className="font-bold text-gray-900 mb-6">Navegação</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-indigo-600 transition-colors">Início</a></li>
              <li><a href="#links" className="text-gray-500 hover:text-indigo-600 transition-colors">Meus Links</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-indigo-600 transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-indigo-600 transition-colors">Sobre Mim</a></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-4">
            <h5 className="font-bold text-gray-900 mb-6">Conecte-se</h5>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-indigo-600 transition-all text-sm font-medium"
                >
                  <social.icon size={16} />
                  <span>{social.title}</span>
                  <ArrowUpRight size={12} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Gabriel Mota. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100 text-xs font-semibold">
            <ShieldCheck size={12} />
            <span>Site seguro verificado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;