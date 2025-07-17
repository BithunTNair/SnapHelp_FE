import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loader: false
}

const generalSlice = createSlice({
    name: "loader",
    initialState: initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload;
        }
    }
});

export const { setLoader } = generalSlice.actions;

export default generalSlice.reducer;