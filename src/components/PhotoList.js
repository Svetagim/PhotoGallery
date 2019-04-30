import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import PhotoItem from './PhotoItem';
import { connect } from 'react-redux'
import photoAction from '../actions/photoAction'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({ photoReducer }) => { //obj contains one or few reducers (root reducer)
  return { data : photoReducer.data }
};


class PhotoList extends Component {
  componentDidMount() {
    const { data } = this.props
  }
  render() {
    return (

      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>text:{ JSON.stringify(this.props) }</Text>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
                rose, flower, petal
                </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
                </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              sunflower, nature, flora

              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              spring bird, bird, tit
              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
              Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              sunflower, vase, vintage
              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              yellow, natural, flower
              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              rose, flower, petal
              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              sunflower, nature, flora
              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              spring bird, bird, tit

              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflower-3292932_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              sunflower, vase, vintage

              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
            </View>
          </View>
          <View style={containerStyle.rowContainer}>
            <PhotoItem url="https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg" wid={70} />
            <View style={containerStyle.colContainer}>
              <Text style={{ marginLeft: '8%', fontSize: 20, fontWeight: 'bold' }}>
              yellow, natural, flower

              </Text>
              <Text style={{ marginLeft: '8%', marginTop: 14, fontSize: 18 }}>
                  Views: 2    Likes: 9
              </Text>
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
    marginLeft: '5%',
  },
  colContainer: {
    flexDirection: 'column',
  },
});


PhotoList.propTypes = {
  value: PropTypes.string
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(PhotoList)
