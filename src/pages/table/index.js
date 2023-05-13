import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";

const columns = [
  { field: "rowNumber", headerName: "#", width: 80 },
  { field: "account_name", headerName: "Account Name", width: 180 },
  { field: "amount", headerName: "Amount", width: 100 },
  { field: "credit_card_cvv", headerName: "CVV", width: 50 },
  { field: "credit_card_issuer", headerName: "Card Issuer", width: 120 },
  { field: "credit_card_number", headerName: "Card Number", width: 250 },
  { field: "currency_name", headerName: "Currency", width: 150 },
  { field: "transaction_description", headerName: "Description", width: 200 },
  { field: "transaction_type", headerName: "Transaction Type", width: 100 },
];

const Table = ({ inputData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const rows = inputData.map((data, index) => ({
      id: `row-${index + 1}`,
      ...data,
    }));

    const filteredRows = rows.filter((row) => {
      return Object.values(row).some((cellValue) => {
        if (typeof cellValue === "string") {
          return cellValue.toLowerCase().includes(filterValue.toLowerCase());
        }
        return false;
      });
    });

    setFilteredData(filteredRows);
  }, [inputData, filterValue]);

  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);
  };

  return (
    <div style={{ height: 800, width: "100%" }}>
      <TextField
        label="Filter"
        value={filterValue}
        onChange={handleFilter}
        style={{ marginBottom: 16 }}
      />
      <DataGrid
        rows={filteredData}
        columns={columns}
        getRowId={(row) => row.id}
        pagination     
        rowsPerPageOptions={[10,15,25]}
      />
    </div>
  );
};
export default Table;
