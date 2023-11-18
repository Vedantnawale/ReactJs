import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1, text: "Hello World"}]
}

// function sayHello() {
//     console.log("Hello World");
// } // ya function cha addTodo madhe reference deta yete

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(), // instead of Date.now we can use nanoid
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer 