import {API_KEY_CATS} from '../constants';

type AddFavoritesProps = {
  catId?: string | number;
}

export const getListOfFavouritesCats = () => {
  const response = fetch('https://api.thecatapi.com/v1/favourites', {
    headers: {
      'x-api-key': API_KEY_CATS,
    },
  }).then((response) => response.json());
  return response;
};

export const AddFavorites = ({catId}: AddFavoritesProps) => {
  const rawBody = JSON.stringify({
    image_id: catId,
    sub_id: 'user-cat',
  });

  fetch('https://api.thecatapi.com/v1/favourites', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY_CATS,
      'Content-Type': 'application/json',
    },
    body: rawBody,
  });
};

export const deleteFavorites = ({catId}: any) => {
  fetch(`https://api.thecatapi.com/v1/favourites/${catId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY_CATS,
    },
  });
};
