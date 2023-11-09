import s from './ImageTextBlock.module.scss';
import DefaultText from '../../components/DefaultText/DefaultText';
import ButtonMain from '../../components/Button/ButtonMain';
import roadImg from '../../assets/images/backgrounds/road.jpg'

const ImageTextBlock = () => {
    return (
        <div className={s.futureCards}>


            <div className={s.futureCardsBackground}>
                <div className={s.container}>
                    <div className={s.blockFlex}>
                        {/* img */}
                        <div className={s.image}>
                            <img src={roadImg} alt="roadImg" />
                        </div>
                        {/* text */}
                        <div className={s.text}>
                            <div className={s.textTitle}>
                                <DefaultText text='The walkways of Indonesia spellbind' className={"title"} />
                            </div>
                            <div className={s.textContent}>
                                <DefaultText text='Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. ' className={"additional_GreyText"} />
                            </div>
                            <ButtonMain className={"additionalButton"} href='/LearnMore' text='Learn More' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default ImageTextBlock;