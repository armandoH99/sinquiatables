import { Box, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

export const BoxScreen = styled(Container)(({ theme }) => ({
  // backgroundColor:'blueviolet',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  paddingTop:'20px',
  

 
  [theme.breakpoints.down('sm')]: {

  },
}))

