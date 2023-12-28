import s from './Header.module.scss';
import "../../assets/style/global.scss"
import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import BurgerMenu from '../burger-menu/Burger-menu';
import { Search } from '../search/Search';

const Header = () => {
    return <>
        <section id='header' className={s.header}>
            <a href='/explore-indonesia/' className={s.logo}>
                <img src={logoRose} alt="logoRose" />
                <div className={s.textLogo}>Explore Indonesia</div>
            </a>
            <div className={s.menu}>
                <a className={s.headerLinks} href="/explore-indonesia/">destinations</a>
                <a className={s.headerLinks} href="/explore-indonesia/">experiences</a>
                <a className={s.headerLinks} href="/explore-indonesia/">about</a>
                <a className={s.headerLinks} href="/explore-indonesia/">gallery</a>
            </div>
            <div className={s.navigationMenu}>
                <Search />
                <BurgerMenu />
            </div>
        </section>
    </>
};
export default Header;