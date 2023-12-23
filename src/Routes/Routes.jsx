import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Our menu/Our menu/OurMenu";
import OurShop from "../Pages/ourShop/ourShop/OurShop";

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
          element : <OurMenu></OurMenu>
        },
        {
          path:'/ourShop',
          element: <OurShop></OurShop>
        }
      ]
    },
  ]);