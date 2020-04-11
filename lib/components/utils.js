import { getSongsFromPlaylist } from '@/services/spotify';
import { constants, STRINGS } from '@/resources';
import { Alert } from 'react-native';

const isValidPlaylist = songs => {
  return songs.tracksWithPreview >= constants.MIN_SONGS_TO_PLAY;
};

export const handlePlaylistSelection = async (token, id, setSongs) => {
  const response = JSON.parse(await getSongsFromPlaylist(token, id));
  if (isValidPlaylist(response)){
    setSongs(formatSongs(response.tracks))
  } else {
    Alert.alert(
      STRINGS.playlistCantBeUsedTitle,
      STRINGS.playlistCantBeUsedBody,
    );
  }
}

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = ~~(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
/*
  # TODO: Consider moving this computation to BE
  Expected output:
  [
    {
      id: 'abc',
      name: 'efg',
      ...
      options: [6, 7, 0, 13] <-- Three random unique indices and one correct index
    },
    ...
  ]
*/
export const formatSongs = songs => {
  const shuffledSongs = shuffle(songs);
  for (let i = 0; i < shuffledSongs.length; i++) {
    const arr = [];
    const correctIndex = ~~(Math.random() * 3);
    while (arr.length < 4) {
      if (correctIndex == arr.length) {
        arr.push(i);
        continue;
      }
      const randNum = ~~(Math.random() * shuffledSongs.length);
      if (arr.indexOf(randNum) === -1 && randNum != correctIndex) {
        arr.push(randNum);
      }
    }
    shuffledSongs[i].options = arr;
  }
  return shuffledSongs;
};
