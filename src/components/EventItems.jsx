import React, { useEffect, useState } from "react";
import Button from "./utils/Button";
import caller from "../API/Caller";
import { CustomConfirm } from "./utils/CustomConfirm";

const EventItems= (props) => {

    const [data,setData] = useState([]);


   function getEventData() {
        caller.get('/events', {})
        .then(res => {
            const data = res.data;
            
            console.log(data);
            setData(data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }
    useEffect(()=>{
        getEventData();
    },[])

    async function onDelete(id) {
       await caller.delete(`/events/${id}`)

        getEventData();

    }

    return (
        <>
            {data.map(event =>
                <tr key= {event.id}>
                    <td>{event.id}</td>
                    <td>{event.artist}</td> 
                    <td>{event.location}</td>
                    <td>{event.price}</td>
                    <td> <Button onclick={() => CustomConfirm(() => onDelete(event.id))}>Delete</Button></td>
                   
                    </tr>

                )}
        </>
      )

}

export default EventItems;