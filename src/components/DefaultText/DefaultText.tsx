import s from './defaultText.module.scss';
import { CSSProperties } from 'react';

type defaultText = {
    text: string,
    maxWidth?: string,
    textTransform: CSSProperties['textTransform'],
    color?: string,
    fontFamily: string,
}
const DefaultText: React.FC<defaultText> = ({ text, maxWidth, textTransform = "uppercase", color, fontFamily }) => {

    const settingText: CSSProperties = {
        maxWidth,
        textTransform,
        color,
        fontFamily,
    }
    return <div style={settingText} className={s.text}>{text}</div>
};
export default DefaultText; 