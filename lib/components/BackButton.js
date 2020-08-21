import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '@/resources';


export default ({ size, onPress, color }) => (
  <Icon
    name="arrow-left"
    size={size || 16}
    onPress={onPress}
    color={color || COLORS.black}
  />
);

