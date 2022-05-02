import React, { useEffect, useState } from "react";
import Button from "./utils/Button";
import caller from "../API/Caller";
import { CustomConfirm } from "./utils/CustomConfirm";
import GetData from "../API/Get";
import SearchBar from "./SearchBar";

const EventItems = (props) => {

    const [data,setData] = useState([]);


    useEffect(()=>{
        GetData(setData);
    },[])



    async function onDelete(id) {
       await caller.delete(`/events/${id}`)

       GetData(setData);
    }

    const filteredData = data.filter((event) =>{
        if(props.input === ""){
            return event;
        }else{
            return event.location.toLowerCase().includes(props.input);
        }
    })

    return (
        <tbody>
            {filteredData.map(event =>
                <tr key= {event.id}>
                    <td>{event.artist}</td> 
                    <td>{event.location}</td>
                    <td>{event.price}</td>
                    <td> <Button onclick={() => CustomConfirm(() => onDelete(event.id))}>Delete</Button></td>
                    </tr>
                )}
               
               </tbody>
      )
}

export default EventItems;