import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/Error Page/ErrorPage";
import CardDetails from "../Shared Pages/CardDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Shop from "../Components/Shop/Shop";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
            loader: () => fetch('/service.json')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        }
      ]
    },
  ]);

  export default router;