import React from 'react';
import { Text } from 'react-native';


const PlaylistCard = ({ key, href, img, name }) => {
    return (
        <Text>{name}</Text>
    );
};

export default PlaylistCard;