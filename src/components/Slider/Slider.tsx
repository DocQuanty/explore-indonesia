import s from './Slider.module.scss';
import { useState, useEffect, CSSProperties } from 'react';

import background01 from '../../assets/images/backgrounds/background01.jpg';
import background02 from '../../assets/images/backgrounds/background02.jpg';
import background03 from '../../assets/images/backgrounds/background03.jpg';
import background04 from '../../assets/images/backgrounds/background04.jpg';
import background05 from '../../assets/images/backgrounds/background05.jpg';

const backgrounds = [background01, background03, background02, background04, background05];
const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// All frames stay mounted and cross-fade by opacity, so the swap never flashes
// an unloaded image; the active frame also drifts slowly (Ken Burns).
const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const progress = ((current + 1) / backgrounds.length) * 296;
  const progressStyles: CSSProperties = { height: `${progress}px` };

  return (
    <div className={s.slider}>
      <div className={s.slider_stage} aria-hidden="true">
        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className={`${s.slider_background} ${i === current ? s.isActive : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>
      <div className={s.slider_block}>
        <div className={s.slider_line}></div>
        <div className={s.slider_dynamic} style={progressStyles}></div>
        <div className={s.slider_number} key={current}>{`0${current + 1}`}</div>
      </div>
    </div>
  );
};

export default Slider;
