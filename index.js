/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import Service from '@/services/trackPlayer/service';


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => Service);