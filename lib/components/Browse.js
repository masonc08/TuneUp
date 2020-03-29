import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getCategories, getPlaylists } from '@/services/spotify';
import { STRINGS } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";


const Browse = ({ token, setSongs }) => {
  const [selectedCategory, setSelectedCateogry] = useState('');
  const [categories, setCategories] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    token && getPlaylists(token, selectedCategory, setPlaylists);
  }, [selectedCategory]);
	useEffect(() => {
    token && getCategories(token, setCategories);
  }, [token]);
  const renderCard = ({item, index}) => (
    <PlaylistCard
      key={index}
      id={item.id}
      href={item.href}
      img={item.icons[0].url}
      name={item.name}
      setSelectedCateogry={setSelectedCateogry}
    />
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{STRINGS.browseTitle}</Text>
        </View>
        <Carousel
          data={playlists && categories}
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