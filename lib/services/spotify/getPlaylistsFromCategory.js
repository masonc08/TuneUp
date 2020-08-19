import { ENV } from '~/config';


const getPlaylistsFromCategory = async (token, id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const response = await fetch(ENV + "v1/spotify/get_playlists_from_category?key=" + token + 
  "&id=" + id, requestOptions)
  console.log(response)
  if (response.ok) {
    return response.json();
  }
  throw response.status;
}

export { getPlaylistsFromCategory };