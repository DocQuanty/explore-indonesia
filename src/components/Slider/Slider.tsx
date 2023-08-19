import React, { useState, useEffect } from 'react';
import background01 from '../../assets/images/backgrounds/background01.png';
import background02 from '../../assets/images/backgrounds/background01.png';
import background03 from '../../assets/images/backgrounds/background02.jpg';
import background04 from '../../assets/images/backgrounds/background02.jpg';
import s from './Slider.module.scss';

const Slider = () => {
  const backgrounds = [background01, background03, background02, background04 ];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentBackground = backgrounds[currentBackgroundIndex];
  const progressPercentage = ((currentBackgroundIndex + 1) / backgrounds.length) * 100;
  const currentHeight = (progressPercentage / 100) * 296;

  const sliderStyles = {
    backgroundImage: `url(${currentBackground})`,
    backgroundSize: 'cover',
  };

  const progressStyles = {
    maxHeight:currentHeight,
    height: `${progressPercentage}%`,
    width: "4px",
    backgroundColor: "#DD2242",
    position: "absolute",
    top: 233,
    left: 70,
  };

  return (
    <div className={s.slider}>
      <div className={s.slider_background} style={sliderStyles}></div>
      <div className={s.slider_dynamic} style={progressStyles}></div>
      <div className={s.slider_line}></div>
    </div>
  );
};

export default Slider;
