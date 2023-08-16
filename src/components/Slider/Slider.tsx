import React, { useState } from 'react';
import './Slider.scss'; // Подключаем стили (Slider.css)

const Slider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0); // Текущий активный слайд

  const handleSlideChange = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-progress">
        {/* Полоска прогресса с секторами */}
        <div className="progress-segment" style={{ width: `${(activeSlide + 1) * 33.33}%` }}></div>
      </div>
      <div className="slider">
        {/* Слайды */}
        <div className={`slide ${activeSlide === 0 ? 'active' : ''}`}>Slide 1</div>
        <div className={`slide ${activeSlide === 1 ? 'active' : ''}`}>Slide 2</div>
        <div className={`slide ${activeSlide === 2 ? 'active' : ''}`}>Slide 3</div>
      </div>
      <div className="slider-controls">
        {/* Кнопки для переключения слайдов */}
        <button onClick={() => handleSlideChange(0)}>1</button>
        <button onClick={() => handleSlideChange(1)}>2</button>
        <button onClick={() => handleSlideChange(2)}>3</button>
      </div>
    </div>
  );
};

export default Slider;
