import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getCategories, getPlaylistsFromCategory } from '@/services/spotify';
import { STRINGS } from '@/resources';
import { PlaylistCard } from './';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import { handlePlaylistSelection } from './utils';
import { Dimensions } from "react-native";


const Browse = ({ token, setSongs }) => {
  const [categories, setCategories] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState('categories');
  const [playlists, setPlaylists] = useState(null);
	useEffect(() => {
    token && getCategories(token, setCategories);
  }, [token])
  let carouselRef = useRef(null);
  const handlePress = async id => {
    if (currentDisplay === 'categories') {
      const response = await getPlaylistsFromCategory(token, id);
      setPlaylists(response.playlists);
      carouselRef.current.snapToItem(0)
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
  const returnToCategories = () => {
    setPlaylists(null);
    carouselRef.current.snapToItem(0)
    setCurrentDisplay('categories');
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{STRINGS.browseTitle}</Text>
          { currentDisplay == 'playlists' ? <Icon name="undo" size={16} onPress={returnToCategories}/> : null }
        </View>
        <Carousel
          ref={c => carouselRef.current = c}
          data={playlists || categories}
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
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default Browse;