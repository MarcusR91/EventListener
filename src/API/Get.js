import caller from "./Caller";

function GetData (setData) {
    caller.get('/events', {})
    .then(res => {
        const data = res.data;
        
        console.log(data);
        setData(data);
    })
    .catch((error) =>{
        console.error(error);
    })
}

export default GetData;
