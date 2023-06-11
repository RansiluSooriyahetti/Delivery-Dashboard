import React from 'react'
import './style.css';

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const index = () => {
  return (
    <div className="settings">

<div className="navbar">
            <Navbar/>
        </div>

        <div className="sidebar">
            <Sidebar/>
            
        </div>

        <div className="dashboardData">


        </div>



    </div>
  )
}

export default index