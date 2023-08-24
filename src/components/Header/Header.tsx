import s from './Header.module.scss';
import "../../assets/style/global.scss"
import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import BurgerMenu from '../burger-menu/Burger-menu';
import {Search} from '../search/Search';

const Header = () => {
return <>
    <div className={s.header}>
            <a href='/' className={s.logo}>
                <img src={logoRose} alt="logoRose" />
                <div className={s.textLogo}>Explore Indonesia</div>
            </a>
            <div className={s.menu}>
                <a className={s.headerLinks} href="/destinations">destinations</a>
                <a className={s.headerLinks} href="/experiences">experiences</a>
                <a className={s.headerLinks} href="/about">about</a>
                <a className={s.headerLinks} href="/gallery">gallery</a>
            </div>
            <div className={s.navigationMenu}>
                <Search />
                <BurgerMenu/>
            </div>
    </div>
</>
};
export default Header;