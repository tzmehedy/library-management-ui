
import Root from "@/layouts/root";
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
      }
    ]
  },
]);

export default router
