import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getListOfCats} from '../../Services/home';
import {Wrapper} from '../../Components/Wrapper';

import { ListOfCats } from '../../Components/ListOfCats';

type QuerieProps = any;

export const Home: any = () => {
  const [disableRefetching, seDisableRefetching] = useState(true);

  const {
    data = [],
    isSuccess,
    isFetching,
  } = useQuery<QuerieProps>(['cats'], getListOfCats, {
    enabled: disableRefetching,
  });



  useEffect(() => {
    if (isSuccess) {
      seDisableRefetching(false);
    }
  }, [isSuccess, seDisableRefetching]);

  return (
    <Wrapper>
      <ListOfCats data={data} isFetching={isFetching} />
    </Wrapper>
  );
};
