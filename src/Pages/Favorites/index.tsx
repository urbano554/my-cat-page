import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ListOfCats} from '../../Components/ListOfCats';
import {Wrapper} from '../../Components/Wrapper';
import {getListOfFavouritesCats} from '../../Services/favorites';

export const Favorites = () => {
  const [disableRefetching, setDisableRefetching] = useState(true);

  const {
    data = [],
    status,
    isFetching,
    isSuccess,
  } = useQuery(['favoritesCats'], getListOfFavouritesCats, {
    enabled: disableRefetching,
  });

  useEffect(() => {
    if (status === 'success') {
      setDisableRefetching(false);
    }
  }, [status, setDisableRefetching]);

  return (
    <Wrapper>
      <ListOfCats
        data={data}
        isSucces={isSuccess}
        isFetching={isFetching}
        setDisableRefetching={setDisableRefetching}
      />
    </Wrapper>
  );
};
