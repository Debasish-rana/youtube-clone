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
    closeSidebar:(state) => {
      state.showSidebar = false;
    }
  },
});

export const { toggleshowSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
