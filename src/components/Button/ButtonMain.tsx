import s from './ButtonMain.module.scss';
import React from 'react';
type PropsParams ={
    padding:number,
    background?:string,
    color?:string,
    text?:string,
    href:string,
}

const ButtonMain: React.FC<PropsParams>= ({padding,background="#dd2242",color="rgba(255, 255, 255, 0.8)",text="Start travelling", href="/"}) => {
    const buttonSetting={
        padding,
        background,
        color,
        href
    }
return  <a href={href} style={buttonSetting} className={s.buttonMain}>
            {text}
        </a>
};
export default ButtonMain;