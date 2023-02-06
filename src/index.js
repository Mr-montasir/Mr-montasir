import React from "react";
import ReactDOM from "react-dom/client";

// import assets
import './assets/css/main.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

//import layout
import Root from './root';
// Import Pages
import Home from './Pages/home.jsx';
import About from './Pages/about.jsx';
import Admin from './Pages/admin.jsx';

const all_pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: all_pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);