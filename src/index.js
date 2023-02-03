import React from "react";
import ReactDOM from "react-dom/client";

// import assets
import './assets/css/main.css';
import './assets/js/script.js';
// import Components
import Header from './components/header.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
// Import Pages
import Home from './Pages/home.jsx';
import About from './Pages/about.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="Page">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);