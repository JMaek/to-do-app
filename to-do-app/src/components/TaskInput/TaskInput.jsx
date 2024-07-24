import React, { useEffect, useState } from 'react'
import './TaskInput'

export const TaskInput = ({ addTask, taskList }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue('');
    }, [taskList])


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value);
            addTask(prevTasks => [...prevTasks, { id: prevTasks.length + 1, task: event.target.value, checked: false }]);
        }
    }

    return (
        <>
            <div>
                <input name="task" value={inputValue} onKeyDown={handleKeyDown} onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </>
    )
}
