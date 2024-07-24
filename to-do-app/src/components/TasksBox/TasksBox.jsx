import React from 'react'
import './TasksBox.scss'

export const TasksBox = ({ taskList, editTaskList, tasks, editTask }) => {

    const deleteTask = (e, task) => {
        console.log('henlo')
        editTask(taskList.filter(item => item.task !== task.task))
    }

    const completeTask = (e, task) => {
        console.log('check')
        const temporaryTaks = [...taskList];
        const changedTaskIndex = temporaryTaks.findIndex(changedTask => changedTask.id === task.id);
        temporaryTaks[changedTaskIndex].checked = !temporaryTaks[changedTaskIndex].checked;
        editTaskList(temporaryTaks);
    }

    return (
        <>
            {tasks.map((task) => <div key={task.id}>
                <input type="checkbox" checked={task.checked} value={task.task} onChange={(e) => completeTask(e, task)} />
                <label>{task.task}</label>
                <button onClick={(e) => deleteTask(e, task)}>x</button>
            </div>
            )}
        </>
    )
}
