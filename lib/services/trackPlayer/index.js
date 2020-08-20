import TrackPlayer from 'react-native-track-player';


export default class TrackPlayerService {
  setUp = async (songs, setCurrentSong) => {
    this.songs = songs;
    this.setDisplay = setCurrentSong;
    TrackPlayer.reset();
    await TrackPlayer.setupPlayer();
    this.generator = this.handlePlayAndDisplayNext();
    TrackPlayer.play();
  };

  playAndDisplayNext = () => {
    this.generator.next();
  }

  async *handlePlayAndDisplayNext() {
    for (const song of this.songs) {
      TrackPlayer.reset();
      this.setDisplay([
        this.songs[song.options[0]].name,
        this.songs[song.options[1]].name,
        this.songs[song.options[2]].name,
        this.songs[song.options[3]].name,
        song.name
      ]);
      await TrackPlayer.add({
        id: song.id,
        url: song.preview_url,
        title: song.name,
        artist: ''
      });
      TrackPlayer.play();
      yield;
    }
  }

  addAllSongs = async () => {
    const tracks = []
    for (const song of this.songs) {
      tracks.push({
        id: song.id,
        url: song.preview_url,
        title: song.name,
        artist: ''
      });
    }
    await TrackPlayer.add(tracks);
  };
}