import {Box} from '@chakra-ui/react';
import React from 'react';

type Props = {
  children?: any;
};

export const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <>
      <Box
        p={8}
        maxW='1000px'
        flex={1}
        w='full'
        mx='auto'
        my={{base: 0, '2xl': 6}}
        borderRadius='md'
      >
        {children}
      </Box>
    </>
  );
};
