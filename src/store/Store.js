import { configureStore } from "@reduxjs/toolkit";
import cReducer from '../reducer/Reducer'

const store = configureStore({
    reducer:{
        cardReducer: cReducer
    }
})

export default store;