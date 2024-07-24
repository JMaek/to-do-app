import React, { useEffect, useState } from 'react'
import './TaskInput'
import { useDispatch } from "react-redux";
import { addTask } from '../../store/reducers/toDo'


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
        <>
            <div>
                <input name="task"
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </>
    )
}
