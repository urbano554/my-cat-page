import {Box, SimpleGrid, Spinner, Text} from '@chakra-ui/react';
import React, {Dispatch, Fragment, useEffect, useState} from 'react';
import {routes} from '../Pages/Routes';
import {EMPTY_LIST} from '../Common/constants';
import {CatCard} from './CatCard';
import Loader from './Loader';

type Props = {
  data: [];
  setDisableRefetching?: Dispatch<boolean>;
  isFetching?: boolean;
  isSucces?: boolean;
};

type CatTypes = {
  id: string;
  url: string;
  newId: string | number;
  image: {
    id?: string | number;
    url?: string;
  };
};

export const ListOfCats: React.FC<Props> = ({
  data = [],
  setDisableRefetching = () => {},
  isFetching = false,
}) => {
  const CURRENT_PATHNAME = window.location.pathname;
  const [emptyLabel, setEmptyLabel] = useState(EMPTY_LIST.home);

  useEffect(() => {
    if (CURRENT_PATHNAME === routes.favorites) {
      setEmptyLabel(EMPTY_LIST.favorites);
    }
  }, [setEmptyLabel, CURRENT_PATHNAME]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} gap={6} width='80%' margin='0 auto'>
            {data?.map((cat: CatTypes) => {
              return (
                <Fragment key={cat.id}>
                  <CatCard
                    url={cat.url || cat.image?.url}
                    id={cat?.id}
                    newId={cat?.image?.id}
                    setDisableRefetching={setDisableRefetching}
                  />
                </Fragment>
              );
            })}
          </SimpleGrid>
          {data?.length === 0 && <Text textAlign='center'>{emptyLabel}</Text>}
        </>
      )}
    </>
  );
};
