import React, { useState } from 'react';
import CountdownEvent from './CountdownEvent';
import "./CountdownApp.css";


const CountdownApp = () => {
    const [events, setEvents] = useState([
        {
            event: 'Event 1',
            date: '2023-06-30T12:00:00',
            details: ''
        },
        {
            event: 'Event 2',
            date: '2023-07-15T18:30:00',
            details: ''
        },
        // Add more events here
    ]);

    const [newEvent, setNewEvent] = useState({
        event: '',
        date: '',
        details: ''
    });

    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (newEvent.event.trim() === '' || newEvent.date.trim() === '') {
            return;
        }
        setEvents([...events, newEvent]);
        setNewEvent({
            event: '',
            date: '',
        });
    };

    return (
        <div className='events'>
            <h3 className='four'><span>Upcoming</span>  Events</h3>
            <div className="event">

                {events.map((event, index) => (
                    <CountdownEvent key={index} event={event.event} date={event.date} details={event.details} />
                ))}
            </div>
            <form className="subscribe" onSubmit={handleAddEvent}>
                <p>Add New Event</p>
                <input
                    type="text"
                    name="event"
                    placeholder="Event Name"
                    value={newEvent.event}
                    onChange={handleInputChange}
                    className="subscribe-input"
                />
                <input
                    type="text"
                    name="details"
                    placeholder="Event Description"
                    value={newEvent.details}
                    onChange={handleInputChange}
                    className="subscribe-input"
                />
                <input
                    type="datetime-local"
                    name="date"
                    value={newEvent.date}
                    className="subscribe-input"
                    onChange={handleInputChange}
                />
                <button className='submit-btn' type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default CountdownApp;
