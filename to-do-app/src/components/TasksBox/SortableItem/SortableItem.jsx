import React, { createContext, useContext, useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactComponent as IconCross } from '../../../assets/images/icon-cross.svg';
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from '../../../store/reducers/toDo'

const SortableItemContext = createContext({
    attributes: {},
    listeners: undefined,
    ref() { }
});


export const SortableItem = ({ id, task }) => {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable({ id });
    const context = useMemo(
        () => ({
            attributes,
            listeners,
            ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    );
    const style = {
        opacity: isDragging ? 0.4 : undefined,
        transform: CSS.Translate.toString(transform),
        transition
    };

    return (
        <SortableItemContext.Provider value={context}>
            <div className='TasksBox' ref={setNodeRef} style={style}>
                <DragHandle>
                    <TaskButtons task={task} />
                </DragHandle>
            </div>
        </SortableItemContext.Provider>
    );
}

export function DragHandle({ children }) {
    const { attributes, listeners, ref } = useContext(SortableItemContext);

    return (
        <div className='TasksBox__Dragable' {...attributes} {...listeners} ref={ref}>
            {children}
        </div>
    );
}

export const TaskButtons = ({ task }) => {
    const dispatch = useDispatch();


    const removeTask = (task) => {
        dispatch(deleteTask(task.id));
    }

    const completeTask = (task) => {
        dispatch(toggleComplete(task.id));
    }
    return (
        <>
            <div className='TasksBox__TodoContainer'>
                <input
                    className={`TasksBox__Checkbox ${task.completed && 'checked'}`}
                    type="checkbox"
                    checked={task.completed}
                    value={task.task} onChange={() => completeTask(task)} />
                <label className={`TasksBox__Label ${task.completed && 'completed'}`}>{task.task}</label>
            </div>

            <IconCross className='TasksBox__RemoveButton' onClick={() => removeTask(task)} />
        </>
    );
}
