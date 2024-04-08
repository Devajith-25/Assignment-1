import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>Blog app</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant='contained'color='success'><Link to={'home'} style={{"textDecoration":"none","color":"white"}}>Home</Link></Button>&nbsp;&nbsp;
                <Button variant='contained'color='error'><Link to={'form'} style={{"textDecoration":"none","color":"white"}}>Add Blog</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav