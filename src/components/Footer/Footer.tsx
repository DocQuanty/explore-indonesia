import s from './Footer.module.scss';

import logoRose from "../../assets/images/icons/header/logo-rose.svg"
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"
import gmail from "../../assets/images/g-solid.svg"
import ButtonUp from '../ButtonUp/ButtonUp';

const Footer = () => {
    return <footer className={s.footer} id="footer">
        <ButtonUp />
        <div className={s.footer_wrapper}>
            <a href='#header' className={s.footer_logo}>
                <img src={logoRose} alt="logoRose" />
                <div className={s.logo_logoText}>
                    <div className={s.logoText_textUp}>Explore</div>
                    <div className={s.logoText_textDown}>Indonesia</div>
                </div>
            </a>
            <div className={s.footer_menu}>
                <a href='#about' className={s.menu_about}>About</a>
                <a href='#destinations' className={s.menu_pricing}>Pricing</a>
                <a href='#experiences' className={s.menu_company}>Company</a>
                <a href='#gallery' className={s.menu_blog}>Blog</a>
            </div>
            <div className={s.footer_social}>
                <ul className={s.social_link}>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a></li>
                    <li><a href="mailto:hello@example.com"><img src={gmail} alt="Email" /></a></li>
                </ul>
                <span className={s.social_copyright}>Copyright © 2023</span>
            </div>
        </div>
    </footer>
};
export default Footer;