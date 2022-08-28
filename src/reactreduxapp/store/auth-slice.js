import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAuthenticated: false,
  userdetails: { username: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      if (action?.payload) {
        state.isAuthenticated = true;
        state.userdetails.username = action?.payload;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
