import { fetchApi } from '../utils/api';

export const getProducts = () => fetchApi({
  path: 'pokemon',
});

export const getProductById = ({ queryKey }) => {
  const [, { productId }] = queryKey;
  return fetchApi({
    path: `pokemon/${productId}`,
  });
};
