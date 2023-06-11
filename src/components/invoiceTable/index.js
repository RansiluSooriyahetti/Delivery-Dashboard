import { Button } from "@mui/material";
import DataTable from "react-data-table-component";
import "./style.css";

const openPdf = (imageUrl) => {
  const byteCharacters = atob(atob(imageUrl));
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: "application/pdf" });
  const blobUrl = URL.createObjectURL(blob);
  window.open(blobUrl, "_blank");
};

const columns = [
  {
    name: "Invoice No",
    selector: (row) => row.invoiceNum,
    width: "15rem",
  },
  {
    name: "Customer Name",
    selector: (row) => row.customerName,
    width: "25rem",
  },
  {
    name: "Address",
    selector: (row) => row.address,
    width: "30rem",
  },
  {
    name: "Invoice",
    selector: (row) => row.image,
    cell: (row, index) => (
      <Button onClick={() => openPdf(row.image)}>Open</Button>
    ),
    width: "10rem",
  },
];

function InvoiceTable({ data }) {
  return (
    <div className="invoicetable">
      <DataTable
        columns={columns}
        data={data}
        paginationPerPage={10}
        pagination={true}
      />
    </div>
  );
}
export default InvoiceTable;
