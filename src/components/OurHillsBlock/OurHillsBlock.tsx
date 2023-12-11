import DefaultText from '../DefaultText/DefaultText';
import s from './OurHillsBlock.module.scss';
import ButtonMain from '../Button/ButtonMain';

const OurHillsBlock = () => {

    return <section className={s.OurHillsBlock}>
        <div className={s.OurHillsBlock_background}></div>
        <div className={s.OurHillsBlock_title}>
            <DefaultText text="Our hills and valleys are like nothing you’ve seen." className="title" color='#000' />
        </div>
        <div className={s.OurHillsBlock_content}>
            <DefaultText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor." className="additional_GreyText_center" />
        </div>
        <div className={s.OurHillsBlock_link}>
            <ButtonMain text="Learn More" href="/LearnMore" className='additionalButton' />
        </div>
    </section>
};
export default OurHillsBlock;