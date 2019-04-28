import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PhotoItem from './PhotoItem';

export default class PhotoGrid extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={containerStyle.rowContainer}>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg" wid={100} />
          </View>
          </View>
        <View style={containerStyle.rowContainer}>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg" wid={100} />
          </View>
          </View>
        <View style={containerStyle.rowContainer}>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg" wid={100} />
          </View>
            <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg" wid={100} />
          </View>
          </View>
        <View style={containerStyle.rowContainer}>
          <View style={containerStyle.colContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg" wid={100} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    // paddingVertical: 5
  },
});

const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#ffffff',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  colContainer: {
    marginLeft: 18,
  },
});
