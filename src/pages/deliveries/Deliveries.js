import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import DeliveryTable from "../../components/deliveryTable";
import DateComponent from "../../components/dateComponent";
import axios from "axios";

import "./deliveries.css";

const Deliveries = () => {
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
      .get(`http://localhost:8080/getAllDeliveryByDate/${selectedDate}}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDate]);

  return (
    <div className="deliveries">
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
          <DeliveryTable data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
