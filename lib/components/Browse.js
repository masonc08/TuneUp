import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getCategories } from '@/services/spotify';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";


const Browse = ({token}) => {
  const [categories, setCategories] = useState([])
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
    />
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <>
      <View style={styles.container}>
        <Carousel
          data={categories}
          renderItem={renderCard}
          layout={'stack'}
          sliderWidth={screenWidth}
          itemWidth={screenWidth/3}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default Browse;