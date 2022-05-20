import caller from "./Caller";

async function  PostData(newEvent,setNewEvent) {
    try{
        const response = await caller.post('/events',{
            artist: newEvent.artist,
            location: newEvent.location, 
            price: newEvent.price
        })

        const data = response.data
        await setNewEvent(data)

        return data
    }
    catch{
        alert("Failed to add event")
    }
        
        // .then(res => {
        //     const data = res.data;
    
        //     console.log(res.data)
        // }).catch(alert("SomeThing went wrong when trying to add your event, try again later"))


        
        

    
}

export default PostData;