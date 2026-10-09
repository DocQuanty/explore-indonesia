import s from "./NumberBlockCards.module.scss"
import DefaultText from "../DefaultText/DefaultText";
import { useEffect, useRef, useState } from "react";

const NumberBlockCardData = [
    { value: 17000, suffix: "+", description: "Islands across three time zones — more than you could visit in a lifetime." },
    { value: 700, suffix: "+", description: "Living languages spoken from Sumatra to Papua." },
    { value: 120, suffix: "+", description: "Active volcanoes, from Bromo’s sunrise to Ijen’s blue fire." },
]

// Counts up once, the first time the block scrolls into view.
const CountUp = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            setShown(value);
            return;
        }
        let raf = 0;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const t0 = performance.now();
            const step = (t: number) => {
                const p = Math.min(1, (t - t0) / 1600);
                setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
                if (p < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        }, { threshold: 0.6 });
        io.observe(el);
        return () => { io.disconnect(); cancelAnimationFrame(raf); };
    }, [value]);
    return <div ref={ref} className={s.NumberBlockCard_title}>{shown.toLocaleString('en-US')}{suffix}</div>;
};

const NumberBlockCard = () => {
    return (
        <section className={s.NumberBlockCard}>
            {NumberBlockCardData.map((item, index) => (
                <div key={index} className={s.NumberBlockCard_flexCards} data-reveal>
                    <CountUp value={item.value} suffix={item.suffix} />
                    <div className={s.NumberBlockCard_description}>
                        <DefaultText text={item.description} className='additional_GreyText_center' />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default NumberBlockCard;
