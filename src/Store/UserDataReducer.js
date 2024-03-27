import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "userDataReducer",
  initialState: {},
  reducers: {
    storeData: (state, action) => {
      return action.payload;
    },
  },
});
export default reducer;
export { actions };
