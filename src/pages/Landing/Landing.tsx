import s from "../Landing/landing.module.scss"
import Slider from "../../components/Slider/Slider";
import DefaultText from "../../components/DefaultText/DefaultText"; 
import ButtonMain from "../../components/Button/ButtonMain";

const Landing = () => {
return(
     <>
    <Slider />
    <div className={s.landing} >
        <div className={s.landing_title}>
        <h1 >
        <DefaultText  
            textTransform={"uppercase"} 
            maxWidth={"627px"} 
            text={"explore indonesia"}
            fontSize={"120px"}
            fontFamily={"Roboto"}
            />
        </h1>
        <ButtonMain/>
        </div>
    </div>
    </>
    )
};
export default Landing;