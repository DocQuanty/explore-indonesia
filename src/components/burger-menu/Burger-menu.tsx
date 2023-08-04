import { useState } from "react";
import s from "./Burger-menu.module.scss"
const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const burgerToggle=()=> {
        setIsMenuOpen(!isMenuOpen)
    }
return <>
    <div onClick={burgerToggle}  className={`${s.burgerMenu} ${isMenuOpen ? s.open : s.close}`}>
        <div className={s.burgerMenu_burgerLine}></div>
        <div className={s.burgerMenu_menuList}>
            <ul>
                <li><a href="#1">destinations</a></li>
                <li><a href="#2">experiences</a></li>
                <li><a href="#3">about</a></li>
                <li><a href="#4">gallery</a></li>
            </ul>
        </div>
    </div>
</>
};
export default BurgerMenu;