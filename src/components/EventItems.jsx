import React, { useEffect, useState } from "react";
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
                    <td>{event.Artist}</td> 
                    <td>{event.Location}</td>
                    <td>{event.Price}</td>
                    </tr>
                    
                )}
        </>
      )

}

export default EventItems;