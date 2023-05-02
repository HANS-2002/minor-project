import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { initFirebase } from "./firebaseConfig";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer";

initFirebase();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
        <Footer />
      </>
    ),
    errorElement: <Navigate to="/" />,
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <Signin />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
