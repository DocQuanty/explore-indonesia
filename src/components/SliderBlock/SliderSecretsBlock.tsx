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
            <section className={s.NumberBlock}>
                <div className={s.NumberBlock_mainTitle}>
                    By The Numbers
                </div>
                <div className={s.NumberBlock_mainDescription}>
                    <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit." className='additional_GreyText' />
                </div>
                <div>
                <div className={s.NumberBlockCard}>
                    <div className={s.NumberBlockCard_wrapper}>
                        <div className={s.NumberBlockCard_title}>100+</div>
                        <div className={s.NumberBlockCard_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.</div>
                    </div>
                </div>
            </div>
            </section>
            
        </div>
    </div>
};

export default SliderSecretsBlock;
