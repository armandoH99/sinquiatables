import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, InputAdornment, Tooltip } from "@mui/material";
import { TableBoxContainer, SearchBox } from "./styles";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const columns = [
  { field: "rowNumber", headerName: "#", width: 40 },
  { field: "account_name", headerName: "Account Name", width: 180 },
  { field: "amount", headerName: "Amount", width: 80 },
  { field: "credit_card_cvv", headerName: "CVV", width: 50 },
  { field: "credit_card_issuer", headerName: "Card Issuer", width: 120 },
  { field: "credit_card_number", headerName: "Card Number", width: 180 },
  { field: "currency_name", headerName: "Currency", width: 150 },
  { field: "transaction_description", headerName: "Description", width: 200 },
  { field: "transaction_type", headerName: "Transaction Type", width: 130 },
];

const Table = ({ inputData, clientName }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const rows = inputData.map((data, index) => ({
      id: `row-${index + 1}`,
      rowNumber: index + 1,
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

  const handleProfileClick = () => {
    navigate("/user");
  };

  return (
    <>
      <Tooltip title={`Navigate to ${clientName}'s Profile`}>
        <Button variant="contained" size="small" onClick={handleProfileClick}>
          {clientName}'s Profile
        </Button>
      </Tooltip>

      <TableBoxContainer>
        <SearchBox
          label="Filter"
          value={filterValue}
          onChange={handleFilter}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Search">
                  <IconButton>
                    <Search />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(row) => row.id}
          pagination
          sx={{
            ".MuiDataGrid-columnHeader": {
              color: "#012169",
            },
          }}
          localeText={{
            noRowsLabel: "No user Data, yet",
          }}
        />
      </TableBoxContainer>
    </>
  );
};
export default Table;
