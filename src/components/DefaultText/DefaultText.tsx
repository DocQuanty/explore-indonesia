import s from './defaultText.module.scss';
import {CSSProperties } from 'react';
type defaultText={
    text:string,
    width:string,
    textTransform:CSSProperties['textTransform'],
}
const DefaultText: React.FC<defaultText> = ({text, width="260px", textTransform="uppercase"}) => {

const settingText:CSSProperties ={
    maxWidth: width,
    textTransform: textTransform,
}
return <div style={settingText} className={s.text}>{text}</div>
};
export default DefaultText; 