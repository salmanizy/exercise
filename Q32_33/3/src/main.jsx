import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Detail from "./pages/Detail"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

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
  <RecoilRoot>
    <RouterProvider router={router}/>
  </RecoilRoot>
)