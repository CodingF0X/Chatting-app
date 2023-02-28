import React from 'react'
import ChatBox from '../Components/ChatBox'
import Conversations from '../Components/Conversations'
import { Box, Divider } from '@mui/material'
import { Container } from '@mui/system'

const ChatPage = () => {
  return (
  
    <Box display={'flex'} flexDirection='row' m={2}>
      <Box ml={1} flexBasis='80%'><ChatBox/></Box>
      <Box><Conversations/></Box>
    </Box>
    
  )
}

export default ChatPage