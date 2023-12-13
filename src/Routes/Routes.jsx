import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Our menu/Our menu/Menu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/ourmenu',
          element : <Menu></Menu>
        }
      ]
    },
  ]);