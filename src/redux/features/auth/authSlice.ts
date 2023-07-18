import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  user: string | number | null;
}
const userIdFromLocalStorage = localStorage.getItem("UserId");
const initialState: IAuthState = {
  user: userIdFromLocalStorage !== null ? userIdFromLocalStorage : null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singOut: (state) => {
      localStorage.removeItem("UserId");
      state.user = null;
    },
  },
});

export const { singOut } = authSlice.actions;

export default authSlice.reducer;
