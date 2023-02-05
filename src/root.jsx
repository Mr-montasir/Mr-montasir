import React from "react"; 
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function root() {
    return(
        <div className="Page">
            <Header />
            <Outlet />
        </div>
    )
}

export default root;