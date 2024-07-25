import React from 'react'
import './TasksBox.scss'
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from '../../store/reducers/toDo'
import { ReactComponent as IconCross } from '../../assets/images/icon-cross.svg';


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
            {tasksList.map((task) => <div className='TasksBox' key={task.id}>
                <div className='TasksBox__TodoContainer'>
                    <input className={`TasksBox__Checkbox ${task.completed && 'checked'}`} type="checkbox" checked={task.completed} value={task.task} onChange={() => completeTask(task)} />
                    <label className={`TasksBox__Label ${task.completed && 'completed'}`}>{task.task}</label>
                </div>

                <IconCross className='TasksBox__RemoveButton' onClick={() => removeTask(task)} />
            </div>
            )}
        </>
    )
}
