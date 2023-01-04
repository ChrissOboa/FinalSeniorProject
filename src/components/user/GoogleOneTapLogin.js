import { Button } from '@mui/material'
import React from 'react'
import { Google } from '@mui/icons-material'

const GoogleOneTapLogin = () => {
  return (
    <Button 
    variant= 'outlLined'
    startIcon={<Google />}>
        Login with Google
    </Button>
  )
}

export default GoogleOneTapLogin