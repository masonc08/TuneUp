import { ENV } from '~/config';


const getCategories = (token, setCategories) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(ENV + "v1/spotify/get_categories?key=" + token, requestOptions)
    .then(response => response.text())
    .then(result => {
      const items = JSON.parse(result).categories.items;
      setCategories(items);
    })
    .catch(error => console.log('Failed to get categories: ', error));
};

export { getCategories };