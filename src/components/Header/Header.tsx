import s from './Header.module.scss';
import "../../assets/style/global.scss"
import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import loop from "../../assets/images/icons/header/loop.svg"
import BurgerMenu from '../burger-menu/Burger-menu';
const Header = () => {
return <>
    <div className={s.header}>
            <a href='!' className={s.logo}>
                <img src={logoRose} alt="logoRose" />
                <div className={s.textLogo}>Explore Indonesia</div>
            </a>
            <div className={s.menu}>
                <a className={s.headerLinks} href="#">destinations</a>
                <a className={s.headerLinks} href="#">experiences</a>
                <a className={s.headerLinks} href="#">about</a>
                <a className={s.headerLinks} href="#">gallery</a>
            </div>
            <div className={s.navigationMenu}>
                <div className={s.search}>
                    <img src={loop} alt="loop" />
                </div>
                <BurgerMenu/>
            </div>
    </div>
</>
};
export default Header;