import React, { useState } from 'react'
import './MainScreen.scss'
import { TaskInput } from '../../components/TaskInput/TaskInput'
import { TasksBox } from '../../components/TasksBox/TasksBox'
import { useSelector, useDispatch } from "react-redux";
import { filterTasks, deleteCompletedTasks } from '../../store/reducers/toDo';
import { TextButton } from '../../components/Button/TextButton';
import { ThemeToggler } from '../../components/ThemeToggler/ThemeToggler';

export const MainScreen = () => {
    const taskList = useSelector((state) => state.tasks.taskList);
    const [activeButton, setActiveButton] = useState()

    const dispatch = useDispatch();

    const deleteAllCompleted = () => {
        dispatch(deleteCompletedTasks())
    }

    const handleFilterTasks = (filterValue, buttonId) => {
        setActiveButton(buttonId);
        dispatch(filterTasks(filterValue));
    }

    return (
        <div className='MainScreen'>
            <div className='MainScreen__Container'>
                <div className='MainScreen__Header'>
                    <h1 className='MainScreen__Title'>TODO</h1>
                    <ThemeToggler />
                </div>
                <TaskInput />
                <div className='MainScreen__ToDo'>
                    <TasksBox />
                    <div className='MainScreen__TodoFooter'>
                        <spam className='MainScreen__ItemCounter'>{taskList.filter(task => !task.completed).length} items left</spam>
                        <div className='MainScreen__FilterButtons'>
                            <TextButton isActive={activeButton === 1 && activeButton} text={"All"} handleClick={() => handleFilterTasks('', 1)} />
                            <TextButton isActive={activeButton === 2 && activeButton} text={"Active"} handleClick={() => handleFilterTasks('active', 2)} />
                            <TextButton isActive={activeButton === 3 && activeButton} text={"Completed"} handleClick={() => handleFilterTasks('completed', 3)} />
                        </div>
                        <TextButton text={"Clear Completed"} handleClick={() => deleteAllCompleted()} />
                    </div>
                </div>
            </div>
        </div>
    )
}
