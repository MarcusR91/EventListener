import caller from "./Caller";
import GetData from "./Get";

async function DeleteEventData(id){
    try{
        await caller.delete(`/events/${id}`)
    }
    catch{
        alert("something went wrong!")
    }
    
    
}

export default DeleteEventData;