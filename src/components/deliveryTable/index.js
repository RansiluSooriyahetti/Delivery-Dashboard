import { Button, Input } from "@mui/material";
import DataTable from "react-data-table-component";

function DeliveryTable({ data, setClick, click }) {
  // const setStatus = (e) => {
  //   console.log(e.target.value);
  //   // if (e.target.innerhtml.toString() == "Delivered") {
  //   //   e.target.innerhtml = "Not Delivered";
  //   // } else {
  //   //   e.target.innerhtml = "Delivered";
  //   // }
  // };

  const columns = [
    {
      name: "Invoice No",
      selector: (row) => row.invoiceNum,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
      width: "15rem",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      width: "30rem",
    },
    {
      name: "To Be Payed",
      selector: (row) => row.toBePayed,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row, index) => <Button>Delivered</Button>,
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data}
      paginationPerPage={10}
      pagination={true}
    />
  );
}
export default DeliveryTable;
