
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/toDo';

const store = configureStore({
    reducer: {
        tasks: todoReducer,
    },
});

export default store;