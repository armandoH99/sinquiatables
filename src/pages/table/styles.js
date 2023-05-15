import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableBoxContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: 10,

  [theme.breakpoints.down("xl")]: {
    height: 500,
  },

  [theme.breakpoints.up("xl")]: {
    height: 800,
  },
}));

export const SearchBox = styled(TextField)(({ theme }) => ({
  marginBottom: 16,
}));
