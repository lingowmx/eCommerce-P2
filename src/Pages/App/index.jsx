import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrders } from "../MyOrders";
import { MyOrder } from "../MyOrder";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
//Components
import { NavBar } from "../../components/Navbar"; 


import "./App.css";

const AppRoutes = () => {
    let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/*', element: <NotFound/>},
      {path: '/my-account', element: <MyAccount/>},
      {path: '/my-orders', element: <MyOrders/>},
      {path: '/my-order', element: <MyOrder/>},
      {path: '/sign-in', element: <SignIn/>},
    ])
    return routes
}



export const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
        <NavBar />
    </BrowserRouter>
  );
};
