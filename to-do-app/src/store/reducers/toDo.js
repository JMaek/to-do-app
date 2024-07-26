import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const todoSlice = createSlice({
    name: "tasks",
    initialState: {
        taskList: [],
        filteredTasks: [],
        isFiltered: false
    },
    reducers: {
        addTask: (state, action) => {
            const newTodo = {
                id: id++,
                task: action.payload,
                completed: false,
            };
            state.taskList.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const task = state.taskList.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            const index = state.taskList.findIndex((task) => task.id === action.payload);
            if (index !== -1) {
                state.taskList.splice(index, 1);
            }
        },

        deleteCompletedTasks: (state, action) => {
            return { ...state, taskList: state.taskList.filter((task) => !task.completed) };
        },

        filterTasks: (state, action) => {
            if (action.payload === 'active') {
                return { ...state, filteredTasks: state.taskList.filter((task) => !task.completed), isFiltered: true }
            }
            if (action.payload === 'completed') {
                return { ...state, filteredTasks: state.taskList.filter((task) => task.completed), isFiltered: true }
            }
            if (action.payload === '') {
                return { ...state, filteredTasks: [], isFiltered: false }
            }
        },

        changeOrder: (state, action) => {
            state.taskList = action.payload;
        }
    },
});
export const { addTask, toggleComplete, deleteTask, filterTasks, deleteCompletedTasks, changeOrder } = todoSlice.actions;
export default todoSlice.reducer;