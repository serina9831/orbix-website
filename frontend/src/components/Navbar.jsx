import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/smooth';

const links = [
  { label: 'Shërbimet', hash: '#sherbimet', testid: 'nav-link-services' },
  { label: 'Si Funksionon', hash: '#procesi', testid: 'nav-link-how-it-works' },
  { label: 'Klientët', hash: '#klientet', testid: 'nav-link-niches' },
  { label: 'Pse ORBIX', hash: '#pse-orbix', testid: 'nav-link-why-us' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (hash) => {
    setOpen(false);
    scrollToId(hash);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1E2225]/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <button
          onClick={() => go('#hero')}
          className="font-display text-xl font-extrabold tracking-[0.2em] text-white"
          data-testid="nav-brand-logo"
        >
          ORBI<span className="text-gradient-emerald">X</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => go(l.hash)}
              data-testid={l.testid}
              className="text-sm text-gray-300 hover:text-[#1FBF7A] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('#kontakt')}
            data-testid="nav-cta-contact"
            className="btn-glow text-sm font-semibold text-white px-5 py-2.5 rounded-full"
          >
            Kontakto
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1E2225]/97 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5" data-testid="nav-mobile-menu">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => go(l.hash)}
              data-testid={`${l.testid}-mobile`}
              className="text-left text-base text-gray-200"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('#kontakt')}
            data-testid="nav-cta-contact-mobile"
            className="btn-glow text-sm font-semibold text-white px-5 py-3 rounded-full w-fit"
          >
            Kontakto për një Konsultë
          </button>
        </div>
      )}
    </header>
  );
};
