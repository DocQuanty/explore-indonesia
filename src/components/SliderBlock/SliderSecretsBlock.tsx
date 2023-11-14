import s from './SliderSecretsBlock.module.scss';
import SliderSecret from '../sliderSecret/SliderSecret';

const SliderSecretsBlock = () => {  
   return <div className={s.SliderBlockSecrets}>
        <div className={s.sliderTitle}>Explore Our Secrets</div>
        <SliderSecret />
    </div>
};

export default SliderSecretsBlock;
