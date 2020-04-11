import TrackPlayer from 'react-native-track-player';


export default class TrackPlayerService {
  setUp = async () => {
    await TrackPlayer.setupPlayer();
  };

  /*
    param: { name, id, url }
  */
  add = async song => {
    const track = {
      id: song.id,
      url: song.preview_url,
      title: song.name,
      artist: ''
    };
    console.log(track)
    await TrackPlayer.add(track);
    TrackPlayer.play();
  };
}