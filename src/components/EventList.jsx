import EventItems from "./EventItems";
import Button from "./utils/Button";

const EventList = (props) => {

    return (
         <>
            {/* {props.events.length > 0 && */}
                
                    <table>
                        <thead>
                            <tr>
                                <th>Artist</th>
                                <th>Location</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EventItems />
                           
                        </tbody>
                    </table>
                {/* } */}
                
            {/* {props.events.length < 1 && <p>No events added</p>} */}
            </>
        
    )
}

export default EventList;