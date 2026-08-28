const items = [
  'AGJENTË AI 24/7',
  'WHATSAPP',
  'INSTAGRAM',
  'MESSENGER',
  'REZERVIME AUTOMATIKE',
  'ZERO KLIENTË TË HUMBUR',
  'PËRGJIGJE NË SEKONDA',
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/5 bg-[#212527] py-5 overflow-hidden" data-testid="editorial-marquee">
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
