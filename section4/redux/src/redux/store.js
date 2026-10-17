import { configureStore } from "@reduxjs/toolkit";
import { themeData } from "./features/changeTheme";

export const store = configureStore({
  reducer: {
    themeSlice: themeData,
  },
});
