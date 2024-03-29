import React, { useState, useEffect } from 'react';
import styled from "styled-components"

const Countdown = () => {
    const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });


    // UTC TIME (SETUTCHOURS,GETUTCDATE, SETUTCDATE) 
    const calculateTimeRemaining = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setUTCHours(5, 0, 0, 0); //Midnight EST time you want +5h

    let timeRemaining = targetTime - now;

    if (timeRemaining < 0) {
        targetTime.setUTCDate(now.getUTCDate() + 1);
        timeRemaining = targetTime - now;
    }

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
};

useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
}, []);

return (
    <TimeLeft>
            <Left>Time left:</Left>
            <Time>{`${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</Time>
    </TimeLeft>
    );
};


export default Countdown


const TimeLeft = styled.div`
border: 2px black solid;
text-align: center;
padding: 20px;
margin: 10px;
`

const Time = styled.p`
font-size: 50px;
`

const Left = styled.p`
text-decoration: underline black;
`