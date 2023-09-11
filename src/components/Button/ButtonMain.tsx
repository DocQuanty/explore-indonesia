import s from './ButtonMain.module.scss';
import React from 'react';
type PropsParams = {
    text: string,
    href: string,
    className: string,
}

const ButtonMain: React.FC<PropsParams> = ({ text, href, className }) => {

    function nameClass(className: string): string {
        if (className == "buttonMain") {
            return s.buttonMain
        } else if (className == "additionalButton") {
            return s.additionalButton
        }
        return s.lowerBtn
    }

    return <div className={s.wrapperBtn}> <a href={href} className={nameClass(className)}>{text}</a></div>
};
export default ButtonMain;