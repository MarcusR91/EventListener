import caller from "./Caller";
import GetData from "./Get";

async function DeleteData(url, id){
    try{
        await caller.delete(`/${url}/${id}`)
    }
    catch{
        alert("something went wrong!")
    }
    
    
}

export default DeleteData;