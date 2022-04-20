import React, { useState } from "react";
import EventForm from "./EventForm";

const StartPrototype = () => {
    const [isEditing, setIsEditing] = useState(false);

    const startPrototype = () => {
        setIsEditing(true);
    }
    const stopPrototype = () => {
        setIsEditing(false);
    }
    const saveEventData = (eneteredEventData) => {
        const eventData = {
            ...eneteredEventData
        };
        props.onAddEvent(eventData);
        setIsEditing(false);
    }

    return (
        <>
            {!isEditing && <button onClick={startPrototype}>Start Prototype</button>}
            {isEditing && <EventForm onCancel={stopPrototype} saveEventData = {saveEventData} />}
        </>
    )
}

export default StartPrototype;