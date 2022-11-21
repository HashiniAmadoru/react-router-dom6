import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Order() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Order Confirmed !</h1>
        <Button onClick={() => navigate('/')} variant="contained" startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
    </div>
  )
}

export default Order