import s from './FlexColumns.module.scss';
import VideoContainer from '../VideoContainer/VideoContainer';

const FlexColumns = () => {
    const arr = [
        { number: "01", title: "Bali", description: "Temples, rice terraces and surf on one island." },
        { number: "02", title: "Komodo", description: "Pink beaches and the world’s largest lizards." },
        { number: "03", title: "Java", description: "Borobudur at dawn and the craters of Bromo." }
    ]

    return (
        <div className={s.flexColumns_wrapper}>
            <div className={s.flexColumns}>
                {
                    arr.map((e) => (
                        <div key={e.number} className={s.flexColumns_card} data-reveal>
                            <div className={s.card_number}>{e.number}</div>
                            <div className={s.card_title}>{e.title}</div>
                            <div className={s.card_description}>{e.description}</div>
                        </div>
                    ))

                }

            </div>
            <VideoContainer />
        </div>
    )

};

export default FlexColumns;