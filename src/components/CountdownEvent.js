import React, { useState, useEffect } from 'react';
import Card from './Card';

const CountdownEvent = ({ event, date, details }) => {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const eventDate = new Date(date).getTime();
            const timeRemaining = eventDate - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            if (timeRemaining < 0) {
                clearInterval(intervalId);
                setRemainingTime('Event has passed');
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <>
            <Card title={event} time={remainingTime} details={details} />
        </>
    );
};

export default CountdownEvent;
