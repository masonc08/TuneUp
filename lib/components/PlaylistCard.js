import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '@/resources';


const PlaylistCard = ({ id, img, name, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPress(id)}  
    >
      <Image
        style={styles.image}
        source={{uri: img}}
      />
      <View style={styles.textContainer}>
        <Text
          style={styles.textStyle}
          numberOfLines={2}
          ellipsizeMode={'tail'}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
    borderColor: COLORS.brown,
    borderWidth: 5,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  textContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: COLORS.gold,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlaylistCard;