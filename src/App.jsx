import React, {useState} from "react";
import EventList from './components/EventList.jsx';
import StartPrototype from "./components/StartPrototype.jsx";


const data = [
    {
        artist: 'Guns N Roses',
        location: 'skövde',
        info: 'Kom igen! Det blir kul!',
        price: 149
    }
]

export const App = () => {
    const[event, setEvents] = useState(data);

    const addEvent = (events) => {
        setEvents((prevEvent) => {
            return [events, ...prevEvent]
        })
    }
    return (
        <div>
            <h1>Hello World!!!</h1>
            <StartPrototype onAddEvent={addEvent} />
            {/* <EventList items = {event} /> */}
        </div>
    )
        
    
}