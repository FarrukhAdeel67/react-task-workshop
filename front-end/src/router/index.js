import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/Not-Found";
import { ErrorPage } from "../pages/Error-Page";
import ProductDetail from "../pages/Home/productDetail";
export default createBrowserRouter(
  createRoutesFromElements([
    <Route path="*" element={<NotFound />} />,
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={<Home />}
    />,
    <Route
      path="/product/:productId"
      errorElement={<ErrorPage />}
      element={<ProductDetail />}
    />,
  ])
);
