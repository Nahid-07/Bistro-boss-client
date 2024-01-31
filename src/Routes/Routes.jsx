import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Our menu/Our menu/OurMenu";
import OurShop from "../Pages/ourShop/ourShop/OurShop";
import ContactUs from "../Pages/contactUs/contactUs/ContactUs";
import Login from "../Pages/login/Login";
import SignIn from "../Pages/signup/Signup";
import Dashbordlayout from "../Layout/DashbordLayout";
import MyCart from "../Pages/Dashbord/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashbord/AllUser";
import AddItems from "../Pages/Dashbord/AddItems";
import ManageItems from "../Pages/Dashbord/Managetems";
import Reservation from "../Pages/Dashbord/Reservation";
import AddReview from "../Pages/Dashbord/AddReview";
import UserHome from "../Pages/Dashbord/UserHome";

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
        },
        {
          path: '/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
      ]
    },
    {
      path : '/signup',
      element : <SignIn></SignIn>
    },
    {
      path : '/dashbord',
      element:<PrivateRoute><Dashbordlayout></Dashbordlayout></PrivateRoute>,
      children:[
        {
          path:'user-home',
          element:<UserHome></UserHome>
        },
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'all-users',
          element:<AllUser></AllUser>
        },
        {
          path:'add-items',
          element:<AddItems></AddItems>
        },
        {
          path:'manage-items',
          element:<ManageItems></ManageItems>
        },
        {
          path:'reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'add-review',
          element:<AddReview></AddReview>
        },
      ]
    }
  ]);