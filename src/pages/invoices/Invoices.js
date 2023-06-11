import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";
import axios from "axios";

import "./invoices.css";
import InvoiceTable from "../../components/invoiceTable";

const Invoices = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getDeliveries`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filteredData = data.filter((item) =>
    item.invoiceNum.toString().includes(filterText)
  );
  return (
    <div className="invoices">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="dashboardData">
        <div className="search_bar">
          <SearchBar setFilterText={setFilterText} value={filterText} />
        </div>

        <div className="invoice_container">
          <InvoiceTable data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
