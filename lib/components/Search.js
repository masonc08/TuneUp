import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { searchPlaylists, getSongsFromPlaylist } from '@/services/spotify';
import { STRINGS, constants } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";


const isValidPlaylist = songs => {
  return songs.tracksWithPreview >= constants.MIN_SONGS_TO_PLAY;
};

const Search = ({ token, setSongs }) => {
  const [results, setResults] = useState([]);
  const [value, onChangeText] = useState('');
  const handlePress = async id => {
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
  const renderCard = ({item, index}) => (
    <PlaylistCard
      key={index}
      id={item.id}
      img={item.image}
      name={item.name}
      onPress={handlePress}
    />
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{STRINGS.searchTitle}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Search'}
              onSubmitEditing={() => searchPlaylists(token, value, setResults)}
              clearButtonMode={'while-editing'}
              autoCorrect={false}
            />
          </View>
        </View>
        <Carousel
          data={results}
          renderItem={renderCard}
          layout={'stack'}
          sliderWidth={screenWidth}
          itemWidth={screenWidth/2}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  textInputStyle: {
    height: 40,
    color: 'black',
    marginLeft: 25,
  },
  textInputContainer: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: '#bfbfbf',
    borderWidth: 3,
  },
});

export default Search;