import s from './sliderSecret.module.scss';

import { useState } from 'react';

import imgSlider_01 from "../../assets/images/jpg/Slider_01.jpg"
import imgSlider_02 from "../../assets/images/jpg/Slider_02.jpg"
import imgSlider_03 from "../../assets/images/jpg/Slider_03.jpg"

const SliderSecret = () => {
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
    const [startX, setStartX] = useState<number | null>(null)
    const [endX, setEndX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX !== null && endX !== null) {
            const deltaX = endX - startX;
            if (deltaX > 50) {
                // Swipe to the right
                setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            } else if (deltaX < -50) {
                // Swipe to the left
                setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }
        }

        setStartX(null);
        setEndX(null);
    };

    const nextSlide = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const selectSlide = (index: number) => {
        setCurrentImage(index);
    };

    return (
        <div className={s.slider}>
            {/* slider */}
            <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd} className={s.sliderImages} style={{ transform: `translateX(-${currentImage * 90}%)` }}>
                {images.map((url, index) => (
                    <div key={index} className={s.image} style={{ backgroundImage: `url(${url})` }} />
                ))}
            </div>
            {/* navigation */}
            <div className={s.arrows}>
                <div className={`${s.arrow} ${s.arrowPrev}`} onClick={prevSlide}>
                </div>
                <div className={`${s.arrow} ${s.arrowNext}`} onClick={nextSlide}>
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
export default SliderSecret;