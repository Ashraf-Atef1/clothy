import { UserActionTypes } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGN_SUCCESS(state, {payload}) {
      state.currentUser = payload;
      state.error = null;
    },
    SIGN_FAILED(state, {payload}) {
      state.currentUser = null;
      state.error = payload;
    }
  }
})
export const {SIGN_SUCCESS, SIGN_FAILED} =  userSlice.actions
export default userSlice.reducer;
