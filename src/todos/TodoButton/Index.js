import React from 'react';
import './TodoButton.css'
import { TodoContext } from '../../TodoContext/Index';

function CreateTodoButton() {
    const {setOpenModal} = React.useContext(TodoContext);
    return (
        <button className='CreateTodoButton' onClick={() => {
            setOpenModal(state => !state);
        }}>+</button>
    );
}

export {CreateTodoButton};