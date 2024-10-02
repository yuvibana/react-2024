import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            const todo = {
                id: nanoid(),
                text: actions.payload
            }
            state.todo.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todo = state.todo.filter((todo) => todo.id !== actions.payload)
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
