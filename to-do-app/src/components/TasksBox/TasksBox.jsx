import React, { useState } from 'react'
import './TasksBox.scss'
import { useSelector, useDispatch } from "react-redux";
import { changeOrder } from '../../store/reducers/toDo'
import { SortableList } from './SortableList';

export const TasksBox = () => {
    const tasksListState = useSelector((state) => state.tasks.taskList);
    const isFiltered = useSelector((state) => state.tasks.isFiltered);
    const filteredTasks = useSelector((state) => state.tasks.filteredTasks);

    const tasksList = isFiltered ? filteredTasks : tasksListState;
    const dispatch = useDispatch();


    const changeOrderList = (list) => {
        dispatch(changeOrder(list));
    }

    return (
        <>
            <div >
                <SortableList
                    tasks={tasksList}
                    onChange={changeOrderList}
                    renderItem={(item) => (
                        <SortableList.Item id={item.id} task={item} />
                    )}
                />
            </div>

        </>
    )
}
