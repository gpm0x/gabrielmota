import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const isDark = item.variant === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationPlayState: isVisible ? 'running' : 'paused',
        WebkitAnimationPlayState: isVisible ? 'running' : 'paused'
      }}
      className={`
        animate-fade-in-up
        opacity-0 
        group relative flex flex-col justify-between p-6 sm:p-7 rounded-[1.5rem] transition-all duration-300 ease-out
        border h-full min-h-[200px] overflow-hidden hover:-translate-y-2 hover:shadow-2xl
        ${
          isDark
            ? 'bg-[#1a1a1a] border-white/10 text-white shadow-lg shadow-black/10'
            : 'bg-white border-gray-200 text-brand-dark shadow-md shadow-gray-200/40 hover:border-gray-300'
        }
      `}
    >
      {/* Background Gradient Effect on Hover */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr pointer-events-none ${isDark ? 'from-indigo-500/10 to-transparent' : 'from-gray-100 to-transparent'}`} 
      />

      {/* Top Section: Icon & Badge */}
      <div className="relative z-10 mb-6 flex justify-between items-start">
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm
          ${isDark ? 'bg-white/10 text-white border border-white/5' : 'bg-gray-50 text-gray-900 border border-gray-100'}
        `}>
          <item.icon size={22} strokeWidth={1.5} />
        </div>
        
        {/* Subtle arrow that appears/moves on hover */}
        <div className={`
          opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1
          ${isDark ? 'text-white' : 'text-black'}
        `}>
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Middle Section: Text */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-display font-bold text-lg mb-2 leading-tight tracking-tight">
          {item.title}
        </h3>
        {item.description && (
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {item.description}
          </p>
        )}
      </div>

      {/* Bottom Section: Decorative Line */}
      <div className={`
        relative z-10 mt-6 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full
        ${isDark ? 'bg-indigo-500' : 'bg-black'}
      `}></div>
    </a>
  );
};

export default LinkCard;