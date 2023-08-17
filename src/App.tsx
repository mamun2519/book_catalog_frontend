import { setUser } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hook/hook";

function App() {
  const dispatch = useAppDispatch();

  const user = localStorage.getItem("UserId");
  const token = localStorage.getItem("UserToken");

  dispatch(setUser({ user: user, token: token }));
  return <div>{/* <ToastContainer /> */}</div>;
}

export default App;
