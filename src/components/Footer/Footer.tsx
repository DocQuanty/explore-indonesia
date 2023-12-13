import s from './Footer.module.scss';

const Footer = () => {
    return <footer className={s.footer}>
        <div className={s.footer_logo}>
            <img src="/" alt="logo" />
        </div>
        <div className={s.footer_menu}>
            <a href='/' className={s.menu_about}>About</a>
            <a href='/' className={s.menu_pricing}>Pricing</a>
            <a href='/' className={s.menu_company}>Company</a>
            <a href='/' className={s.menu_blog}>Blog</a>
        </div>
        <div className={s.footer_social}>
            <img src="/" alt="facebook" />
            <img src="/" alt="linkedin" />
            <img src="/" alt="gmail" />
            <span>Copyright © 2019</span>
        </div>
    </footer>
};
export default Footer;