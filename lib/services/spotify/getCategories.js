import { ENV } from '~/config';


const getCategories = (token, setCategories) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(ENV + "v1/spotify/get_categories?key=" + token, requestOptions)
    .then(response => response.json())
    .then(result => {
      const items = result.categories.items;
      setCategories(items);
    })
    .catch(error => console.log('Failed to get categories: ', error));
};

export { getCategories };