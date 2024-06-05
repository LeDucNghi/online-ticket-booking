"use client"

import * as React from 'react';

export interface ITimerProps {
}

export default function Timer(props: ITimerProps) {
    // const targetDate = new Date().setSeconds(new Date().getSeconds() + 3600)

    // const calculateTimeLeft = () => {
    //     const difference = targetDate.getTime() - new Date().getTime();
    //     let timeLeft = {
    //         minutes: 0,
    //         seconds: 0,
    //     };

    //     if (difference > 0) {
    //         timeLeft = {
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60),
    //         };
    //     }

    //     return timeLeft;
    // };

    const [timeLeft, setTimeLeft] = React.useState(0);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {

    //         setTimeLeft(calculateTimeLeft());
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, [targetDate]);

    return (
        <>
            {timeLeft}
        </>
    )
}
