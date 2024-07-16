import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    categories: [],
    isLoading: false,
    error: null,
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        FETCH_CATEGORIES_START(state) {
            state.isLoading = true;
        },
        FETCH_CATEGORIES_SUCCESS(state, {payload}) {
            state.categories = payload;
            state.isLoading = false;
            state.error = null;
        },
        FETCH_CATEGORIES_FAILED(state, {payload}) {
            state.error = payload;
            state.isLoading = false;
        }
    }
})
export const {FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILED} = categorySlice.actions;
export default categorySlice.reducer;
