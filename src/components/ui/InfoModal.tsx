import React, { useEffect } from 'react';
import { X, ExternalLink, Activity } from 'lucide-react';
import { LinkItem } from '../../types';

interface InfoModalProps {
    item: LinkItem;
    isOpen: boolean;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ item, isOpen, onClose }) => {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in">

                {/* Header/Banner */}
                <div className={`h-32 w-full ${item.variant === 'dark' ? 'bg-[#1a1a1a]' : 'bg-gray-50'} relative`}>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-gray-800 transition-colors z-20"
                    >
                        <X size={20} />
                    </button>

                    {/* Floating Icon */}
                    <div className={`absolute -bottom-10 left-10 w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl border-4 border-white transform transition-transform hover:scale-105 ${item.variant === 'dark' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'}`}>
                        <item.icon size={40} />
                    </div>
                </div>

                {/* Content */}
                <div className="pt-16 pb-10 px-10">
                    <div className="mb-8">
                        <h2 className="text-3xl font-display font-black text-gray-900 italic uppercase">
                            {item.title}
                        </h2>
                        <p className="text-indigo-600 font-bold tracking-wider text-sm mt-1">
                            {item.details?.handle}
                        </p>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-lg mb-8">
                        {item.details?.bio}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {item.details?.stats.map((stat, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-[0.98] ${item.variant === 'dark'
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-black text-white hover:bg-gray-800'
                            }`}
                    >
                        Visitar Canal Oficial
                        <ExternalLink size={20} />
                    </a>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default InfoModal;
