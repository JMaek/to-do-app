import React from 'react'
import './TasksBox.scss'
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from '../../store/reducers/toDo'

export const TasksBox = () => {
    const tasksListState = useSelector((state) => state.tasks.taskList);
    const isFiltered = useSelector((state) => state.tasks.isFiltered);
    const filteredTasks = useSelector((state) => state.tasks.filteredTasks);

    const tasksList = isFiltered ? filteredTasks : tasksListState;
    const dispatch = useDispatch();

    const removeTask = (task) => {
        dispatch(deleteTask(task.id));
    }

    const completeTask = (task) => {
        dispatch(toggleComplete(task.id));
    }

    return (
        <>
            {tasksList.map((task) => <div key={task.id}>
                <input type="checkbox" checked={task.completed} value={task.task} onChange={() => completeTask(task)} />
                <label>{task.task}</label>
                <button onClick={() => removeTask(task)}>x</button>
            </div>
            )}
        </>
    )
}
