import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const faqs = [
  {
    q: 'Sa kushton një agjent AI për biznesin tim?',
    a: 'Çmimi varet nga nevojat e biznesit tënd — sa kanale do të mbulohen, sa procese do të automatizohen dhe sa i personalizuar do të jetë sistemi. E diskutojmë hap pas hapi gjatë konsultës falas, pa asnjë detyrim.',
  },
  {
    q: 'Sa kohë duhet për ta ndërtuar dhe lançuar sistemin?',
    a: 'Zakonisht nga 1 deri në 3 javë, në varësi të kompleksitetit. Fillojmë me analizën e biznesit tënd, ndërtojmë agjentin, e testojmë bashkë dhe e lançojmë vetëm kur je plotësisht i kënaqur.',
  },
  {
    q: 'A më duhet njohuri teknike për ta përdorur?',
    a: 'Aspak. Ne e ndërtojmë, e lidhim dhe e mirëmbajmë gjithçka për ty. Ti thjesht sheh rezultatet — mesazhet e përgjigjura, takimet e rezervuara dhe panelin analitik të thjeshtë për t\'u lexuar.',
  },
  {
    q: 'Në cilat kanale punon agjenti AI?',
    a: 'Në kanalet ku klientët e tu tashmë të shkruajnë: WhatsApp, Instagram dhe Facebook Messenger. Agjenti përgjigjet aty në sekonda, 24 orë në ditë, 7 ditë në javë.',
  },
  {
    q: 'Çfarë ndodh nëse agjenti nuk di të përgjigjet?',
    a: 'Agjenti trajnohet me informacionin e biznesit tënd, dhe për raste të veçanta ta kalon bisedën ty ose stafit — kështu asnjë klient nuk mbetet pa përgjigje dhe asnjë pyetje delikate nuk trajtohet gabim.',
  },
];

const FaqItem = ({ faq, index, open, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="card-surface rounded-3xl overflow-hidden"
  >
    <button
      type="button"
      onClick={onToggle}
      data-testid={`faq-question-${index + 1}`}
      className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6"
    >
      <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">{faq.q}</span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="shrink-0 w-9 h-9 rounded-full border border-[#1FBF7A]/35 bg-[#1FBF7A]/10 flex items-center justify-center"
      >
        <Plus size={18} className="text-[#1FBF7A]" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          data-testid={`faq-answer-${index + 1}`}
        >
          <p className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="06" label="Pyetje të Shpeshta" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="faq-heading">
            Pyetje që na bëjnë <span className="text-gradient-emerald">Shpesh</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
