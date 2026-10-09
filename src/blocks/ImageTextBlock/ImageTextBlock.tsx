import s from './ImageTextBlock.module.scss';

import DefaultText from '../../components/DefaultText/DefaultText';
import ButtonMain from '../../components/Button/ButtonMain';

type textObj = {
    title: string,
    describe: string
}

type imageTextObj = {
    img: string,
    text: textObj
    gradient: string
    flexReverse: string
    id?: string
    alt?: string
}

const ImageTextBlock: React.FC<imageTextObj> = ({ img, text, gradient, flexReverse, id, alt = "" }) => {
    function gradientClass(gradient: string): string {
        return gradient == "top" ? s.futureCardsBackgroundTop : s.futureCardsBackgroundBottom
    }
    function flexReverseClass(flexReverse: string): string {
        return flexReverse == "flex" ? s.blockFlex : s.blockFlexReverse
    }
    return (
        <div className={s.futureCards} id={id}>
            <div className={gradientClass(gradient)}>
                <div className={s.container}>
                    <div className={flexReverseClass(flexReverse)}>
                        {/* imgBlock */}
                        <div className={s.image} data-reveal="zoom">
                            <img src={img} alt={alt} loading="lazy" />
                        </div>
                        {/* textBlock */}
                        <div className={s.text} data-reveal>
                            <div className={s.textTitle}>
                                <DefaultText text={text.title} className={"title"} />
                            </div>
                            <div className={s.textContent}>
                                <DefaultText text={text.describe} className={"additional_GreyText"} />
                            </div>
                            <ButtonMain className={"additionalButton"} href='#secrets' text='Learn More' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default ImageTextBlock;