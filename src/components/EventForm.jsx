import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './style/EventForm.css';
import Button from './utils/Button';
// import View from './View';
import EventList from './EventList';
import caller from '../API/Caller';

const EventForm = (props) => {

    const navigate = useNavigate();

    // const getDatafromLS = () => {
    //     const data = localStorage.getItem('events');
    //     if (data) {
    //         return JSON.parse(data);
    //     }
    //     else {
    //         return []
    //     }
    // }

    // const [events, setEvents] = useState(getDatafromLS());
    const [newEvent, setNewEvent] = useState({
        artist: '',
        location:'',
        price: ""
    })

    // const [artist, setArtist] = useState('');
    // const [location, setLocation] = useState('');
    // const [info, setInfo] = useState('');
    // const [price, setPrice] = useState('');

    // const artistChangeHandler = (event) => {
    //     setArtist(event.target.value);
    // }
    // const locationChangeHandler = (event) => {
    //     setLocation(event.target.value);
    // }
    // const infoChangeHandler = (event) => {
    //     setInfo(event.target.value);
    // }
    // const priceChangeHandler = (event) => {
    //     setPrice(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        caller.post('/events',{
            artist: newEvent.artist,
            location: newEvent.location, 
            price: newEvent.price
        })
        .then(res => {
            const data = res.data;

            console.log(res.data)
            setNewEvent(data)
        })

        navigate('/events')

        // let eventData = {
        //     artist,
        //     location,
        //     info,
        //     price
        // }
        // setEvents([...events, eventData]);
        // setArtist('');
        // setLocation('');
        // setInfo('');
        // setPrice('');

    }

    function handle(e){
        const newData = {...newEvent}
        newData[e.target.id] = e.target.value;
        setNewEvent(newData);
        console.log(newData);
       
    }

    // useEffect(() => {
    //     localStorage.setItem('events', JSON.stringify(events));
    // }, [events])

    return (
        <>
            {/* <div className='event-form-container'> */}
                <form onSubmit={submitHandler} className="event-form" >
                    <div className='form-title'>
                        <h2>New Event</h2>
                    </div>
                    <div className='form-label'>
                        <label>Artist</label>
                        <input onChange={(e) => handle(e)} id='artist' type="text" value={newEvent.artist}  required />
                    </div>
                    <div className='form-label'>
                        <label>Location</label>
                        <input  onChange={(e) => handle(e)} id='location' type="text" value={newEvent.location}  required />
                    </div >
                    {/* <div className='form-label'>
                        <label>Info</label>
                        <textarea type="text" value={info} onChange={infoChangeHandler} required />
                    </div> */}
                    <div className='form-label'>
                        <label>Price</label>
                        <input  onChange={(e) => handle(e)} id='price' type="number" value={newEvent.price} required />
                    </div>
                    <div className='form-button-container'>
                       <Button type = "submit" className = "form-button">Add Event</Button>
                    </div>
                    {/* <div className='stop-prototyp-container'>
                        <button className='stop-prototype' onClick={props.onCancel}>Stop Prototype</button>
                    </div> */}
                </form>
                {/* <EventList events={events} /> */}
                
            {/* </div> */}
            
        </>
    );
};

export default EventForm;