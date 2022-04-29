import React, { useEffect, useState } from "react";
import Button from "./utils/Button";
import caller from "../API/Caller";

const EventItems= (props) => {

    const [data,setData] = useState([]);


   function getEventData() {
        caller.get('/1Y0gpL/data', {})
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


    return (
        <>
            {data.map(event =>
                <tr key= {event.id}>
                    <td>{event.artist}</td> 
                    <td>{event.location}</td>
                    <td>{event.price}</td>
                    {/* <Button>Delete</Button> */}
                    </tr>

                )}
        </>
      )

}

export default EventItems;