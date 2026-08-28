import { useLang } from '../i18n';

export const Marquee = () => {
  const { t } = useLang();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="relative border-y border-white/5 bg-[#24282B] py-5 overflow-hidden" data-testid="editorial-marquee">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display text-sm sm:text-base font-bold tracking-[0.2em] text-gray-500 px-8">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1FBF7A]/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
