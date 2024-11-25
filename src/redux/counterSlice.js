import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the counter with a name, initial state, and reducers
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: { // Reducers to handle state changes
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Exporting the action creators for the reducers
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Exporting the reducer to be used in the store configuration
export const counterReducer = counterSlice.reducer