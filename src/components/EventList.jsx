import React, {useState} from 'react';

import EventItems from "./EventItems";
import SearchBar from "./SearchBar";
import "./style/EventTable.css"
import Button from "./utils/Button";

const EventList = () => {

    const[inputText,setInputText] = useState("");



    let inputHandler =(e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)
    }

    return (
         <div className='table-container'>
            <SearchBar className="searchbar" inputHandler = {inputHandler}/>
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
                </div>
        
    )
}

export default EventList;