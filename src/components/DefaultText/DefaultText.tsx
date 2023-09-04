import s from './defaultText.module.scss';
import { CSSProperties } from 'react';

type defaultText = {
    text: string,
    maxWidth?: string,
    textTransform: CSSProperties['textTransform'],
    color?: string,
    fontFamily: string,
}
const DefaultText: React.FC<defaultText> = ({ text, textTransform = "uppercase", fontFamily }) => {

    function mediaScreen(screen: number): object {
        console.log(screen);

        if (screen >= 1024) {
            return {
                maxWidth: "627px",
                fontSize: "120px",
            }

        } else if (screen <= 1024 && screen >= 767) {
            return {
                fontSize: "80px",
            }
        } else if (screen <= 766) {
            return {
                maxWidth: "314px",
                fontSize: "58px",
            }
        }
        return {};
    }
    const styles = mediaScreen(window.innerWidth);
    const settingText: CSSProperties = {
        ...styles,
        // maxWidth,
        textTransform,
        // color,
        fontFamily,
    }
    console.log(settingText);


    return <div style={settingText} className={s.text}>{text}</div>
};
export default DefaultText; 