import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default ({ size, onPress, color }) => (
  <Icon
    name="arrow-left"
    size={size || 16}
    onPress={onPress}
    color={color || "black"}
  />
);

