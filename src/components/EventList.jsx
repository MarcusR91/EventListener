import EventItems from "./EventItems";

const EventList = (props) => {

    return (
         <div className="event-info">
            {props.events.length > 0 &&
                
                    <table>
                        <thead>
                            <tr>
                                <th>Artist</th>
                                <th>Location</th>
                                <th>Info</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EventItems events={props.events} />
                        </tbody>
                    </table>
                }
                
            {props.events.length < 1 && <p>No events added</p>}
            </div>
        
    )
}

export default EventList;