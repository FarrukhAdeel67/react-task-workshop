import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/Not-Found";
import { ErrorPage } from "../pages/Error-Page";
import ProductDetail from "../pages/Home/productDetail";
import LogIn from "../pages/LogIn/login";
import SignUp from "../pages/SignUp/signup";
export default createBrowserRouter(
  createRoutesFromElements([
    <Route path="*" element={<NotFound />} />,
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={<Home />}
    />,
    <Route
    path="/logIn"
    errorElement={<ErrorPage />}
    element={<LogIn />}
  />,
  <Route
  path="/SignUp"
  errorElement={<ErrorPage />}
  element={<SignUp />}
/>,
    <Route
      path="/product/:productId"
      errorElement={<ErrorPage />}
      element={<ProductDetail />}
    />,
  ])
);
