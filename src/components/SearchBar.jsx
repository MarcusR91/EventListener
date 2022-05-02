import React from "react";


const SearchBar = (props) => {

    return (
    
       <>
            <input onChange={props.inputHandler} type="search" placeholder="Search by city"/>
        </>
    )
}

export default SearchBar;