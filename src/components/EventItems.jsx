import React, { useEffect, useState, useContext } from "react";
import Button from "./utils/Button";
import caller from "../API/Caller";
import { CustomConfirm } from "./utils/CustomConfirm";
import GetData from "../API/Get";
import SearchBar from "./SearchBar";
import "./style/EventTable.css"
import DeleteEventData from "../API/Delete";
import propTypes from "prop-types";
import AuthContext from '../Context/AuthContext';

const EventItems = (props) => {

    const [data,setData] = useState([]);

    const AuthCtx = useContext(AuthContext);

    const isLoggedIn = AuthCtx.isLoggedIn;

    useEffect(()=>{
        GetData(setData);
    },[])



      async function onDelete(id) {
          await DeleteEventData(id);
          GetData(setData);
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
                    <td> <Button className="button-delete" onclick={() => CustomConfirm(() => onDelete(event.id))}>Delete</Button></td>
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