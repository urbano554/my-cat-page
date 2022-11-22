import {API_KEY_CATS} from '../constants';

type GetDetailCatProps = {
  catId?: string | number;
}

export const getListOfCats = () => {
  const response = fetch(
    'https://api.thecatapi.com/v1/images/search?limit=20',
    {
      headers: {
        'x-api-key': API_KEY_CATS,
      },
    }
  ).then((response) => response.json());
  return response;
};

export const getDetailCat = ({catId}: GetDetailCatProps) => {
  const response = fetch(`https://api.thecatapi.com/v1/images/${catId}`, {
    headers: {
      'x-api-key': API_KEY_CATS,
    },
  }).then((response) => response.json());
  return response;
};
