import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleshowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleshowSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
