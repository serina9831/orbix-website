import { motion } from 'framer-motion';
import {
  MessageSquareText,
  CalendarCheck2,
  UserPlus,
  BellRing,
  BarChart3,
  Fingerprint,
  PlugZap,
} from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const services = [
  {
    icon: MessageSquareText,
    title: 'Agjent AI për WhatsApp, Instagram & Messenger',
    desc: 'Çdo mesazh merr përgjigje brenda sekondash, në çdo orë të ditës dhe natës — pa pushime, pa vonesa, pa klientë të harruar.',
  },
  {
    icon: CalendarCheck2,
    title: 'Rezervime Automatike të Takimeve',
    desc: 'Klienti rezervon vetë, direkt në bisedë, pa telefonata e pritje — dhe kalendari yt përditësohet automatikisht në kohë reale.',
  },
  {
    icon: UserPlus,
    title: 'Mbledhje & Kualifikim Leadesh',
    desc: 'Çdo person i interesuar regjistrohet automatikisht me emër, numër dhe çdo kontakt — ti merr të dhënat gati për t\'i kontaktuar, pa humbur asnjë mundësi.',
  },
  {
    icon: BellRing,
    title: 'Konfirmime & Rikujtues Automatikë',
    desc: 'Më pak mungesa në takime dhe më pak orë të humbura në telefonata kujtese — sistemi konfirmon e rikujton çdo klient vetë.',
  },
  {
    icon: BarChart3,
    title: 'Panel Analitik për Performancën',
    desc: 'Shiko në kohë reale sa takime janë bërë, sa janë konfirmuar dhe sa të ardhura ka gjeneruar sistemi — gjithçka e matur, asgjë me hamendje.',
  },
  {
    icon: Fingerprint,
    title: 'Zgjidhje 100% e Personalizuar',
    desc: 'Çdo agjent AI ndërtohet nga e para për niche-n tënde specifike — flet si biznesi yt, njeh shërbimet e tua, nuk është shabllon i gatshëm.',
  },
  {
    icon: PlugZap,
    title: 'Integrim i Plotë me Kanalet e Tua',
    desc: 'Lidhet me faqen tënde ekzistuese dhe rrjetet sociale pa nevojën për app-e apo platforma shtesë që klienti duhet të mësojë.',
  },
];

export const Services = () => (
  <section id="sherbimet" className="relative py-24 lg:py-32 bg-[#212527]" data-testid="services-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <Chapter number="02" label="Shërbimet" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="services-heading">
          Çfarë Ofron <span className="text-gradient-emerald">ORBIX</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed" data-testid="services-intro">
          Ndërtojmë sisteme AI që punojnë në vend tënd, në kanalet ku klientët tuaj tashmë ju shkruajnë.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            data-testid={`service-card-${i + 1}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`card-surface rounded-3xl p-7 sm:p-8 ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#1FBF7A]/10 border border-[#1FBF7A]/25 flex items-center justify-center mb-6">
              <s.icon size={22} className="text-[#1FBF7A]" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
