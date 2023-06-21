import React from 'react';
import "./Card.css"

export default function Card({ title, time, details }) {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">{title}</p>
                        <p>{time} </p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">Event Details</p>
                        <p>{details} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
