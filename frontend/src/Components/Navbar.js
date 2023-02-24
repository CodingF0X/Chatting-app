import { AppBar, Avatar, Box, Container, Icon, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logOut } from '../State/Action-Creators/UserActions'
//import { user } from '../State/Tokens/Index'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useSelector(state=>state.auth)
  const [user,setUser]=useState(null)

  useEffect(()=>{
    setUser(auth?.result)
  },[location])
  return (
    <AppBar position='static' color='secondary'>
     <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{display:'flex', flexDirection:'row', alignItems:'center' }}>
            <Typography 
                 sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign:'center'
                  }}
                  flexBasis='80%'
            >
               <Link to='/home'> YAHOO </Link> 
            </Typography>

        <Box >

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
                <Avatar/>
            </IconButton>
        </Box>

        {
        user ?
        (   <Typography onClick={()=>dispatch(logOut(navigate))} 
        sx={{
         "&:hover": {
           cursor: "pointer",
         },
        }}
        >LogOut</Typography>)
      :
        (<Link to='/Signin'>
            Sign In
        </Link>)
        }

        </Toolbar>

     </Container>
    </AppBar>
  )
}

export default Navbar