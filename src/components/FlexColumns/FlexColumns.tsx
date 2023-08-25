import s from './FlexColumns.module.scss';

const FlexColumns = () => {
return <div className={s.flexColumns}>
    <div className={s.flexColumns_card}>
        <div className={s.card_number}>01</div>
        <div className={s.card_title}>Title here</div>
        <div className={s.card_description}>Lorem ipsum dolor sit amet et amet ist ame.</div>
    </div>
    <div className={s.flexColumns_card}>
        <div className={s.card_number}>01</div>
        <div className={s.card_title}>Title here</div>
        <div className={s.card_description}>Lorem ipsum dolor sit amet et amet ist ame.</div>
    </div>
    <div className={s.flexColumns_card}>
        <div className={s.card_number}>01</div>
        <div className={s.card_title}>Title here</div>
        <div className={s.card_description}>Lorem ipsum dolor sit amet et amet ist ame.</div>
    </div>
</div>
};
export default FlexColumns;