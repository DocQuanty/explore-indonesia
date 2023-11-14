import React, { useState } from 'react';
import s from './SliderBlockSecrets.module.scss';

import imgSlider_01 from "../../assets/images/jpg/Slider_01.jpg"
import imgSlider_02 from "../../assets/images/jpg/Slider_02.jpg"
import imgSlider_03 from "../../assets/images/jpg/Slider_03.jpg"

const SliderBlockSecrets = () => {
    const sliderTitle="Explore Our Secrets"
    const images = [
        imgSlider_01,
        imgSlider_02,
        imgSlider_03,
        'https://via.placeholder.com/405x300/33FF57/FFFFFF',
        'https://via.placeholder.com/405x300/FF5733/FFFFFF',
        'https://via.placeholder.com/405x300/33FF57/FFFFFF',
        'https://via.placeholder.com/405x300/5733FF/FFFFFF',

    ];

    const [currentImage, setCurrentImage] = useState(1);

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
            <h1 className={s.sliderTitle}>{sliderTitle}</h1>  
            <div className={s.sliderImages} style={{ transform: `translateX(-${currentImage * 90}%)` }}>
                {images.map((url, index) => (
                    <div key={index} className={s.image} style={{ backgroundImage: `url(${url})` }} />
                ))}
            </div>
            {/* navigation */}
            <div className={s.arrows}>
                <div className={`${s.arrow} ${s.arrowPrev}`} onClick={prevSlide}>
                    &#9665;
                </div>
                <div className={`${s.arrow} ${s.arrowNext}`} onClick={nextSlide}>
                    &#9655;
                </div>
            </div>
            {/* pagination */}
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
