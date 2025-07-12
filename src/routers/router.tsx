import Root from "@/layouts/Root";
import AllBooks from "@/pages/AllBooks/AllBooks";
import CreateBook from "@/pages/CreateBook/CreateBook";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/books",
        element: <AllBooks></AllBooks>

      },
      {
        path:"/create-book",
        element: <CreateBook></CreateBook>
      }
    ]
  },
]);

export default router
