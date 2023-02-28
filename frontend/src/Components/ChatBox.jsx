import { AppBar, Avatar, Box, Button, Divider, IconButton, InputBase, TextareaAutosize, TextField, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { VideoCall, Call } from '@mui/icons-material'
import React from 'react'

const ChatBox = ({own =false}) => {
  return (
    <Box display={'flex'} flexDirection='column' gap={10} >
    <Stack  maxWidth='95%'  >

            <Toolbar sx={{
                color:'white',
                background:'violet',
                borderRadius:'10px',
                display:'flex',
                flexDirection:'row',
                alignItems:'center'
            }}>
                    <Typography >Reciver's Name</Typography>
                
                  <Box ml={105}>
                    <IconButton>
                        <VideoCall/>
                    </IconButton>

                    <IconButton>
                        <Call/>
                    </IconButton>
                  </Box>
            </Toolbar>

        {own ? 
        (
          <Box display={'flex'} flexDirection={'column'} alignItems='flex-end'>
                <Box display={'flex'} alignItems={'center'} mt={2} ml={2} gap={1}>
            <Typography sx={{
                backgroundColor:'violet',
                borderRadius:'15px',
                padding:'10px',
                maxWidth:'500px',
               
            }}>lorem sss ajskd askdj asdkj askjd aksld lasd lsad ald lasd salasd ak dkfakdkfafad </Typography>
                        <Avatar alt="Remy Sharp" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />

            </Box>
            <Typography mr={7}>1hr ago</Typography>
          </Box>
        )
        :
        (
            <Box>
                <Box display={'flex'} alignItems={'center'} mt={2} ml={2} gap={1}>
            <Avatar alt="Remy Sharp" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
            <Typography sx={{
                backgroundColor:'violet',
                borderRadius:'15px',
                padding:'10px',
                maxWidth:'500px',
               
            }}>lorem sss ajskd askdj asdkj askjd aksld lasd lsad ald lasd salasd ak dkfakdkfafad </Typography>
            
        </Box>
        <Typography ml={9}>1hr ago</Typography>
            </Box>
        )
        }

    
        
    </Stack>
        <Box display={'flex'} alignItems='center' gap={1}>
            <TextField
            size='medium'
            multiline
            label='write sth...'
            sx={{
                width:'50%',
                maxWidth:'30%'
            }}
            >
            </TextField>
            <Button variant='contained' color='secondary'>Send</Button>
        </Box>
    </Box>
  )
}

export default ChatBox