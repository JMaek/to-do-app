import React, { useState } from 'react'
import './TaskInput.scss'
import { useDispatch } from "react-redux";
import { addTask } from '../../store/reducers/toDo';



export const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(addTask(inputValue));
            setInputValue('');
        }
    }

    return (
        <div className='TaskInput'>
            <input
                className='TaskInput__Input'
                name="task"
                placeholder='Create a new todo...'
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)} />
            <input type="checkbox" className='TaskInput__Input-checkbox' disabled />
        </div>
    )
}
