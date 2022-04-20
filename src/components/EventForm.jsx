import React, {useState} from 'react';

const EventForm = (props) => {

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

        const eventData = {
            artist: artist,
            location: location, 
            info: info,
            price: price
        }
        console.log(eventData);
        localStorage.setItem('eventdata', JSON.stringify(eventData));

        // props.saveEventData(eventData);
    }
    return (
        <form onSubmit={submitHandler}>
        <div>
            <label>Artist</label>
            <input type = "text" value={artist} onChange={artistChangeHandler} />
        </div>
        <div>
            <label>Location</label>
            <input type = "text" value={location} onChange={locationChangeHandler} />
        </div>
        <div>
            <label>Info</label>
            <textarea type = "text" value={info} onChange={infoChangeHandler} />
        </div>
        <div>
            <label>Price</label>
            <input type = "number" value={price} onChange={priceChangeHandler} />
        </div>
        <div>
            <button type='submit'>Add</button>
        </div>
        <div>
            <button onClick={props.onCancel}>Stop Prototype</button>
        </div>
    </form>
    );
};

export default EventForm;