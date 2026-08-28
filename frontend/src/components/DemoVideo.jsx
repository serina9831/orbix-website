import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

const VIDEO_SRC = '/demo-video.mp4';

export const DemoVideo = () => {
  const [hasVideo, setHasVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    fetch(VIDEO_SRC, { method: 'HEAD' })
      .then((r) => setHasVideo(r.ok && r.headers.get('content-type')?.includes('video')))
      .catch(() => setHasVideo(false));
  }, []);

  return (
    <section id="demo" className="relative py-24 lg:py-32" data-testid="demo-section">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="01" label={t.demo.chapter} />
          <GradientHeading part={t.demo} testid="demo-heading" />
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div
            className="relative rounded-3xl overflow-hidden border border-[#1FBF7A]/25 shadow-[0_0_60px_rgba(31,191,122,0.12)] bg-[#24282B]"
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
                  aria-label={t.demo.playLabel}
                >
                  <Play size={30} className="text-white ml-1" fill="white" />
                </button>
                <p className="relative text-sm sm:text-base text-gray-400 max-w-md">
                  {t.demo.placeholder}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
