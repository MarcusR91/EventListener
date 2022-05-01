import caller from "./Caller";

function PostData(newEvent,setNewEvent) {
    caller.post('/events',{
        artist: newEvent.artist,
        location: newEvent.location, 
        price: newEvent.price
    })
    .then(res => {
        const data = res.data;

        console.log(res.data)
        setNewEvent(data)
    })
}

export default PostData;