import s from './SliderSecretsBlock.module.scss';
import SliderSecret from '../sliderSecret/SliderSecret';

const SliderSecretsBlock = () => {  
   return <div className={s.SliderBlockSecrets}>
    <div className={s.SliderBlockBackground}></div>
        <div className={s.sliderTitle}>Explore Our Secrets</div>
        <div className={s.sliderSecret}>
            <SliderSecret />
        </div>
    </div>
};

export default SliderSecretsBlock;
