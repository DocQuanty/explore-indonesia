import s from './ImageTextBlock.module.scss';

import DefaultText from '../../components/DefaultText/DefaultText';
import ButtonMain from '../../components/Button/ButtonMain';

// import roadImg from '../../assets/images/backgrounds/road.jpg'

type textObj={
    title:string,
    describe:string
}

type imageTextObj = {
    img: string,
    text:textObj
}


const ImageTextBlock:React.FC<imageTextObj>= ({img, text}) => {  
    return (
        <div className={s.futureCards}>

            <div className={s.futureCardsBackground}>
                <div className={s.container}>
                    <div className={s.blockFlex}>
                        {/* imgBlock */}
                        <div className={s.image}>
                            <img src={img} alt="roadImg" />
                        </div>
                        {/* textBlock */}
                        <div className={s.text}>
                            <div className={s.textTitle}>
                                <DefaultText text={text.title} className={"title"} />
                            </div>
                            <div className={s.textContent}>
                                <DefaultText text={text.describe} className={"additional_GreyText"} />
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