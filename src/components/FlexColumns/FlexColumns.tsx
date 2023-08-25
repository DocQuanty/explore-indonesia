import s from './FlexColumns.module.scss';

const FlexColumns = () => {
    const arr = [
        { number: "01", title: "title", description: "description" },
        { number: "02", title: "title", description: "description" },
        { number: "03", title: "title", description: "description" }
    ]

    return (
        <div className={s.flexColumns}>
            {
                arr.map((e) => (
                    <div key={e.number} className={s.flexColumns_card}>
                        <div className={s.card_number}>{e.number}</div>
                        <div className={s.card_title}>Title here</div>
                        <div className={s.card_description}>Lorem ipsum dolor sit amet et amet ist ame.</div>
                    </div>
                ))

            }
        </div>
    )

};

export default FlexColumns;