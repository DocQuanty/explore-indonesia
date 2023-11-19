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
        {/* darkBlueSection */}
        <div className={s.SliderBlockNumber}>
            {/* Title-section */}
            <section className={s.NumberBlock}>
                <div className={s.NumberBlock_mainTitle}>
                    By The Numbers
                </div>
                <div className={s.NumberBlock_mainDescription}>
                    <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit." className='additional_GreyText_center' />
                </div>
                {/* cards-item*/}
                <div className={s.NumberBlockCard}>
                    <div className={s.NumberBlockCard_flexCards}>
                        <div className={s.NumberBlockCard_title}>100+</div>
                        <div className={s.NumberBlockCard_description}>
                            <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero." className='additional_GreyText_center' />
                        </div>
                    </div>
                    <div className={s.NumberBlockCard_flexCards}>
                        <div className={s.NumberBlockCard_title}>43,000+</div>
                        <div className={s.NumberBlockCard_description}>
                            <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero." className='additional_GreyText_center' />
                        </div>
                    </div>
                    <div className={s.NumberBlockCard_flexCards}>
                        <div className={s.NumberBlockCard_title}>30+</div>
                        <div className={s.NumberBlockCard_description}>
                            <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero." className='additional_GreyText_center' />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
};

export default SliderSecretsBlock;
