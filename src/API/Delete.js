import caller from "./Caller";
import GetData from "./Get";

async function DeleteEventData(id){
    await caller.delete(`/events/${id}`)
}

export default DeleteEventData;