import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import EventMaster from "pages/Events/EventMaster";
import EventListing from "pages/Events/EventListing";

import AttendenceMenu from "pages/Events/AttendenceMenu";
import JudgeEvents from "pages/Events/Judge/JudgeEvents";
import JudgesParticipents from "pages/Events/Judge/JudgesParticipents";
import RoundList from "pages/Events/Judge/RoundList";
import RoundList2 from "pages/Events/Judge/RoundList2";
import RoundList3 from "pages/Events/Judge/RoundList3";
import LiftDisplayBoard from "pages/Events/DisplayBoard/LiftDisplayBoard";
import Sports from "pages/Events/Sports";
import EventGrid from "pages/Events/EventGridView.js";
import EventDetails from "pages/Events/EventGridView.js/EventDetails";
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  {
    path: "/event",
    exact: true,
    component: <EventMaster/>,
  },
  {
    path: "/eventlist",
    exact: true,
    component: <EventListing/>,
  },
  {
    path: "/participentlist",
    exact: true,
    component: <AttendenceMenu/>,
  },
  {
    path: "/judge",
    exact: true,
    component: <JudgeEvents/>,
  },
  {
    path: "/judgeparticipents",
    exact: true,
    component: <JudgesParticipents/>,
  },
  {
    path: "/round1",
    exact: true,
    component: <RoundList />,
  },
  {
    path: "/round2",
    exact: true,
    component: <RoundList2 />,
  },
  {
    path: "/round3",
    exact: true,
    component: <RoundList3 />,
  },
  {
    path: "/liftdisplay",
    exact: true,
    component: <LiftDisplayBoard />,
  },
  {
    path: "/sports",
    exact: true,
    component: <Sports />,
  },
  {
    path: "/event-grid",
    exact: true,
    component: <EventGrid />,
  },
  {
    path: "/event-details",
    exact: true,
    component: <EventDetails />,
  },

];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
 
  

];

export { authProtectedRoutes, publicRoutes };
