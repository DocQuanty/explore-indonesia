import s from "../Landing/landing.module.scss"
import Slider from "../../components/Slider/Slider";
import Title from "../../components/DefaultText/DefaultText"; 

const Landing = () => {
return(
     <>
    <Slider />
    <div className={s.landing} >
        <Title textTransform={"uppercase"} width={"260px"} text={"explore indonesia"}/>
    </div>
    </>
    )
};
export default Landing;