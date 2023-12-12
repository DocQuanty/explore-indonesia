import s from './LiveLikeBlock.module.scss';
import DefaultText from '../DefaultText/DefaultText';
import Card_Img01 from "../../assets/images/jpg/LiveLikeBlockCard_01.jpg"
import Card_Img02 from "../../assets/images/jpg/LiveLikeBlockCard_02.jpg"

const data = [
  {
    title: "Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.",
    video: [{ title: "Indonesia The Ultimate Travel Guide Best Places to Visit | Explore The Emerald of the Equator", src: "https://www.youtube.com/embed/204O_xorrHk", width: "100%", height: "594", allowSetting: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }],
    cards: [
      { img: Card_Img01, title: "In The Country", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus." },
      { img: Card_Img02, title: "In The City", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in." }
    ]

  }
]
const LiveLikeBlock = () => {
  return (
    <section className={s.LiveLikeBlock}>
      <div className={s.LiveLikeBlock_background}></div>
      {/* map on block */}
      {data.map((el, index) => (
        <div className={s.LiveLikeBlock_wrapper} key={index}>
          <div className={s.LiveLikeBlock_title}>
            <DefaultText text={el.title} className={"title"} color={"#fff"} />
          </div>
          <div className={s.LiveLikeBlock_video}>
            {/* map on video */}
            {el.video.map((videoSetting, i) => (
              <iframe
                key={i}
                width={videoSetting.width}
                height={videoSetting.height}
                src={videoSetting.src}
                title={videoSetting.title}
                allow={videoSetting.allowSetting}>
                </iframe>
            ))}
          </div>
          <div className={s.LiveLikeBlock_wrapperCard}>
            {/* map on cards */}
            {el.cards.map((card, i) => (
              <div key={i} className={s.wrapperCard_card}>
                <div className={s.card_img}>
                  <img src={card.img} alt="card-img" />
                </div>
                <div className={s.cardText}>
                  <div className={s.cardText_titleBlock}>
                    <DefaultText text={card.title} className={"additional_GreyText"} color={"#fff"} />
                  </div>
                  <div className={s.cardText_textBlock}>
                    <DefaultText text={card.text} className={"additional_GreyText"} color={"#808080"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
      }
    </section >
  );
};

export default LiveLikeBlock;
