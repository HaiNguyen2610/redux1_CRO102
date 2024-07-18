import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";


const store = configureStore({
    reducer: {
        expense: reducer
    }
});

export default store;