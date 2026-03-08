import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LinkItem } from '../../types';
import InfoModal from './InfoModal';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const isDark = item.variant === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleClick = (e: React.MouseEvent) => {
    if (item.details) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <a
        ref={cardRef}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{
          animationDelay: `${index * 100}ms`,
          animationPlayState: isVisible ? 'running' : 'paused',
          WebkitAnimationPlayState: isVisible ? 'running' : 'paused'
        }}
        className={`
          animate-fade-in-up
          opacity-0 
          group relative flex flex-col justify-between p-8 sm:p-9 rounded-[2rem] transition-all duration-500 ease-out
          border h-full min-h-[220px] overflow-hidden hover:-translate-y-3 hover:scale-[1.02]
          ${isDark
            ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f11] border-white/10 text-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/30'
            : 'bg-white border-gray-200/80 text-brand-dark shadow-lg shadow-gray-300/50 hover:shadow-2xl hover:shadow-indigo-200/60 hover:border-indigo-300/50 backdrop-blur-sm'
          }
        `}
      >
        {/* Background Gradient Effect on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br pointer-events-none ${isDark ? 'from-indigo-600/15 via-purple-600/10 to-transparent' : 'from-indigo-50 via-purple-50/50 to-transparent'}`}
        />

        {/* Animated Glow Effect */}
        <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none ${isDark ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20' : 'bg-gradient-to-r from-indigo-200/40 to-purple-200/40'}`}></div>

        {/* Top Section: Icon & Badge */}
        <div className="relative z-10 mb-8 flex justify-between items-start">
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
            ${isDark
              ? 'bg-gradient-to-br from-white/15 to-white/5 text-white border border-white/10 shadow-lg shadow-black/20 group-hover:shadow-indigo-500/30'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 border border-gray-200 shadow-md shadow-gray-200/50 group-hover:shadow-indigo-300/40'
            }
          `}>
            <item.icon size={24} strokeWidth={1.8} />
          </div>

          {/* Animated arrow that appears/moves on hover */}
          <div className={`
            opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-110
            ${isDark ? 'text-white' : 'text-black'}
          `}>
            <ArrowUpRight size={22} strokeWidth={2} />
          </div>
        </div>

        {/* Middle Section: Text */}
        <div className="relative z-10 flex-grow">
          <h3 className="font-display font-extrabold text-2xl mb-4 leading-tight tracking-tight uppercase italic text-balance group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
            {item.title}
          </h3>
          {item.description && (
            <p className={`text-sm leading-relaxed font-semibold tracking-wide ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-500`}>
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom Section: Enhanced Decorative Line */}
        <div className="relative z-10 mt-10">
          <div className={`
            h-2 w-16 rounded-full transition-all duration-700 group-hover:w-full
            ${isDark
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.8)]'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_4px_20px_rgba(99,102,241,0.3)] group-hover:shadow-[0_4px_30px_rgba(99,102,241,0.5)]'
            }
          `}></div>
        </div>
      </a>

      <InfoModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default LinkCard;
