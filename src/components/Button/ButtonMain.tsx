import s from './ButtonMain.module.scss';
import React from 'react';
type PropsParams ={
    width:number,
    height:number,
    background:string,
    colorText:string,
    text:string,
}

const ButtonMain: React.FC<PropsParams>= ({width=271,height=82,background="#dd2242",colorText="rgba(255, 255, 255, 0.8)",text="Start travelling"}) => {
return  <button style={{width:`${width}px`,height:`${height}px`, background:`${background}`, color:`${colorText}` }} className={s.buttonMain}>
            {text}
        </button>
};
export default ButtonMain;