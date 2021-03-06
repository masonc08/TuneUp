import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { searchPlaylists } from '@/services/spotify';
import { STRINGS, COLORS } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { handlePlaylistSelection } from './utils';
import { Dimensions } from "react-native";


const Search = ({ token, setSongs }) => {
  const [results, setResults] = useState([]);
  const [value, onChangeText] = useState('');
  const handlePress = (id, playlistName) => {
    handlePlaylistSelection(token, id, playlistName, setSongs);
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
          <Text style={styles.textStyle}>{STRINGS.searchTitle}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={STRINGS.searchBarPlaceholder}
              placeholderTextColor={COLORS.grey}
              onSubmitEditing={() => searchPlaylists(token, value, setResults)}
              clearButtonMode={'while-editing'}
              autoCorrect={false}
            />
          </View>
        </View>
        <Carousel
          data={results}
          renderItem={renderCard}
          layout={'default'}
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
    color: COLORS.grey,
    fontSize: 16,
    paddingVertical: 0
  },
  textInputContainer: {
    marginVertical: 10,
    borderBottomColor: COLORS.mainBlue,
    borderBottomWidth: 3,
    marginHorizontal: 20
  },
  textStyle: {
    fontWeight: 'bold',
    color: COLORS.white
  }
});

export default Search;