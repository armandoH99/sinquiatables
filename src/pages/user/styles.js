import { Card, CardActions, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ClienBox = styled(Card)(({ theme }) => ({
  marginTop: 20,
  width: 400,
  height: 200,
  border: "1px solid #0065B3",
  [theme.breakpoints.down(400)]: {
    width: 330,
  },
}));

export const IdText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
}));
export const CardBottomText = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const AvatarColored = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#0065B3",
}));
