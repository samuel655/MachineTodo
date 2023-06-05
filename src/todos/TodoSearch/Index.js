import React from "react";
import { TodoContext } from '../../TodoContext/Index';
import './TodoSearch.css'

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <input placeholder="Buscar TODOs" 
            className='TodoSearch'
            value={searchValue} 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export {TodoSearch};