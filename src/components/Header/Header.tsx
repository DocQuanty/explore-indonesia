import s from './Header.module.scss';
import "../../assets/style/global.scss"
import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import BurgerMenu from '../burger-menu/Burger-menu';
import {Search} from '../search/Search';

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
                <Search testField='thi is real test field' />
                <BurgerMenu/>
            </div>
    </div>
</>
};
export default Header;