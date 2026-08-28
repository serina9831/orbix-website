import { createContext, useContext, useEffect, useState } from 'react';

export const translations = {
  al: {
    meta: {
      title: 'ORBIX — Automatizo Biznesin Tënd me AI',
      description: 'ORBIX — Agjenci automatizimi me AI. Agjentë AI që përgjigjen, rezervojnë dhe shesin për biznesin tënd, 24 orë në ditë.',
    },
    nav: {
      links: [
        { label: 'Shërbimet', hash: '#sherbimet', testid: 'nav-link-services' },
        { label: 'Si Funksionon', hash: '#procesi', testid: 'nav-link-how-it-works' },
        { label: 'Klientët', hash: '#klientet', testid: 'nav-link-niches' },
        { label: 'Pse ORBIX', hash: '#pse-orbix', testid: 'nav-link-why-us' },
      ],
      cta: 'Kontakto',
      ctaMobile: 'Kontakto për një Konsultë',
    },
    hero: {
      badge: 'ORBIX — Agjenci Automatizimi me AI',
      h1: ['Automatizo', 'Biznesin Tënd me', 'Inteligjencë Artificiale'],
      sub: 'Agjentë AI që përgjigjen, rezervojnë dhe shesin për ty, 24 orë në ditë — pa e humbur asnjë klient.',
      cta1: 'Kontakto për një Konsultë',
      cta2: 'Shiko Demon',
      chatName: 'Agjenti AI i ORBIX',
      chatOnline: 'Online — 24/7',
      chatMsg1: 'Përshëndetje! A keni orar të lirë të enjten për pastrim dhëmbësh?',
      chatMsg2: 'Përshëndetje! Po, e enjten kemi të lirë 10:00 dhe 16:30. Cilin orar preferoni?',
      chatConfirmed: 'Rezervimi u konfirmua automatikisht',
    },
    marquee: ['AGJENTË AI 24/7', 'WHATSAPP', 'INSTAGRAM', 'MESSENGER', 'REZERVIME AUTOMATIKE', 'ZERO KLIENTË TË HUMBUR', 'PËRGJIGJE NË SEKONDA'],
    demo: {
      chapter: 'Demo e Vërtetë',
      pre: 'Shiko si Punon një Agjent AI ',
      accent: 'i Vërtetë',
      post: '',
      placeholder: 'Video demo po përgatitet — së shpejti do të shohësh këtu agjentin tonë AI duke punuar live.',
      playLabel: 'Luaj videon',
    },
    services: {
      chapter: 'Shërbimet',
      pre: 'Çfarë Ofron ',
      accent: 'ORBIX',
      post: '',
      intro: 'Ndërtojmë sisteme AI që punojnë në vend tënd, në kanalet ku klientët tuaj tashmë ju shkruajnë.',
      items: [
        { title: 'Agjent AI për WhatsApp, Instagram & Messenger', desc: 'Çdo mesazh merr përgjigje brenda sekondash, në çdo orë të ditës dhe natës — pa pushime, pa vonesa, pa klientë të harruar.' },
        { title: 'Rezervime Automatike të Takimeve', desc: 'Klienti rezervon vetë, direkt në bisedë, pa telefonata e pritje — dhe kalendari yt përditësohet automatikisht në kohë reale.' },
        { title: 'Mbledhje & Kualifikim Leadesh', desc: "Çdo person i interesuar regjistrohet automatikisht me emër, numër dhe çdo kontakt — ti merr të dhënat gati për t'i kontaktuar, pa humbur asnjë mundësi." },
        { title: 'Konfirmime & Rikujtues Automatikë', desc: 'Më pak mungesa në takime dhe më pak orë të humbura në telefonata kujtese — sistemi konfirmon e rikujton çdo klient vetë.' },
        { title: 'Panel Analitik për Performancën', desc: 'Shiko në kohë reale sa takime janë bërë, sa janë konfirmuar dhe sa të ardhura ka gjeneruar sistemi — gjithçka e matur, asgjë me hamendje.' },
        { title: 'Zgjidhje 100% e Personalizuar', desc: 'Çdo agjent AI ndërtohet nga e para për niche-n tënde specifike — flet si biznesi yt, njeh shërbimet e tua, nuk është shabllon i gatshëm.' },
        { title: 'Integrim i Plotë me Kanalet e Tua', desc: 'Lidhet me faqen tënde ekzistuese dhe rrjetet sociale pa nevojën për app-e apo platforma shtesë që klienti duhet të mësojë.' },
      ],
    },
    how: {
      chapter: 'Procesi',
      pre: 'Si Funksionon ',
      accent: 'Bashkëpunimi',
      post: '',
      stepLabel: 'Hapi',
      steps: [
        { title: 'Konsultë Falas', desc: 'Ulemi bashkë dhe kuptojmë nevojat specifike të biznesit tënd — ku humbet kohë, ku ikin klientët.' },
        { title: 'Ndërtimi i Agjentit AI', desc: 'Krijojmë agjentin tënd AI, të personalizuar plotësisht për shërbimet, çmimet dhe mënyrën tënde të punës.' },
        { title: 'Integrimi në Kanale', desc: 'E lidhim me WhatsApp, Instagram dhe Facebook Messenger — klientët e tu vazhdojnë të shkruajnë aty ku shkruajnë gjithmonë.' },
        { title: 'Lançimi & Optimizimi', desc: 'E vëmë në punë dhe e përmirësojmë vazhdimisht, bazuar në rezultate reale — jo premtime.' },
      ],
    },
    niches: {
      chapter: 'Për Ken Punojmë',
      pre: 'Punojmë me Biznese ',
      accent: 'si i Yti',
      post: '',
      names: ['Klinika Dentare', 'Sallone Bukurie', 'Agjenci Imobiliare', 'Restorante', 'Palestra', 'Shkolla Private'],
    },
    why: {
      chapter: 'Diferenca',
      pre: 'Pse ',
      accent: 'ORBIX',
      post: '',
      sub: 'Sepse biznesi yt meriton më shumë se një shabllon të kopjuar — meriton një sistem që punon saktësisht siç punon ti.',
      points: [
        { title: 'Demo Reale, Jo Premtime', desc: 'E vetmja agjenci që tregon demo reale të agjentit AI, jo vetëm premtime — sheh me sytë e tu çfarë po blen.' },
        { title: 'E Personalizuar, Jo Shabllon', desc: 'Çdo zgjidhje ndërtohet nga e para rreth biznesit tënd — proceset e tua, klientët e tu, zëri yt.' },
        { title: 'Suport i Vazhdueshëm', desc: 'Pas lançimit nuk të lëmë vetëm — optimizojmë dhe përmirësojmë sistemin vazhdimisht, çdo muaj.' },
        { title: 'Transparencë e Plotë', desc: 'Çdo rezultat matet e shihet në panelin analitik — sa takime, sa konfirmime, sa të ardhura. Asgjë e fshehur.' },
      ],
    },
    faq: {
      chapter: 'Pyetje të Shpeshta',
      pre: 'Pyetje që na bëjnë ',
      accent: 'Shpesh',
      post: '',
      items: [
        { q: 'Sa kushton një agjent AI për biznesin tim?', a: 'Çmimi varet nga nevojat e biznesit tënd — sa kanale do të mbulohen, sa procese do të automatizohen dhe sa i personalizuar do të jetë sistemi. E diskutojmë hap pas hapi gjatë konsultës falas, pa asnjë detyrim.' },
        { q: 'Sa kohë duhet për ta ndërtuar dhe lançuar sistemin?', a: 'Zakonisht nga 1 deri në 3 javë, në varësi të kompleksitetit. Fillojmë me analizën e biznesit tënd, ndërtojmë agjentin, e testojmë bashkë dhe e lançojmë vetëm kur je plotësisht i kënaqur.' },
        { q: 'A më duhet njohuri teknike për ta përdorur?', a: "Aspak. Ne e ndërtojmë, e lidhim dhe e mirëmbajmë gjithçka për ty. Ti thjesht sheh rezultatet — mesazhet e përgjigjura, takimet e rezervuara dhe panelin analitik të thjeshtë për t'u lexuar." },
        { q: 'Në cilat kanale punon agjenti AI?', a: 'Në kanalet ku klientët e tu tashmë të shkruajnë: WhatsApp, Instagram dhe Facebook Messenger. Agjenti përgjigjet aty në sekonda, 24 orë në ditë, 7 ditë në javë.' },
        { q: 'Çfarë ndodh nëse agjenti nuk di të përgjigjet?', a: 'Agjenti trajnohet me informacionin e biznesit tënd, dhe për raste të veçanta ta kalon bisedën ty ose stafit — kështu asnjë klient nuk mbetet pa përgjigje dhe asnjë pyetje delikate nuk trajtohet gabim.' },
      ],
    },
    contact: {
      chapter: 'Kontakt',
      pre: 'Gati të Automatizosh Biznesin Tënd? ',
      accent: 'Na Kontakto Tani',
      post: '',
      sub: 'Shkruaji në WhatsApp për përgjigje të menjëhershme — ose plotëso formularin dhe biseda vazhdon direkt aty.',
      directBtn: 'Kontakto për një Konsultë',
      formLabel: 'Ose plotëso formularin',
      phName: 'Emri',
      phBusiness: 'Emri i Biznesit',
      phPhone: 'Numri i Telefonit',
      phMessage: 'Mesazhi',
      submit: 'Dërgo në WhatsApp',
      confirmPre: 'Mesazhi u përgatit dhe WhatsApp-i po hapet. Nëse nuk u hap automatikisht, ',
      confirmLink: 'kliko këtu për ta hapur',
      confirmPost: '.',
      waGreeting: 'Përshëndetje ORBIX!',
      waName: 'Emri',
      waBusiness: 'Biznesi',
      waPhone: 'Telefoni',
      waMessage: 'Mesazhi',
    },
    float: {
      aria: 'Na shkruaj në WhatsApp',
      message: 'Përshëndetje ORBIX! Dua të mësoj më shumë për automatizimin me AI.',
    },
    footer: {
      copyright: 'Të gjitha të drejtat e rezervuara. © 2026 ORBIX.',
    },
  },
  en: {
    meta: {
      title: 'ORBIX — Automate Your Business with AI',
      description: 'ORBIX — AI automation agency. AI agents that reply, book and sell for your business, 24 hours a day.',
    },
    nav: {
      links: [
        { label: 'Services', hash: '#sherbimet', testid: 'nav-link-services' },
        { label: 'How It Works', hash: '#procesi', testid: 'nav-link-how-it-works' },
        { label: 'Clients', hash: '#klientet', testid: 'nav-link-niches' },
        { label: 'Why ORBIX', hash: '#pse-orbix', testid: 'nav-link-why-us' },
      ],
      cta: 'Contact',
      ctaMobile: 'Book a Free Consultation',
    },
    hero: {
      badge: 'ORBIX — AI Automation Agency',
      h1: ['Automate', 'Your Business with', 'Artificial Intelligence'],
      sub: 'AI agents that reply, book and sell for you, 24 hours a day — without losing a single client.',
      cta1: 'Book a Free Consultation',
      cta2: 'Watch the Demo',
      chatName: 'ORBIX AI Agent',
      chatOnline: 'Online — 24/7',
      chatMsg1: 'Hi! Do you have any openings on Thursday for a teeth cleaning?',
      chatMsg2: 'Hi! Yes, on Thursday we have 10:00 and 16:30 available. Which time works best for you?',
      chatConfirmed: 'Booking confirmed automatically',
    },
    marquee: ['AI AGENTS 24/7', 'WHATSAPP', 'INSTAGRAM', 'MESSENGER', 'AUTOMATIC BOOKINGS', 'ZERO LOST CLIENTS', 'REPLIES IN SECONDS'],
    demo: {
      chapter: 'Real Demo',
      pre: 'See a Real AI Agent ',
      accent: 'in Action',
      post: '',
      placeholder: "The demo video is on its way — soon you'll see our AI agent working live right here.",
      playLabel: 'Play video',
    },
    services: {
      chapter: 'Services',
      pre: 'What ',
      accent: 'ORBIX',
      post: ' Delivers',
      intro: 'We build AI systems that work on your behalf, inside the channels your clients already use to reach you.',
      items: [
        { title: 'AI Agent for WhatsApp, Instagram & Messenger', desc: 'Every message gets a reply within seconds, at any hour of day or night — no breaks, no delays, no forgotten clients.' },
        { title: 'Automatic Appointment Booking', desc: 'Clients book themselves, right inside the conversation — no phone calls, no waiting — and your calendar updates in real time.' },
        { title: 'Lead Capture & Qualification', desc: 'Every interested prospect is registered automatically with name, number and contact details — you get data ready to act on, without missing a single opportunity.' },
        { title: 'Automatic Confirmations & Reminders', desc: 'Fewer no-shows and fewer hours wasted on reminder calls — the system confirms and reminds every client on its own.' },
        { title: 'Performance Analytics Dashboard', desc: 'See in real time how many appointments were made, how many were confirmed and how much revenue the system generated — everything measured, nothing guessed.' },
        { title: '100% Tailored Solution', desc: "Every AI agent is built from scratch for your specific niche — it speaks like your business, knows your services, and is never an off-the-shelf template." },
        { title: 'Full Integration with Your Channels', desc: 'Connects to your existing website and social media — no extra apps or platforms your clients need to learn.' },
      ],
    },
    how: {
      chapter: 'The Process',
      pre: 'How Our ',
      accent: 'Partnership',
      post: ' Works',
      stepLabel: 'Step',
      steps: [
        { title: 'Free Consultation', desc: "We sit down together and map out your business's specific needs — where time gets lost, where clients slip away." },
        { title: 'Building Your AI Agent', desc: 'We create your AI agent, fully tailored to your services, your prices and the way you work.' },
        { title: 'Channel Integration', desc: 'We connect it to WhatsApp, Instagram and Facebook Messenger — your clients keep writing exactly where they always have.' },
        { title: 'Launch & Optimization', desc: 'We put it to work and keep improving it continuously, based on real results — not promises.' },
      ],
    },
    niches: {
      chapter: 'Who We Work With',
      pre: 'We Work with Businesses ',
      accent: 'Like Yours',
      post: '',
      names: ['Dental Clinics', 'Beauty Salons', 'Real Estate Agencies', 'Restaurants', 'Gyms', 'Private Schools'],
    },
    why: {
      chapter: 'The Difference',
      pre: 'Why ',
      accent: 'ORBIX',
      post: '',
      sub: 'Because your business deserves more than a copied template — it deserves a system that works exactly the way you do.',
      points: [
        { title: 'Real Demos, Not Promises', desc: "The only agency that shows you a real AI agent demo, not just promises — you see with your own eyes exactly what you're getting." },
        { title: 'Tailored, Not Templated', desc: 'Every solution is built from scratch around your business — your processes, your clients, your voice.' },
        { title: 'Ongoing Support', desc: "We don't leave you on your own after launch — we optimize and improve the system continuously, every single month." },
        { title: 'Full Transparency', desc: 'Every result is measured and visible in your analytics dashboard — appointments, confirmations, revenue. Nothing hidden.' },
      ],
    },
    faq: {
      chapter: 'FAQ',
      pre: 'Questions We Hear ',
      accent: 'Most Often',
      post: '',
      items: [
        { q: 'How much does an AI agent cost for my business?', a: "The price depends on your business's needs — how many channels are covered, how many processes are automated and how customized the system is. We walk through it step by step during your free consultation, with zero obligation." },
        { q: 'How long does it take to build and launch?', a: "Usually 1 to 3 weeks, depending on complexity. We start by analyzing your business, build the agent, test it together and launch only when you're completely happy." },
        { q: 'Do I need technical knowledge to use it?', a: "Not at all. We build, connect and maintain everything for you. You simply watch the results come in — messages answered, appointments booked, and an analytics dashboard that's easy to read." },
        { q: 'Which channels does the AI agent work on?', a: 'The channels your clients already use to message you: WhatsApp, Instagram and Facebook Messenger. The agent replies there within seconds, 24 hours a day, 7 days a week.' },
        { q: "What happens if the agent doesn't know the answer?", a: 'The agent is trained on your business information, and for special cases it hands the conversation over to you or your staff — so no client is ever left without a reply and no sensitive question is handled wrong.' },
      ],
    },
    contact: {
      chapter: 'Contact',
      pre: 'Ready to Automate Your Business? ',
      accent: 'Get in Touch Now',
      post: '',
      sub: 'Message us on WhatsApp for an instant reply — or fill in the form and the conversation continues right there.',
      directBtn: 'Book a Free Consultation',
      formLabel: 'Or fill in the form',
      phName: 'Name',
      phBusiness: 'Business Name',
      phPhone: 'Phone Number',
      phMessage: 'Message',
      submit: 'Send via WhatsApp',
      confirmPre: "Your message is ready and WhatsApp is opening. If it didn't open automatically, ",
      confirmLink: 'click here to open it',
      confirmPost: '.',
      waGreeting: 'Hello ORBIX!',
      waName: 'Name',
      waBusiness: 'Business',
      waPhone: 'Phone',
      waMessage: 'Message',
    },
    float: {
      aria: 'Message us on WhatsApp',
      message: "Hello ORBIX! I'd like to learn more about AI automation.",
    },
    footer: {
      copyright: 'All rights reserved. © 2026 ORBIX.',
    },
  },
};

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('orbix-lang');
    return saved === 'en' ? 'en' : 'al';
  });

  useEffect(() => {
    localStorage.setItem('orbix-lang', lang);
    document.documentElement.lang = lang === 'al' ? 'sq' : 'en';
    document.title = translations[lang].meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', translations[lang].meta.description);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const GradientHeading = ({ part, className = '', testid }) => (
  <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white ${className}`} data-testid={testid}>
    {part.pre}
    <span className="text-gradient-emerald">{part.accent}</span>
    {part.post}
  </h2>
);
