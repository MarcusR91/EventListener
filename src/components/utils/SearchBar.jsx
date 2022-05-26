import React from "react";
import propTypes from "prop-types";


const SearchBar = (props) => {


    return (
    
       <>
            <input onChange={props.inputHandler} type="search" placeholder="Search by city"/>
        </>
    )
}

SearchBar.propTypes = {
    inputHandler: propTypes.func
}

export default SearchBar;