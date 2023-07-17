import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import SingIn from "../page/SingIn";
import AddBook from "../page/AddBook";
import Singup from "../page/Singup";
import BookDetails from "../components/BookDetails";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/singIn", element: <SingIn /> },
  { path: "/singUp", element: <Singup /> },
  { path: "/addBook", element: <AddBook /> },
  { path: "/bookDetails/:id", element: <BookDetails /> },
]);

export default router;
