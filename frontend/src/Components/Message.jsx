import React from 'react'

const Message = ({own}) => {
  return (
    <div>

      
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

    

    </div>
  )
}

export default Message