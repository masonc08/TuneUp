import TrackPlayer from 'react-native-track-player';


export default class TrackPlayerService {
  constructor() {
    TrackPlayer.setupPlayer();
  }
  setUp = (songs, setCurrentSong) => {
    this.songs = songs;
    this.setDisplay = setCurrentSong;
    TrackPlayer.reset();
    this.generator = this.handlePlayAndDisplayNext();
    TrackPlayer.play();
  };

  setUpListeners = (songEndListener) => {
    TrackPlayer.addEventListener('playback-queue-ended', songEndListener);
  }

  playAndDisplayNext = async () => {
    await this.generator.next();
  }

  getTimeLeft = async () => {
    const currentTime = await TrackPlayer.getPosition();
    return Math.round(30 - currentTime);
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
        duration: 30,
        title: 'Game Track',
        artist: 'TuneUp'
      });
      TrackPlayer.play();
      yield;
    }
  }
}