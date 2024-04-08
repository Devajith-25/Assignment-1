import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{"paddingTop":"90px"}}>
        <Typography variant='h5'>Add Blog Form</Typography><br/><br/><br/>
        <TextField label="Blog Name" variant='standard'/><br/><br/><br/>
        <TextField label="Description" variant='standard'/><br/><br/><br/>
        <TextField label="Author" variant='standard'/><br/><br/><br/>
        <Button variant='outlined' color='success'>Submit</Button>

    </div>
  )
}

export default Form