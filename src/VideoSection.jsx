import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useConfig } from './config';

export default function VideoSection() {
  const { company: COMPANY } = useConfig();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  // Home shows the short promo; About us keeps the full company film.
  const homeVideo = COMPANY.homeVideo || COMPANY.video;
  const homePoster = COMPANY.homeVideoPoster || COMPANY.videoPoster;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="glite-video" style={{ backgroundImage: `url(${homePoster})` }}>
      <div className="container">
        <div className="video_box">
          <video ref={videoRef} controls preload="none" poster={homePoster} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
            <source src={homeVideo} type="video/mp4" />
          </video>
          {!playing && (
            <button type="button" className="play" onClick={toggle} aria-label="Play company video">
              <Play size={30} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
