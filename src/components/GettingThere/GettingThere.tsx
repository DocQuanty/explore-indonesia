import s from './GettingThere.module.scss';
import DefaultText from '../DefaultText/DefaultText';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const data = [
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim." },
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim." }, { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim." },
  { title: "Bookings your flights", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim." }

]

type IterationState = number;

const GettingThere = () => {
  // ==========STATE==========
  const [number] = useState<IterationState>(0);
  const [arrHeight, setArrHeight] = useState<number[]>([]);
  // ==========STATE==========

  // ==================FUCNCTION==================
  const numberIteration = (index: number) => {
    console.log(number + index + 1);
    return number !== null ? number + index + 1 : null;
  };

  // const elementRefs = data.map(() => useRef<HTMLDivElement | null>(null));


  // useLayoutEffect(() => {
  //   const updatedArrHeight = data.map((el, index) => {
  //     const element = elementRefs[index]?.current?.getBoundingClientRect().height;
  //     console.log(element);

  //     if (element) {
  //       const height = element.offsetHeight;
  //       return height;
  //     }
  //     return null; // или любое другое значение, если элемент не существует
  //   });

  // }, [elementRefs]);
  const ref = useRef(null);
  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    console.log(height);

  })


  const lineStyles = {
    position: "absolute",
    top: "57px",
    width: "2px",
    height: "210px",
    backgroundColor: "rgba(21, 20, 57, 0.4)",
    opacity: "0.3",
    zIndex: "0",
  };

  const paintLine = (index: number) => {
    if (index === data.length - 1) {
      return null;
    }
    console.log();

    return <div style={lineStyles}></div>;
  };
  // ==================FUCNCTION==================

  return (
    <section className={s.gettingThere}>
      <div className={s.gettingThere_wrapper}>
        <div className={s.gettingThere_title}>
          <DefaultText text={"Getting there"} className={'title'} color={"#010A20"} />
        </div>
        {data.map((el, i) => (
          <div ref={ref} key={i} className={s.gettingThere_cardThere}>
            <div className={s.cardThere_numberSection}>
              {paintLine(i)}
              <div className={s.cardThere_symbol}>
                {numberIteration(i)}
              </div>
            </div>
            <div className={s.cardThere_textBlock}>
              <h4 className={s.textBlock_title}>{el.title}</h4>
              <div className={s.textBlock_text}>{el.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingThere;
