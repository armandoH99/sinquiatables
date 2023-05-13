import { Box } from "@mui/material";

const User = ({ client }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        border: "1px solid #ccc",
        padding: 16,
      }}
    >
      <div>Client ID: {client.client_id}</div>
      <div>First Name: {client.first_name}</div>
      <div>Job: {client.job}</div>
      <div>Job Descriptor: {client.job_descriptor}</div>
    </Box>
  );
};

export default User;
