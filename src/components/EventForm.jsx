import React, { useState, useEffect } from 'react';
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
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>Artist</label>
                    <input type="text" value={artist} onChange={artistChangeHandler} />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" value={location} onChange={locationChangeHandler} />
                </div>
                <div>
                    <label>Info</label>
                    <textarea type="text" value={info} onChange={infoChangeHandler} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={priceChangeHandler} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
                <div>
                    <button onClick={props.onCancel}>Stop Prototype</button>
                </div>
            </form>
            <div>
                <EventList events={events} />
            </div>
        </div>
    );
};

export default EventForm;