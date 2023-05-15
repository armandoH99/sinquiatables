import { Button, CardContent, CardHeader, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClienBox, IdText, AvatarColored, CardBottomText } from "./styles";

const User = ({ client }) => {
  const navigate = useNavigate();

  const handleTableClick = () => {
    navigate("/table");
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleTableClick}>
        Go to main table
      </Button>
      <ClienBox>
        <CardHeader
          avatar={<AvatarColored>{client.first_name.charAt(0)}</AvatarColored>}
          title={<Typography variant="h5"> {client.first_name}</Typography>}
          subheader={client.job}
        />
        <CardContent>
          <Typography>Job Descriptor: {client.job_descriptor}</Typography>
        </CardContent>
        <CardBottomText>
          <IdText color="text.secondary" gutterBottom>
            <strong>ID:</strong> {client.client_id}
          </IdText>
        </CardBottomText>
      </ClienBox>
    </>
  );
};

export default User;
