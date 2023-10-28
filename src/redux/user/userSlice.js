import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    token: null,
    name: null,
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState;
    },
    login: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { logout, login } = authSlice.actions;
export const selectUsername = (state) => state.user.data.name;
export default authSlice.reducer;
