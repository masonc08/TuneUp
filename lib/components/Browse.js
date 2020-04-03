import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getCategories, getPlaylistsFromCategory } from '@/services/spotify';
import { STRINGS } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";


const Browse = ({ token, setSongs }) => {
  const [categories, setCategories] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState('categories');
  const [playlists, setPlaylists] = useState([]);
	useEffect(() => {
    token && getCategories(token, setCategories);
  }, [token]);
  const handlePress = id => {
    if (currentDisplay === 'categories') {
      getPlaylistsFromCategory(token, id, setPlaylists);
      setCurrentDisplay('playlists');
    } else if (currentDisplay === 'playlists') {

    }
  };
  const renderCard = ({item, index}) => (
    <PlaylistCard
      key={index}
      id={item.id}
      href={item.href}
      img={item.icons[0].url}
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
          data={categories}
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