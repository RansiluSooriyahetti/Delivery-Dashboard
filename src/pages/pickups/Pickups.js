import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import DateComponent from "../../components/dateComponent";
import PickupTable from "../../components/pickupTable";
import axios from "axios";

import "./pickups.css";

const Pickups = () => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  const formattedDate = [year, month, day].join("-");
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getPickupsByDate/${selectedDate}}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDate]);
  return (
    <div className="pickups">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="dashboardData">
        <div className="datecomponent">
          <DateComponent setSelectedDate={setSelectedDate} />
        </div>
        <div className="deliverytable">
          <PickupTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Pickups;
