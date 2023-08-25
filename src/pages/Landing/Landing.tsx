import s from "../Landing/landing.module.scss"
import Slider from "../../components/Slider/Slider";
import DefaultText from "../../components/DefaultText/DefaultText"; 
import ButtonMain from "../../components/Button/ButtonMain";

const Landing = () => {
return(
    <div className={s.landing} >
        <Slider />
        <div className={s.landing_title}>
        <h1 className={s.title_text} >
        <DefaultText  
            textTransform={"uppercase"} 
            maxWidth={"627px"} 
            text={"explore indonesia"}
            fontSize={"120px"}
            fontFamily={"Roboto"}
            />
        </h1>
        <ButtonMain padding={"20px 50px"}/>
        </div>
        <div className="text-flex">
фцвфцвawd
        </div>
    </div>
    )
};
export default Landing;