import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '355696738308';

export const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Përshëndetje ORBIX! Dua të mësoj më shumë për automatizimin me AI.')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Na shkruaj në WhatsApp"
          data-testid="whatsapp-float-btn"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          whileHover={{ scale: 1.08 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0F9D6E] to-[#1FBF7A] shadow-[0_4px_28px_rgba(31,191,122,0.45)]"
        >
          <MessageCircle size={26} className="text-white" fill="currentColor" strokeWidth={0} />
          <span className="absolute inline-flex w-full h-full rounded-full bg-[#1FBF7A]/40 animate-ping [animation-duration:2.5s]" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
