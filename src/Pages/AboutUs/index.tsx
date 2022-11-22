import React from 'react';
import {
  Stack,
  Box,
  Heading,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react';
import {Wrapper} from '../../Components/Wrapper';

type FeatureProps = {
  title: string;
  desc: string;
  avatar?: boolean;
  catApiLink?: boolean;
  avatarUrl?: string;
};

export const AboutUs = () => {
  const Feature = ({
    title,
    desc,
    avatar = false,
    avatarUrl,
    catApiLink = false,
    ...rest
  }: FeatureProps) => {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Box display='flex' flexDirection='row' alignItems='center'>
          {avatar && (
            <Wrap>
              <WrapItem>
                <Avatar name='Luis Urbano' src={avatarUrl} marginRight={4} />
              </WrapItem>
            </Wrap>
          )}
          <Heading fontSize='xl'>{title}</Heading>
        </Box>
        <Text mt={4}>
          {desc}{' '}
          {catApiLink && (
            <Link href='https://thecatapi.com/' target='_blank'>
              TheCatApi
            </Link>
          )}
        </Text>
      </Box>
    );
  };

  return (
    <Wrapper>
      <Stack spacing={8} direction='column'>
        <Feature
          catApiLink
          title='Sobre la Página'
          desc={
            'Es una página de gatitos que te permite ver, añadir y eliminar los gatitos que hay en la API gratuita'
          }
        />
        <Feature
          title='Tecnologías utilizadas en este proyecto | Tiempo de desarrollo'
          desc='React - React Query - Chakra UI - TypeScript | 3 días'
        />
        <Feature
          avatar
          avatarUrl='/home/luis/Descargas/AvatarLuis.jpg'
          title='¿Quien soy?'
          desc='Luis Manuel Urbano Pernalete, un desarrollador web con amplia experiencia en el área.'
        />
      </Stack>
    </Wrapper>
  );
};
