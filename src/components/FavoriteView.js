/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default class FavoriteView extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 340, height: 340, marginVertical: 40, marginHorizontal: '5%',
          }}
          source={{ uri: 'https://pixabay.com/get/eb37b80a2cf7053ed1584d05fb1d4794e17febdd1db30c4090f5c77da7e9b7b1df_640.jpg' }}
        />
        <View style={{ marginHorizontal: '38%' }}>
          <Icon
            raised
            name="heart"
            type="font-awesome"
            color="red"
          />
        </View>
      </View>
    );
  }
}
