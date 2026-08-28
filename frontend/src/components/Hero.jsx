import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MessageCircle, CheckCheck } from 'lucide-react';
import { scrollToId } from '../lib/smooth';
import { useLang } from '../i18n';

const lineWrap = {
  hidden: {},
  show: (i) => ({
    transition: { staggerChildren: 0.14, delayChildren: 0.25 + i * 0.28 },
  }),
};

const lineInner = {
  hidden: { y: '115%' },
  show: { y: '0%', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const MaskedLine = ({ index, children, className }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${className}`}
      variants={lineWrap}
      custom={index}
      initial="hidden"
      animate="show"
    >
      <motion.span className="block" variants={lineInner}>
        {children}
      </motion.span>
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden grid-bg noise-glow pt-24 pb-16" data-testid="hero-section">
      <motion.div
        style={{ y: yOrb }}
        className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-[#1FBF7A]/10 blur-[130px]"
      />
      <motion.div
        style={{ y: yCard }}
        className="pointer-events-none absolute bottom-0 -left-48 w-[440px] h-[440px] rounded-full bg-[#0F9D6E]/8 blur-[110px]"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <motion.div style={{ opacity: opacityFade }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-[#1FBF7A]/30 bg-[#1FBF7A]/8 rounded-full px-4 py-1.5 mb-8"
              data-testid="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1FBF7A]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#1FBF7A]">
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-[64px]" data-testid="hero-headline">
              <MaskedLine index={0} className="text-white">{t.hero.h1[0]}</MaskedLine>
              <MaskedLine index={1} className="text-white">{t.hero.h1[1]}</MaskedLine>
              <MaskedLine index={2} className="text-gradient-emerald">{t.hero.h1[2]}</MaskedLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="mt-7 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
              data-testid="hero-subheadline"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToId('#kontakt')}
                data-testid="hero-primary-cta"
                className="btn-glow font-semibold text-white px-8 py-4 rounded-full text-sm sm:text-base"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToId('#demo')}
                data-testid="hero-secondary-cta"
                className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-[#1FBF7A] transition-colors duration-300 border border-white/10 hover:border-[#1FBF7A]/40 rounded-full px-7 py-4"
              >
                {t.hero.cta2}
                <ArrowDown size={16} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yCard, perspective: 900 }}
            className="hidden lg:block"
            data-testid="hero-chat-mock"
          >
            <div className="card-surface rounded-3xl p-6 max-w-sm ml-auto shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-white/8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F9D6E] to-[#1FBF7A] flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.hero.chatName}</p>
                  <p className="text-xs text-[#1FBF7A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1FBF7A] inline-block" /> {t.hero.chatOnline}
                  </p>
                </div>
              </div>
              <div className="pt-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="bg-[#2B2F31] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-200 max-w-[85%]"
                >
                  {t.hero.chatMsg1}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  className="bg-gradient-to-r from-[#0F9D6E] to-[#1FBF7A] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white max-w-[85%] ml-auto"
                >
                  {t.hero.chatMsg2}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="flex items-center gap-2 text-xs text-[#1FBF7A] pl-1"
                >
                  <CheckCheck size={14} />
                  {t.hero.chatConfirmed}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
