import s from './SliderSecretsBlock.module.scss';

import SliderSecret from '../sliderSecret/SliderSecret';
import DefaultText from '../DefaultText/DefaultText';
import NumberBlockCards from "../NumberBlockCards/NumberBlockCards.tsx";

const SliderSecretsBlock = () => {
    return <div className={s.SliderBlockSecrets} id="secrets">
        <div className={s.SliderBlockBackground}></div>
        <div className={s.sliderTitle} data-reveal>Explore Our Secrets</div>
        <div className={s.sliderSecret} data-reveal>
            <SliderSecret />
        </div>
        {/* darkBlueSection */}
        <div className={s.SliderBlockNumber}>
            {/* Title-section */}
            <section className={s.NumberBlock}>
                <div className="NumberBlock_wrapper">
                <div className={s.NumberBlock_mainTitle} data-reveal>
                    By The Numbers
                </div>
                <div className={s.NumberBlock_mainDescription}>
                    <DefaultText text="The largest archipelago on Earth, measured in islands, languages and volcanoes." className='additional_GreyText_center' />
                </div>
                {/* Title-section-end */}
                <NumberBlockCards />
                {/* cards-item*/}
                </div>
            </section>
        </div>
    </div>
};

export default SliderSecretsBlock;
