import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import SingIn from "../page/SingIn";
import AddBook from "../page/AddBook";
import Singup from "../page/Singup";
import BookDetails from "../components/BookDetails";
import EditBook from "../page/EditBook";
import WishList from "../page/WishList";
import PrivateRoute from "./PrivateRoute";
import ReadList from "../page/ReadList";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/singIn", element: <SingIn /> },
  { path: "/singUp", element: <Singup /> },
  {
    path: "/addBook",
    element: (
      <PrivateRoute>
        <AddBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/bookDetails/:id",
    element: (
      <PrivateRoute>
        <BookDetails />
      </PrivateRoute>
    ),
  },
  { path: "/editBook/:id", element: <EditBook /> },
  {
    path: "/wishList",
    element: (
      <PrivateRoute>
        <WishList />
      </PrivateRoute>
    ),
  },
  {
    path: "/readList",
    element: (
      <PrivateRoute>
        <ReadList />
      </PrivateRoute>
    ),
  },
]);

export default router;
