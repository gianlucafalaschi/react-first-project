import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for the cities with a name, initial state, and reducers
export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                title: "Tokyo",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
                imgUrl:
                    "https://images.unsplash.com/photo-1633632860411-364d4dc29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true,
            },
            {
                id: 1,
                title: "New York",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi reprehenderit quibusdam nulla odio ullam commodi! Aliquid consequatur, officiis, saepe voluptatibus officia provident voluptates dignissimos ullam rerum excepturi ipsa enim?",
                imgUrl:
                    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false,
            },
            {
                id: 2,
                title: "Rome",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
                imgUrl:
                    "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true,
            },
            {
                id: 3,
                title: "Paris",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti omnis, sint, aliquam officia iusto fugit, earum saepe ullam placeat minus accusamus. Cupiditate sint officia qui ea, reiciendis ad molestias.",
                imgUrl:
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false,
            },
        ],
    },
    reducers: { // Reducers to handle state changes
        // Reducer to add a new city to the list
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

// Exporting the action creator for the add reducer
export const { add } = citiesSlice.actions

// Exporting the reducer to be used in the store configuration
export const citiesReducer = citiesSlice.reducer