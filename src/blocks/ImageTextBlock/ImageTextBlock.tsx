import s from './ImageTextBlock.module.scss';
import DefaultText from '../../components/DefaultText/DefaultText';

const ImageTextBlock = () => {
    return <div className={s.imageText}>
        <div className={s.imageText_flex}>
            <div className={s.image}></div>
            <div className={s.text}>
                <div className={s.text_title}>
                    <DefaultText text='The walkways of Indonesia spellbind' className='title' />
                </div>
                <div className={s.text_image}>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. </div>
                <a className={s.text_btn}>Learn More</a>
            </div>
        </div>
    </div>
};
export default ImageTextBlock;