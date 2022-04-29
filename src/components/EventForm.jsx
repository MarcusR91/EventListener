import React, { useState, useEffect } from 'react';
import './style/EventForm.css';
// import View from './View';
import EventList from './EventList';

const EventForm = (props) => {

    const getDatafromLS = () => {
        const data = localStorage.getItem('events');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return []
        }
    }

    const [events, setEvents] = useState(getDatafromLS());

    const [artist, setArtist] = useState('');
    const [location, setLocation] = useState('');
    const [info, setInfo] = useState('');
    const [price, setPrice] = useState('');

    const artistChangeHandler = (event) => {
        setArtist(event.target.value);
    }
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }
    const infoChangeHandler = (event) => {
        setInfo(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let eventData = {
            artist,
            location,
            info,
            price
        }
        setEvents([...events, eventData]);
        setArtist('');
        setLocation('');
        setInfo('');
        setPrice('');

    }

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events])

    return (
        <>
            {/* <div className='event-form-container'> */}
                <form onSubmit={submitHandler} className="event-form" >
                    <div className='form-title'>
                        <h2>New Event</h2>
                    </div>
                    <div className='form-label'>
                        <label>Artist</label>
                        <input type="text" value={artist} onChange={artistChangeHandler} required />
                    </div>
                    <div className='form-label'>
                        <label>Location</label>
                        <input type="text" value={location} onChange={locationChangeHandler} required />
                    </div >
                    <div className='form-label'>
                        <label>Info</label>
                        <textarea type="text" value={info} onChange={infoChangeHandler} required />
                    </div>
                    <div className='form-label'>
                        <label>Price</label>
                        <input type="number" value={price} onChange={priceChangeHandler} required />
                    </div>
                    <div className='form-button-container'>
                        <button className='form-button' type='submit' >Add event</button>
                    </div>
                    <div className='stop-prototyp-container'>
                        <button className='stop-prototype' onClick={props.onCancel}>Stop Prototype</button>
                    </div>
                </form>
                {/* <EventList events={events} /> */}
                
            {/* </div> */}
            
        </>
    );
};

export default EventForm;