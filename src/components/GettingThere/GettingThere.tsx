import s from './GettingThere.module.scss';
import DefaultText from '../DefaultText/DefaultText';
import { useLayoutEffect, useRef, useState } from 'react';
import ButtonMain from '../Button/ButtonMain';

import imgAdd from "../../assets/images/jpg/bike.jpg"

const data = [
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.", image: null, innerText: null },
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.", image: null, innerText: null }, { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.", image: imgAdd, innerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim." },
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.", image: null, innerText: null }

]

type IterationState = number;

const GettingThere = () => {
  // =====================
  const [number] = useState<IterationState>(0);
  const [card, setCard] = useState<Array<{ elHeight: number }>>([]);

  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  // ====================

  // ====================================
  const numberIteration = (index: number) => {
    return number !== null ? number + index + 1 : null;
  };

  useLayoutEffect(() => {
    const updatedCardArray = data.map((el, index) => {
      const element = refs.current[index];
      const elHeight = element ? element.getBoundingClientRect().height + 33 : 0;
      return {
        elHeight: elHeight,
      };
    });
    setCard(updatedCardArray);
  }, [data]);

  const paintLine = (index: number) => {
    if (index === data.length - 1) {
      return null;
    }
    const height = card[index]?.elHeight

    const lineStyles: React.CSSProperties = {
      position: "absolute",
      top: "57px",
      width: "3px",
      height: `${height}px`,
      backgroundColor: "rgba(21, 20, 57, 0.4)",
      opacity: "0.3",
      zIndex: "0",
    };
    return <div style={lineStyles}></div>;
  };

  const additionSection = (img: string | null, innerText: string | null) => {
    if (img === null && innerText === null) {
      return null;
    }

    return (
      <div className={s.additionSection}>
        {img && (
          <div className={s.additionSection_img}>
            <img src={img} alt="image" />
          </div>
        )}
        <div className={s.additionSection_innerText}>{innerText}</div>
      </div>
    );
  };

  // ====================================
  return (
    <section className={s.gettingThere}>
      <div className={s.gettingThere_wrapper}>
        <div className={s.gettingThere_title}>
          <DefaultText text={"Getting there"} className={'title'} color={"#010A20"} />
        </div>
        {data.map((el, i) => (
          <div ref={(ref) => refs.current[i] = ref} key={i} className={s.gettingThere_cardThere}>
            {/* ========number======== */}
            <div className={s.cardThere_numberSection}>
              {paintLine(i)}
              <div className={s.cardThere_symbol}>
                {numberIteration(i)}
              </div>
            </div>
            {/* ========number======== */}
            <div className={s.cardThere_textBlock}>
              <h4 className={s.textBlock_title}>{el.title}</h4>
              <div className={s.textBlock_text}>{el.text}</div>
              {additionSection(el.image, el.innerText)}
            </div>
          </div>
        ))}
        <div className={s.gettingThere_button}>
          <ButtonMain text={"Learn more"} className={"additionalButton"} href={"/"} />
        </div>
      </div>
    </section>
  );
};

export default GettingThere;

