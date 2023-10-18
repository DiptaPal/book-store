import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./features/darkMode/darkModeSlice";
import slideChangeSlice from "./features/slideChange/slideChangeSlice";


const store = configureStore({
    reducer:{
        darkMode: darkModeSlice,
        slideChange: slideChangeSlice,
    },
})


export default store;