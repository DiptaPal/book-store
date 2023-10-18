import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: 0
}

const slideChangeSlice = createSlice({
    name: 'slideChange',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {setActive} = slideChangeSlice.actions;

export default slideChangeSlice.reducer;