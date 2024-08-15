import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrders } from "../MyOrders";
import { MyOrder } from "../MyOrder";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";


import "./App.css";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: './', element: <Home/>},
        {path: '/myaccount', element: <MyAccount/>},
        {path: '/myorders', element: <MyOrders/>},
        {path: '/myorder', element: <MyOrder/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ])
    return routes
}



export const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
};
