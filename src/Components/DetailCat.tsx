import {Box, Image, Text} from '@chakra-ui/react';
import {useQuery} from '@tanstack/react-query';
import {getDetailCat} from '../Services/home';
import Loader from './Loader';

type DetailCatProps = {
  detailId: string | number | undefined;
};

const DetailCat = ({detailId}: DetailCatProps) => {
  const {data = [], isFetching} = useQuery(['Cat-detailId'], () =>
    getDetailCat({catId: detailId})
  );

  console.log(detailId);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          maxW={{sm: '90%', md: '60%', lg: '60%', xl: '60%'}}
          margin={'0 auto'}
          marginTop={'3%'}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          textAlign='center'
        >
          <Image src={data.url} width="100%" height={200} />
          <Box>
            <Text>
              <strong>Categoría:</strong>{' '}
              {data?.categories?.name || 'desconocida'}
            </Text>
            <Text>
              <strong>ID:</strong> {data?.id}
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailCat;
