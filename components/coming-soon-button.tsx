import { Box, Button } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

import React from 'react'

const slideAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const GoldButton = () => {
  //   const ButtonComponent = href ? 'a' : 'button'

  return (
    <Button
      //   as={ButtonComponent}
      //   href={href}
      height={'40px'}
      width={'40px'}
      color="#000000"
      fontWeight="bold"
      p="12px 20px"
      borderRadius="8px"
      m="5px"
      borderWidth="0"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      textDecoration="none"
      position="relative"
      overflow="hidden"
      flex="1"
      transition="all 0.5s ease"
      bgGradient="linear(180deg, #f6e27a 20%, #cb9b51 80%)"
      boxShadow="0 4px 12px 0 #ffcd57"
      //   {...props}
    >
      <Box as="span" position="relative" zIndex="1">
        {/* {children} */}
      </Box>

      {/* Shine effect */}
      <Box
        position="absolute"
        top="0"
        width="100%"
        height="220px"
        zIndex="0"
        transform="translateX(100%)"
        animation={`${slideAnimation} 2s infinite`}
        bgGradient="linear(to-r, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%)"
        sx={{
          _after: {
            content: '""',
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
          },
        }}
      />
    </Button>
  )
}
