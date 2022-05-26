import React, { useEffect, useState, useContext } from "react";
import Button from "../utils/Button";
import { CustomConfirm } from "../utils/CustomConfirm";
import GetData from "../../API/Get";
import "./style/EventTable.css"
import DeleteData from "../../API/Delete";
import propTypes from "prop-types";
import AuthContext from '../../Context/AuthContext';

const EventItems = (props) => {

    const [data,setData] = useState([]);

    const AuthCtx = useContext(AuthContext);

    const isLoggedIn = AuthCtx.isLoggedIn;
    const url = "events";

    useEffect(()=>{
        GetData(url, setData ,"Could not load events, try again later");
    },[])



      async function onDelete(id) {
          await DeleteData(url ,id, "failed to delete the event,try again later");
          await GetData(url, setData);
        // GetData(setData);
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
                    {isLoggedIn && (
                    <td> <Button className="button-delete" onClick={() => CustomConfirm(() => onDelete(event.id))}>Delete</Button></td>
                    )} 
                    </tr>
                )}
               
               </tbody>
      )
}

EventItems.propTypes = {
    input: propTypes.string
};

export default EventItems;