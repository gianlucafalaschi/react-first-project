import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from '/counterSlice';
import {citiesReducer} from './citiesSlice';

// Creating and exporting the Redux store configuration
export default configureStore({
    // Adding the counter and cities reducers to the store
    reducer: {
        counter: counterReducer,
        cities: citiesReducer,
    },
})
