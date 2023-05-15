import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



const User = ({ client }) => {
  const navigate = useNavigate();

  const handleTableClick = () => {
    navigate("/table");
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleTableClick}>
       Go to table
      </Button>
      <Box
        sx={{
          width: 300,
          height: 200,
          border: "1px solid #ccc",
          padding: 16,
        }}
      >
        <Box>Client ID: {client.client_id}</Box>
        <Box>First Name: {client.first_name}</Box>
        <Box>Job: {client.job}</Box>
        <Box>Job Descriptor: {client.job_descriptor}</Box>
      </Box>
    </>
  );
};

export default User;
