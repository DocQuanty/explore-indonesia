import s from './Header.module.scss';
import "../../assets/style/global.scss"
import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import loop from "../../assets/images/icons/header/loop.svg"
const Header = () => {
return <>
    <div className={s.header}>
            <div className={s.logo}><img src={logoRose} alt="logoRose" /><div className={s.textLogo}>Explore Indonesia</div></div>
            <div className={s.menu}>
                <a className={s.headerLinks} href="#">destinations</a>
                <a className={s.headerLinks} href="#">experiences</a>
                <a className={s.headerLinks} href="#">about</a>
                <a className={s.headerLinks} href="#">gallery</a>
            </div>
            <div className={s.navigationMenu}>
                <div className={s.search}><img src={loop} alt="loop" /></div>
                <div className={s.burgerMenu}>
                    <div className={s.burgerLine}></div>
                </div>
            </div>
    </div>Header
</>
};
export default Header;