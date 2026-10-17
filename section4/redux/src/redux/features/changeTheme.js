import { createSlice } from "@reduxjs/toolkit";

export const themeData = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeData.actions;
export default themeData.reducer;
