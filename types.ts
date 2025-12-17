import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  variant?: 'dark' | 'light' | 'accent';
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}