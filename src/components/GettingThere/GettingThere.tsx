import s from './GettingThere.module.scss';
import DefaultText from '../DefaultText/DefaultText';
import { useState } from 'react';

const data=[
    {title:"Bookings your flights", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim."},
    {title:"Bookings your flights", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim."},{title:"Bookings your flights", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim."},
    {title:"Bookings your flights", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim."}
    
]



type IterationState = number
const GettingThere = () => {

const [number]=useState<IterationState>(0)

function numberIteration(index: number) {
    return number !== null ? number + index + 1 : null;
}

return <section className={s.gettingThere}>
    <div className={s.gettingThere_title}>
            <DefaultText text={"Getting there"} className={'title'} color={"#010A20"}/>
        </div>
    {data.map((el, i)=>(
        <div className={s.gettingThere_cardThere}>
            <span className={s.cardThere_number}>{numberIteration(i)}</span>
            <div className={s.cardThere_title}>{el.title}</div>
            <div className={s.cardThere_text}>{el.text}</div>
        </div>
    ))}
</section>
};
export default GettingThere;