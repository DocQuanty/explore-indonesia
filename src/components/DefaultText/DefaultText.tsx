import s from './defaultText.module.scss';

// ===VARIANTS FOR DEFAULTTEXT COMPONENT: text="" className="main_title" | title" | additional_GreyText ===

type defaultText = {
    text: string,
    className: string,
    color?:string | undefined
}
const DefaultText: React.FC<defaultText> = ({ text, className, color}) => {
    function nameClass(className: string): string {
        if (className == "main_title") {
            return s.main_title
        } else if (className == "title") {
            return s.title
        } else if (className == "additional_GreyText") {
            return s.additional_GreyText
        } else if (className == "additional_GreyText_center") {
            return s.additional_GreyText_center
        }
        return s.lowerBtn
    }
    return <div style={{color:color}} className={nameClass(className)}>{text}</div>
};
export default DefaultText;