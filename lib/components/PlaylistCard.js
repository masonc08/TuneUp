import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const PlaylistCard = ({ id, href, img, name }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{uri: img}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: '100%',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  textContainer: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'gold',
    fontWeight: 'bold',
  },
});

export default PlaylistCard;