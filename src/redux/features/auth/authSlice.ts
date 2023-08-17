import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICredential } from "../../../types/interface";

interface IAuthState {
  user: string | number | null;
  token: string | null;
}
const userIdFromLocalStorage = localStorage.getItem("UserId");
const token = localStorage.getItem("UserToken");
const initialState: IAuthState = {
  user: userIdFromLocalStorage !== null ? userIdFromLocalStorage : null,
  token: token !== null ? token : null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singOut: (state) => {
      localStorage.removeItem("UserId");
      localStorage.removeItem("UserToken");
      state.user = null;
      state.token = null;
    },
    setUser: (state, action: PayloadAction<ICredential>) => {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
  },
});

export const { singOut, setUser } = authSlice.actions;

export default authSlice.reducer;
