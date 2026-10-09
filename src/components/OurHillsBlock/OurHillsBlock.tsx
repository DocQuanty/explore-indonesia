import DefaultText from '../DefaultText/DefaultText';
import s from './OurHillsBlock.module.scss';
import ButtonMain from '../Button/ButtonMain';

const OurHillsBlock = () => {

    return <section className={s.OurHillsBlock} id="about">
        <div className={s.OurHillsBlock_background}></div>
        <div className={s.OurHillsBlock_title} data-reveal>
            <DefaultText text="Our hills and valleys are like nothing you’ve seen." className="title" color='#000' />
        </div>
        <div className={s.OurHillsBlock_content} data-reveal>
            <DefaultText text="Rice terraces cut into volcanic slopes, crater lakes and jungle ridges — walk them at sunrise, before the heat and the crowds." className="additional_GreyText_center" />
        </div>
        <div className={s.OurHillsBlock_link} data-reveal>
            <ButtonMain text="Learn More" href="#gallery" className='additionalButton' />
        </div>
    </section>
};
export default OurHillsBlock;