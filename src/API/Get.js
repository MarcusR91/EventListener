import React from 'react';
import caller from "./Caller";

async function GetData (url, setData) {
    try{
        const response = await caller.get( `/${url}`, {})

        const data = response.data
        await setData(data);

    return data;
    }
    catch{
        alert("Failed to fetch the data")
    }
    


    // .then(res => {
    //     const data = res.data;
        
    //     console.log(data);
       
    // })
    // .catch((error) =>{
    //     console.error(error);
    // })
}

export default GetData;
