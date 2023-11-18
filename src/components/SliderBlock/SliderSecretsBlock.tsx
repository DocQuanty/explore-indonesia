import s from './SliderSecretsBlock.module.scss';
import SliderSecret from '../sliderSecret/SliderSecret';
import DefaultText from '../DefaultText/DefaultText';

const SliderSecretsBlock = () => {
    return <div className={s.SliderBlockSecrets}>
        <div className={s.SliderBlockBackground}></div>
        <div className={s.sliderTitle}>Explore Our Secrets</div>
        <div className={s.sliderSecret}>
            <SliderSecret />
        </div>
        <div className={s.SliderBlockNumber}>
            <section className={s.SliderBlockNumber_mainTitle}>
                <div className={s.mainTitle}>
                    By The Numbers
                </div>
                <div className={s.mainDescription}>
                    <DefaultText text="By The Numbers" className='additional_GreyText' />
                </div>
            </section>
            <div>
                card
                card
                card
            </div>
        </div>
    </div>
};

export default SliderSecretsBlock;
