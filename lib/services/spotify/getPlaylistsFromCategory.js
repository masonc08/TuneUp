import { ENV } from '~/config';


const getPlaylistsFromCategory = async (token, id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    const response = await fetch(ENV + "v1/spotify/get_playlists_from_category?key=" + token + 
    "&id=" + id, requestOptions)
    return response.json();
  } catch (e) {
    console.log('Failed to get playlists: ', e);
  }
}

export { getPlaylistsFromCategory };