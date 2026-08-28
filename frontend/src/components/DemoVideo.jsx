import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const VIDEO_SRC = '/demo-video.mp4';

export const DemoVideo = () => {
  const [hasVideo, setHasVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetch(VIDEO_SRC, { method: 'HEAD' })
      .then((r) => setHasVideo(r.ok && r.headers.get('content-type')?.includes('video')))
      .catch(() => setHasVideo(false));
  }, []);

  return (
    <section id="demo" className="relative py-24 lg:py-32" data-testid="demo-section">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="01" label="Demo e Vërtetë" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="demo-heading">
            Shiko si Punon një Agjent AI <span className="text-gradient-emerald">i Vërtetë</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed" data-testid="demo-subtitle">
            Ky nuk është një video promocionale — është një agjent AI real, i ndërtuar dhe testuar për një klinikë dentare, që merr rezervime dhe përgjigjet klientëve automatikisht.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div
            className="relative rounded-3xl overflow-hidden border border-[#1FBF7A]/25 shadow-[0_0_60px_rgba(31,191,122,0.12)] bg-[#212527]"
            data-testid="demo-video-player"
          >
            {hasVideo ? (
              <video
                className="w-full aspect-video object-cover"
                src={VIDEO_SRC}
                controls={playing}
                onClick={() => setPlaying(true)}
                playsInline
                data-testid="demo-video-element"
              />
            ) : (
              <div className="relative aspect-video grid-bg flex flex-col items-center justify-center gap-6 px-6 text-center">
                <div className="pointer-events-none absolute inset-0 noise-glow" />
                <button
                  className="relative pulse-ring w-20 h-20 rounded-full bg-gradient-to-br from-[#0F9D6E] to-[#1FBF7A] flex items-center justify-center shadow-[0_0_40px_rgba(31,191,122,0.45)]"
                  data-testid="demo-play-button"
                  aria-label="Luaj videon"
                >
                  <Play size={30} className="text-white ml-1" fill="white" />
                </button>
                <p className="relative text-sm sm:text-base text-gray-400 max-w-md">
                  Video demo po përgatitet — së shpejti do të shohësh këtu agjentin tonë AI duke punuar live.
                </p>
              </div>
            )}
          </div>
          <p className="mt-5 text-sm text-gray-500 text-center" data-testid="demo-caption">
            Çdo biznes merr një demo të personalizuar si ky, para se të vendosë të bashkëpunojë me ne.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
