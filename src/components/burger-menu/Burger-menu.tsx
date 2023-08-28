import { useState } from "react";
import s from "./Burger-menu.module.scss"

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const burgerToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return <>
        <div onClick={burgerToggle} className={`${s.burgerMenu} ${isMenuOpen ? s.open : s.close}`}>
            <div className={s.burgerMenu_burgerLine}></div>
            <div className={s.burgerMenu_menuList}>
                <ul>
                    <li><a href="/destinations">destinations</a></li>
                    <li><a href="/experiences">experiences</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/gallery">gallery</a></li>
                </ul>
            </div>
        </div>
    </>
};
export default BurgerMenu;