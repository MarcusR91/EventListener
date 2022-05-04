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
                
            </>
        
    )
}

export default EventList;