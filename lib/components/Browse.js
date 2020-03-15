import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getCategories } from '@/services/spotify';
import { PlaylistCard } from './';


const Browse = ({token}) => {
  const [categories, setCategories] = useState([])
	useEffect(() => {
    token && getCategories(token, setCategories);
  }, [token]);
  const playlistCards = categories.map(category =>
    <PlaylistCard
      key={category.id}
      href={category.href}
      img={category.icons[0].url}
      name={category.name}
    />
  );
  return playlistCards;
}

export default Browse;