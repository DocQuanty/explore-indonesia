import s from './Footer.module.scss';

import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"
import gmail from "../../assets/images/g-solid.svg"
import ButtonUp from '../ButtonUp/ButtonUp';

const Footer = () => {
    return <footer className={s.footer}>
        <ButtonUp />
        <div className={s.footer_wrapper}>
            <a href='/' className={s.footer_logo}>
                <img src={logoRose} alt="logoRose" />
                <div className={s.logo_logoText}>
                    <div className={s.logoText_textUp}>Explore</div>
                    <div className={s.logoText_textDown}>Indonesia</div>
                </div>
            </a>
            <div className={s.footer_menu}>
                <a href='/explore-indonesia/' className={s.menu_about}>About</a>
                <a href='/explore-indonesia/' className={s.menu_pricing}>Pricing</a>
                <a href='/explore-indonesia/' className={s.menu_company}>Company</a>
                <a href='/explore-indonesia/' className={s.menu_blog}>Blog</a>
            </div>
            <div className={s.footer_social}>
                <ul className={s.social_link}>
                    <li><a href="/explore-indonesia/"><img src={facebook} alt="facebook" /></a></li>
                    <li><a href="/explore-indonesia/"><img src={linkedin} alt="linkedin" /></a></li>
                    <li><a href="/explore-indonesia/"><img src={gmail} alt="gmail" /></a></li>
                </ul>
                <span className={s.social_copyright}>Copyright © 2023</span>
            </div>
        </div>
    </footer>
};
export default Footer;