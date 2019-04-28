import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class PhotoItem extends Component {
  render() {
    return (
    <View>
      <Image
          style={{ width: this.props.wid, height: this.props.wid }}
          source={{ uri: this.props.url }}
        />
    </View>
    );
  }
}