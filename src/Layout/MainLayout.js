import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function MainLayout() {
    return (
      <div>
        <Sidebar/>

        <Outlet/>
      </div>
     
    );
  }
  
  export default MainLayout;