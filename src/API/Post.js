import caller from "./Caller";

async function  PostData(url, newEvent,setNewEvent, error) {
    try{
        const response = await caller.post( `/${url}`,{
            artist: newEvent.artist,
            location: newEvent.location, 
            price: newEvent.price
        })

        const data = response.data
        await setNewEvent(data)

        return data
    }
    catch{
        alert(error)
    }
        
        // .then(res => {
        //     const data = res.data;
    
        //     console.log(res.data)
        // }).catch(alert("SomeThing went wrong when trying to add your event, try again later"))


        
        

    
}

export default PostData;