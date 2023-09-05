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
                        text={"explore indonesia"}
                        fontFamily={"Roboto"}
                    />
                </h1>
                <ButtonMain className={"buttonMain"} href={"/start_travelling"} text={"Start travelling"} />
            </div>
            <FlexColumns />
            <div className={s.additionalLinks}>
                <a className={s.additionalLinks_span} href="/Fb">Fb</a>
                <a className={s.additionalLinks_span} href="/Tw">Tw</a>
                <a className={s.additionalLinks_span} href="/In">In</a>
            </div>
        </div>
    )
};
export default Landing;