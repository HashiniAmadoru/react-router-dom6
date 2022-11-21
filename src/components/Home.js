import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => navigate('Order', {replace: true})} variant="contained" endIcon={<SendIcon />}>
      Place Order
      </Button>
    </div>
  )
}

export default Home
