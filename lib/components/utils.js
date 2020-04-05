import { getSongsFromPlaylist } from '@/services/spotify';
import { constants } from '@/resources';
import { Alert } from 'react-native';

const isValidPlaylist = songs => {
  return songs.tracksWithPreview >= constants.MIN_SONGS_TO_PLAY;
};

export const handlePlaylistSelection = async (token, id, setSongs) => {
  const response = JSON.parse(await getSongsFromPlaylist(token, id));
  if (isValidPlaylist(response)){
    setSongs(response)
  } else {
    Alert.alert(
      `This playlist doesn't have enough playable songs... :(`,
      'Artist(s) in this playlist may not allow samples of their music to be played',
    );
  }
}