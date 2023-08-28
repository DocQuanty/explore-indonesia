import VideoContainer from '../VideoContainer/VideoContainer';
import s from './FlexColumns.module.scss';

const FlexColumns = () => {
    const arr = [
        { number: "01", title: "Title here", description: "Lorem ipsum dolor sit amet et amet ist ame." },
        { number: "02", title: "Title here", description: "Lorem ipsum dolor sit amet et amet ist ame." },
        { number: "03", title: "Title here", description: "Lorem ipsum dolor sit amet et amet ist ame." }
    ]

    return (
        <div className={s.flexColumns_wrapper}>
            <div className={s.flexColumns}>
                {
                    arr.map((e) => (
                        <div key={e.number} className={s.flexColumns_card}>
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