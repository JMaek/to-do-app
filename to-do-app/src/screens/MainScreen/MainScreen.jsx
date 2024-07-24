import React, { useEffect, useState } from 'react'
import './MainScreen.scss'
import { TaskInput } from '../../components/TaskInput/TaskInput'
import { TasksBox } from '../../components/TasksBox/TasksBox'

export const MainScreen = () => {
    const [taskList, setTaskList] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(taskList);
    }, [taskList]);


    const filterTasks = (e, filterValue) => {
        console.log(tasks)
        if (filterValue === 'active') {
            setTasks(taskList.filter(task => !task.checked));
            return;
        }
        if (filterValue === 'completed') {
            setTasks(taskList.filter(task => task.checked));
            return;
        }
        setTasks(taskList);

    }

    return (
        <div>TO DO LIST
            <TaskInput taskList={taskList} addTask={setTaskList} />
            <TasksBox taskList={taskList} editTaskList={setTaskList} tasks={tasks} editTask={setTaskList} />
            <div>
                <spam>{taskList.filter(task => !task.checked).length} items left</spam>
                <button onClick={(e) => filterTasks(e, '')}>all </button>
                <button onClick={(e) => filterTasks(e, 'active')}>active </button>
                <button onClick={(e) => filterTasks(e, 'completed')} >completed </button>
            </div>
        </div>
    )
}
