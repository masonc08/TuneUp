import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { searchPlaylists } from '@/services/spotify';
import { STRINGS } from '@/resources';
import { PlaylistCard } from './';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";


const Search = ({ token }) => {
  const [results, setResults] = useState([]);
  const [value, onChangeText] = useState('');
  const renderCard = ({item, index}) => (
    <PlaylistCard
      key={index}
      href={item.href}
      img={item.image}
      name={item.name}
    />
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{STRINGS.browseTitle}</Text>
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