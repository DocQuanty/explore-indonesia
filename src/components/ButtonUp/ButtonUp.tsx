import s from './ButtonUp.module.scss';
import ArrowUp from "../../assets/images/arrowUp.svg"

const ButtonUp = () => {
return <section className={s.buttonUp}>
    <a href='#header' className={s.buttonUp_icon}><img src={ArrowUp} alt="Back to top" /></a>
</section>
};
export default ButtonUp;