import s from './defaultText.module.scss';

// ===VARIANTS FOR DEFAULTTEXT COMPONENT: main_title, title, additional_GreyText===

type defaultText = {
    text: string,
    className: string
}
const DefaultText: React.FC<defaultText> = ({ text, className }) => {
    function nameClass(className: string): string {
        if (className == "main_title") {
            return s.main_title
        } else if (className == "title") {
            return s.title
        } else if (className == "additional_GreyText") {
            return s.additional_GreyText
        }
        return s.lowerBtn
    }
    return <div className={nameClass(className)}>{text}</div>
};
export default DefaultText;