import { 
  Briefcase, 
  Smartphone, 
  Car, 
  BarChart3, 
  Github, 
  Linkedin,
  Instagram
} from 'lucide-react';
import { LinkItem } from './types';

export const SOCIAL_LINKS: LinkItem[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-mota-5a0a80353',
    icon: Linkedin,
  },
  {
    id: 'github',
    title: 'GitHub',
    url: 'https://github.com/gpm0x',
    icon: Github,
  },
  {
    id: 'personal_insta',
    title: 'Instagram',
    url: 'https://www.instagram.com/devgabriux/',
    icon: Instagram,
  }
];

export const MAIN_LINKS: LinkItem[] = [
  {
    id: 'portfolio',
    title: 'Meu Portfólio',
    description: 'Conheça meus projetos e habilidades',
    url: 'https://portfolio-pessoal-kohl.vercel.app/',
    icon: Briefcase,
    variant: 'dark'
  },
  {
    id: 'whatsapp',
    title: 'Orçamento via WhatsApp',
    description: 'Entre em contato direto comigo',
    url: 'https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento',
    icon: Smartphone,
    variant: 'light'
  },
  {
    id: 'nexai',
    title: 'Nexai Finance',
    description: 'Projeto de finanças (Instagram)',
    url: 'https://www.instagram.com/nexai_finance/',
    icon: BarChart3,
    variant: 'light'
  },
  {
    id: 'gabspotter',
    title: 'Gabspotter',
    description: 'Fotografia automotiva',
    url: 'https://www.instagram.com/gabspotter_br',
    icon: Car,
    variant: 'dark'
  }
];