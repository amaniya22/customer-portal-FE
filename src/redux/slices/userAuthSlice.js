import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        // getUser: (state, action) => {
        //     state.push(action.payload);
        //     return state
        // },

        addUser: (state, action) => {
            state.push(action.payload);
            return state;
        }
    }
})

export const {addUser} = userAuthSlice.actions;
export default userAuthSlice.reducer;