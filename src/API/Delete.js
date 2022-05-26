import caller from "./Caller";
import GetData from "./Get";

async function DeleteData(url, id, error){
    try{
        await caller.delete(`/${url}/${id}`)
    }
    catch{
        alert(error)
    }
    
    
}

export default DeleteData;