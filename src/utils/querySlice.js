import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    queryValue: null,
  },
  reducers: {
    addQueryvalue: (state, action) => {
      state.queryValue = action.payload;
    },
  },
});


export const { addQueryvalue } = querySlice.actions;
export default querySlice.reducer;