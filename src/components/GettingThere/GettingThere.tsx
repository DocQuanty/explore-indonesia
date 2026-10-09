import s from './GettingThere.module.scss';
import DefaultText from '../DefaultText/DefaultText';
import { useLayoutEffect, useRef, useState } from 'react';
import ButtonMain from '../Button/ButtonMain';

import imgAdd from "../../assets/images/jpg/bike.jpg"

const data = [
  { title: "Book your flights", text: "Most international routes land in Jakarta (CGK) or Bali (DPS). From there, domestic airlines and ferries connect the islands — book inter-island legs early in high season.", image: null, innerText: null },
  { title: "Check the entry rules", text: "Visa requirements depend on your passport and change from time to time. Check the official immigration site before you fly, and make sure your passport is valid for at least six months.", image: null, innerText: null },
  { title: "Plan how to get around", text: "Distances between islands are bigger than they look on the map. Combine short flights for long hops with ferries and scooters for the last mile.", image: imgAdd, innerText: "On Bali and Lombok, renting a scooter is the easiest way to reach beaches and temples off the main roads — take a helmet and an international licence." },
  { title: "Pick the season", text: "The dry season, roughly April to October, is the easiest time for trekking and diving in most regions; the wet season brings short heavy showers and greener landscapes.", image: null, innerText: null }
]

type IterationState = number;

const GettingThere = () => {
  // =====================
  const [number] = useState<IterationState>(0);
  const [card, setCard] = useState<Array<{ elHeight: number }>>([]);

  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  // ====================
  const numberIteration = (index: number) => {
    return number !== null ? number + index + 1 : null;
  };

  // Line length = height of the step it leaves from, re-measured on resize.
  useLayoutEffect(() => {
    const measure = () => {
      const updatedCardArray = data.map((_, index) => {
        const element = refs.current[index] as unknown as HTMLDivElement | null;
        return { elHeight: element ? element.getBoundingClientRect().height + 33 : 0 };
      });
      setCard(updatedCardArray);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const paintLine = (index: number) => {
    if (index === data.length - 1) {
      return null;
    }
    const height = card[index]?.elHeight

    const lineStyles: React.CSSProperties = {
      position: "absolute",
      top: "58px",
      left: "calc(50% - 1.5px)",
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
            <img src={img} alt="" loading="lazy" />
          </div>
        )}
        <div className={s.additionSection_innerText}>{innerText}</div>
      </div>
    );
  };

  // ====================================
  return (
    <section className={s.gettingThere} id="getting-there">
      <div className={s.gettingThere_wrapper}>
        <div className={s.gettingThere_title}>
          <DefaultText text={"Getting there"} className={'title'} color={"#010A20"} />
        </div>
        {data.map((el, i) => (
          // @ts-ignore
          <div ref={(ref) => refs.current[i] = ref} key={i} className={s.gettingThere_cardThere} data-reveal>
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
          <ButtonMain text={"Learn more"} className={"additionalButton"} href={"#header"} />
        </div>
      </div>
    </section>
  );
};

export default GettingThere;

