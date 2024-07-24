import React from 'react'
import './MainScreen.scss'
import { TaskInput } from '../../components/TaskInput/TaskInput'
import { TasksBox } from '../../components/TasksBox/TasksBox'
import { useSelector, useDispatch } from "react-redux";
import { filterTasks, deleteCompletedTasks } from '../../store/reducers/toDo';

export const MainScreen = () => {
    const taskList = useSelector((state) => state.tasks.taskList);

    const dispatch = useDispatch();

    const deleteAllCompleted = () => {
        dispatch(deleteCompletedTasks())
    }

    const handleFilterTasks = (filterValue) => {
        dispatch(filterTasks(filterValue));
    }

    return (
        <div>TO DO LIST
            <TaskInput />
            <TasksBox />
            <div>
                <spam>{taskList.filter(task => !task.completed).length} items left</spam>
                <button onClick={() => handleFilterTasks('')}>all </button>
                <button onClick={() => handleFilterTasks('active')}>active </button>
                <button onClick={() => handleFilterTasks('completed')} >completed </button>
                <button onClick={() => deleteAllCompleted()} >delete completed </button>
            </div>
        </div>
    )
}
