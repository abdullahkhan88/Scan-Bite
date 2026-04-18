import { createBrowserRouter } from "react-router-dom";

/* layout */
import AdminLayout from "../Layout/AdminLayout/AdminLayout.jsx";
import UserLayout from "../Layout/UserLayout/UserLayout.jsx";

/* Admin Pages */
import Dashboard from "../Pages/Admin/Dashboard.jsx";
import ManageMenu from "../Pages/Admin/ManageMenu.jsx";
import Orders from "../Pages/Admin/Orders.jsx";


import Home from "../Pages/User/Home.jsx";
import Menu from "../Pages/User/Menu.jsx";
import Cart from "../Pages/User/Cart.jsx";

const router = createBrowserRouter([
  // USER ROUTES
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },

  //  ADMIN ROUTES
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "menu",
        element: <ManageMenu />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;