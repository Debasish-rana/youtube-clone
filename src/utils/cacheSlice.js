import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      return ( {...action.payload, ...state});
    },
  },
});

export const { addCache } = cacheSlice.actions;
export default cacheSlice.reducer;
