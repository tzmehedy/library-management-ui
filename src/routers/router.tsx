import Root from "@/layouts/Root";
import AllBooks from "@/pages/AllBooks/AllBooks";
import CreateBook from "@/pages/CreateBook/CreateBook";
import Home from "@/pages/Home/Home";
import SingleBook from "@/pages/SingleBook/SingleBook";
import UpdateBook from "@/pages/UpdateBook/UpdateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/books/:id",
        element: <SingleBook></SingleBook>,
      },
      {
        path: "/create-book",
        element: <CreateBook></CreateBook>,
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook></UpdateBook>
      },
    ],
  },
]);

export default router
