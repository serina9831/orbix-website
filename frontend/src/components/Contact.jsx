import { useState } from 'react';
import { Send } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const WA_NUMBER = '355696738308';

const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const inputCls =
  'w-full bg-[#1E2225] border border-white/10 focus:border-[#1FBF7A]/60 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors duration-300';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });
  const [sentUrl, setSentUrl] = useState(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      'Përshëndetje ORBIX!',
      '',
      `Emri: ${form.name}`,
      `Biznesi: ${form.business}`,
      `Telefoni: ${form.phone}`,
      '',
      `Mesazhi: ${form.message}`,
    ].join('\n');
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    setSentUrl(url);
    window.open(url, '_blank');
  };

  return (
    <section id="kontakt" className="relative py-24 lg:py-32 bg-[#24282B] overflow-hidden" data-testid="contact-section">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#1FBF7A]/8 blur-[140px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Chapter number="07" label="Kontakt" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="contact-heading">
            Gati të Automatizosh Biznesin Tënd?{' '}
            <span className="text-gradient-emerald">Na Kontakto Tani</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            Shkruaji në WhatsApp për përgjigje të menjëhershme — ose plotëso formularin dhe biseda vazhdon direkt aty.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-direct-button"
            className="btn-glow inline-flex items-center gap-3 font-semibold text-white px-10 py-5 rounded-full text-base sm:text-lg"
          >
            <WhatsAppIcon size={22} />
            Kontakto për një Konsultë
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="card-surface rounded-3xl p-7 sm:p-10 max-w-3xl mx-auto"
          >
            <p className="text-sm text-gray-500 mb-8 text-center uppercase tracking-[0.2em] font-semibold">
              Ose plotëso formularin
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Emri"
                data-testid="contact-input-name"
                className={inputCls}
              />
              <input
                required
                value={form.business}
                onChange={set('business')}
                placeholder="Emri i Biznesit"
                data-testid="contact-input-business"
                className={inputCls}
              />
              <input
                required
                value={form.phone}
                onChange={set('phone')}
                placeholder="Numri i Telefonit"
                data-testid="contact-input-phone"
                className={`${inputCls} sm:col-span-2`}
              />
              <textarea
                required
                value={form.message}
                onChange={set('message')}
                placeholder="Mesazhi"
                rows={4}
                data-testid="contact-input-message"
                className={`${inputCls} sm:col-span-2 resize-none`}
              />
            </div>
            <button
              type="submit"
              data-testid="contact-submit-button"
              className="btn-glow mt-8 w-full inline-flex items-center justify-center gap-3 font-semibold text-white px-8 py-4 rounded-full text-sm sm:text-base"
            >
              <Send size={18} />
              Dërgo në WhatsApp
            </button>
            {sentUrl && (
              <div
                data-testid="contact-confirmation-message"
                className="mt-6 rounded-2xl border border-[#1FBF7A]/35 bg-[#1FBF7A]/10 px-5 py-4 text-center text-sm sm:text-base text-gray-200"
              >
                Mesazhi u përgatit dhe WhatsApp-i po hapet.{' '}
                Nëse nuk u hap automatikisht,{' '}
                <a
                  href={sentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-confirmation-fallback-link"
                  className="text-[#1FBF7A] font-semibold underline underline-offset-4"
                >
                  kliko këtu për ta hapur
                </a>
                .
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};
