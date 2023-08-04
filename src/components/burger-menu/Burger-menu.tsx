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
                <li>lorem1</li>
                <li>lorem2</li>
                <li>lorem3</li>
                <li>lorem4</li>
                <li>lorem5</li>
            </ul>
        </div>
    </div>
</>
};
export default BurgerMenu;