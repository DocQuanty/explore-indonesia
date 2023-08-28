import s from "../Landing/landing.module.scss"
import Slider from "../../components/Slider/Slider";
import DefaultText from "../../components/DefaultText/DefaultText";
import ButtonMain from "../../components/Button/ButtonMain";
import FlexColumns from "../../components/FlexColumns/FlexColumns"

const Landing = () => {
    return (
        <div className={s.landing} >
            <Slider />
            <div className={s.landing_title}>
                <h1 className={s.title_text} >
                    <DefaultText
                        textTransform={"uppercase"}
                        maxWidth={"627px"}
                        text={"explore indonesia"}
                        fontFamily={"Roboto"}
                    />
                </h1>
                <ButtonMain padding={"20px 50px"} />
            </div>
            <FlexColumns />
        </div>
    )
};
export default Landing;