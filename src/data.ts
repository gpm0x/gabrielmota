import {
  Briefcase,
  Smartphone,
  Brain,
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
    details: {
      handle: 'Gabriel Mota',
      bio: 'Desenvolvedor Full Stack especializado em experiências digitais de alto padrão e automações profissionais.',
      stats: [
        { label: 'Conexões', value: '500+' },
        { label: 'Projetos', value: '15+' }
      ]
    }
  },
  {
    id: 'github',
    title: 'GitHub',
    url: 'https://github.com/gpm0x',
    icon: Github,
    details: {
      handle: '@gpm0x',
      bio: 'Repositórios de código, frameworks autorais e contribuições open-source.',
      stats: [
        { label: 'Repos', value: '24' },
        { label: 'Commits', value: '800+' }
      ]
    }
  },
  {
    id: 'personal_insta',
    title: 'Instagram',
    url: 'https://www.instagram.com/devgabriux/',
    icon: Instagram,
    details: {
      handle: '@devgabriux',
      bio: 'Compartilhando o lifestyle dev e bastidores de projetos de alto padrão.',
      stats: [
        { label: 'Seguidores', value: '2.4k' },
        { label: 'Posts', value: '142' }
      ]
    }
  }
];

export const MAIN_LINKS: LinkItem[] = [
  {
    id: 'whatsapp',
    title: 'Orçamento via WhatsApp',
    description: 'Entre em contato direto comigo',
    url: 'https://wa.me/5511954802686?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento',
    icon: Smartphone,
    variant: 'light'
  },
  {
    id: 'dietai',
    title: 'DietAI',
    description: 'Inteligência Artificial para Nutrição',
    url: 'https://www.instagram.com/dietal_oficial/',
    icon: Brain,
    variant: 'light'
  },
  {
    id: 'github',
    title: 'Github',
    description: 'Meus projetos',
    url: 'https://github.com/gpm0x',
    icon: Github,
    variant: 'light'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Meu perfil no LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-mota-5a0a80353/',
    icon: Linkedin,
    variant: 'light'
  }
];