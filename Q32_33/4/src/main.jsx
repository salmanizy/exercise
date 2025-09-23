import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Detail from "./page/Detail"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "detail/:id",
    element: <Detail/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
)