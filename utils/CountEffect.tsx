import {motion, useInView, animate} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const CountEffect = ({value, suffix = "", duration = 2, delay = 0}: {
    value: number;
    suffix?: string;
    duration?: number;
    delay?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration,
            delay,
            ease: "easeOut",
            onUpdate(latest) {
                setCount(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value, duration, delay]);

    return (
        <motion.span ref={ref}>
            {count}
            {suffix}
        </motion.span>
    );
};

export default CountEffect;