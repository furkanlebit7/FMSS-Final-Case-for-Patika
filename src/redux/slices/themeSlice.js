//PACKAGES
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
};

// Then, handle actions in your reducers:
const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
    },
  },
});
export default ThemeSlice.reducer;

//ACTIONS
export const { setTheme } = ThemeSlice.actions;
