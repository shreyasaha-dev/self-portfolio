import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./UserDataReducer";
const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
export default store;
