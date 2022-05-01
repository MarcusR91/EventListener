import React, { useEffect, useState } from "react";
import Button from "./utils/Button";
import caller from "../API/Caller";
import { CustomConfirm } from "./utils/CustomConfirm";
import GetData from "../API/Get";

const EventItems = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        GetData(setData);
    },[])

    async function onDelete(id) {
       await caller.delete(`/events/${id}`)

       GetData(setData);
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