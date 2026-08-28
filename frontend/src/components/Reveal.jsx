import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = '', ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const Chapter = ({ number, label }) => (
  <div className="flex items-center gap-4 mb-6" data-testid={`chapter-${number}`}>
    <span className="font-display text-sm font-bold text-[#1FBF7A] tracking-widest">{number}</span>
    <span className="h-px w-10 bg-[#1FBF7A]/50" />
    <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-400">{label}</span>
  </div>
);
