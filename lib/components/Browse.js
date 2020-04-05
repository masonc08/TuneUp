import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getCategories, getPlaylistsFromCategory } from '@/services/spotify';
import { STRINGS } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { handlePlaylistSelection } from './utils';
import { Dimensions } from "react-native";


const Browse = ({ token, setSongs }) => {
  const [categories, setCategories] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState('categories');
  const [playlists, setPlaylists] = useState(null);
	useEffect(() => {
    token && getCategories(token, setCategories);
  }, [token]);
  const handlePress = async id => {
    if (currentDisplay === 'categories') {
      const response = await getPlaylistsFromCategory(token, id);
      const responseJSON = JSON.parse(response);
      setPlaylists(responseJSON.playlists);
      setCurrentDisplay('playlists');
    } else if (currentDisplay === 'playlists') {
      handlePlaylistSelection(token, id, setSongs);
    }
  };
  const renderCard = ({item, index}) => (
    <PlaylistCard
      key={index}
      id={item.id}
      img={item.image || item.icons[0].url}
      name={item.name}
      onPress={handlePress}
    />
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{STRINGS.browseTitle}</Text>
        </View>
        <Carousel
          data={playlists || categories}
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
    margin: 10,
  },
});

export default Browse;