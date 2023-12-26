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
                <a href='/' className={s.menu_about}>About</a>
                <a href='/' className={s.menu_pricing}>Pricing</a>
                <a href='/' className={s.menu_company}>Company</a>
                <a href='/' className={s.menu_blog}>Blog</a>
            </div>
            <div className={s.footer_social}>
                <ul className={s.social_link}>
                    <li><a href="/"><img src={facebook} alt="" /></a></li>
                    <li><a href="/"><img src={linkedin} alt="" /></a></li>
                    <li><a href="/"><img src={gmail} alt="" /></a></li>
                </ul>
                <span className={s.social_copyright}>Copyright © 2023</span>
            </div>
        </div>
    </footer>
};
export default Footer;