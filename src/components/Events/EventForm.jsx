import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './style/EventForm.css';
import Button from '../utils/Button';
import PostData from '../../API/Post';



const EventForm = () => {

    const navigate = useNavigate();

    const [newEvent, setNewEvent] = useState({
        artist: '',
        location:'',
        price: ""
    })

     const submitHandler = async (event) => {
        event.preventDefault();

       await  PostData(newEvent,setNewEvent);
        navigate('/events')
    }

     function handle(e){
        const newData = {...newEvent}
        newData[e.target.id] = e.target.value;
        setNewEvent(newData);
        console.log(newData);
    }

    return (
        <>
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
                    <div className='form-label'>
                        <label>Price</label>
                        <input  onChange={(e) => handle(e)} id='price' type="number" value={newEvent.price} required />
                    </div>
                    <div className='form-button-container'>
                       <Button type = "submit" className = "form-button">Add Event</Button>
                    </div>
                </form>
        </>
    );
};

export default EventForm;