import s from "./NumberBlockCards.module.scss"
import DefaultText from "../DefaultText/DefaultText";

const NumberBlockCardData = [
    { title: "100+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.", properties: "additional_GreyText_center" },
    { title: "43,000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo.", properties: "additional_GreyText_center" },
    { title: "30+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero." },
]

const NumberBlockCard = () => {
    return (
        <div className={s.NumberBlockCard}>
            {NumberBlockCardData.map((item, index) => (
                <div key={index} className={s.NumberBlockCard_flexCards}>
                    <div className={s.NumberBlockCard_title}>{item.title}</div>
                    <div className={s.NumberBlockCard_description}>
                        <DefaultText text={item.description} className='additional_GreyText_center' />
                    </div>
                </div>
            ))}
        </div>
    );
};


export default NumberBlockCard;

