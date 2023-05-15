import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const TableBoxContainer = styled(Box)(({ theme }) => ({
    // height: 800, 
    width: "100%",
    marginTop:10,

 
  [theme.breakpoints.between('md','lg')]: {
    height: 500, 
    
  },
  [theme.breakpoints.down('md')]: {
    height: 500, 
    
  },
  [theme.breakpoints.up('lg')]: {
    height: 500, 
    
  },
  [theme.breakpoints.up('xl')]: {
    height: 800, 
    
  },
}))

