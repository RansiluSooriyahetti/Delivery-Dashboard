import { Button } from "@mui/material";
import DataTable from "react-data-table-component";

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
    name: "Advance",
    selector: (row) => row.advance,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    cell: (row, index) => <Button>Delivered</Button>,
  },
];

function PickupTable({ data }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      paginationPerPage={10}
      pagination={true}
    />
  );
}
export default PickupTable;
