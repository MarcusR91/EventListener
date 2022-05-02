import React, {useState} from 'react';

import EventItems from "./EventItems";
import SearchBar from "./SearchBar";
import Button from "./utils/Button";

const EventList = () => {

    const[inputText,setInputText] = useState("");

    let inputHandler =(e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)
    }

    return (
         <>
            {/* {props.events.length > 0 && */}
            <SearchBar inputHandler = {inputHandler}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Artist</th>
                                <th>City</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        
                        <EventItems input = {inputText} />
                    </table>
                    
                {/* } */}
                
            {/* {props.events.length < 1 && <p>No events added</p>} */}
            </>
        
    )
}

export default EventList;