import {configureStore} from "@reduxjs/toolkit"
import todosReducer from '../reducers/todosSlice'
const rootReducer ={
    todos:todosReducer,
}
const store =configureStore({
    reducer:rootReducer
});

export default store;
