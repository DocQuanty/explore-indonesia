import React, { useState } from 'react';
import s from './SliderBlockSecrets.module.scss';

const SliderBlockSecrets = () => {
    const images = [
        'https://via.placeholder.com/600x300/FF5733/FFFFFF',
        'https://via.placeholder.com/600x300/33FF57/FFFFFF',
        'https://via.placeholder.com/600x300/5733FF/FFFFFF',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const selectSlide = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className={s.slider}>
            <div className={s.sliderImages} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {images.map((url, index) => (
                    <div key={index} className={s.image} style={{ backgroundImage: `url(${url})` }} />
                ))}
            </div>
            <div className={s.arrows}>
                <div className={`${s.arrow} ${s.arrowPrev}`} onClick={prevSlide}>
                    &#9665;
                </div>
                <div className={`${s.arrow} ${s.arrowNext}`} onClick={nextSlide}>
                    &#9655;
                </div>
            </div>
            <div className={s.pagination}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${s.dot} ${index === currentImage ? s.active : ''}`}
                        onClick={() => selectSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderBlockSecrets;
