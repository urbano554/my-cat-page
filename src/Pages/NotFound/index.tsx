import {Box, Text} from '@chakra-ui/react';
import React from 'react';


export const NotFound = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      textAlign='center'
      
    >
      <Text>404</Text>
      <Text>Lo sentimos esta ruta no existe 😿</Text>
    </Box>
  );
};
