
import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_LINKS } from '../constants';

const FloatingCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-full glass border border-white/20 shadow-2xl md:hidden">
      <a
        href={CONTACT_LINKS.PHONE}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple text-white shadow-lg active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={CONTACT_LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white shadow-lg active:scale-95 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={CONTACT_LINKS.TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white shadow-lg active:scale-95 transition-transform"
      >
        <Send className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingCTAs;
