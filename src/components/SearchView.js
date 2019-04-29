import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import PhotoList from './PhotoList';
import PhotoGrid from './PhotoGrid';
import { connect } from 'react-redux'
import actions from '../actions/ViewAction'
import PropTypes from 'prop-types'


const mapStateToProps = ({ viewReducer }) => { //obj contains one or few redusers (root reducer)
    return { searchViewNum : viewReducer.searchViewNum };
  }



export default class SearchView extends Component {
  //searchViewNum = 0

  render() {
    const { searchViewNum } = this.props;
    return (

      <View>
          <SearchBar
            placeholder="Type Here..."
            //onChangeText={this.updateSearch}
            // value={search}
          /> 
        <ButtonGroup
            // onPress = { updateIndex }
            // updateIndex (selectedIndex) {
            //   this.setState({selectedIndex})
            // }
            selectedIndex = { searchViewNum }
            // buttons={buttons}
            buttons= {['Grid View','List View']}
          containerStyle={{height: 40 }}  
          />
          <Text>text:{searchViewNum}</Text>
         { searchViewNum ? <PhotoList /> : <PhotoGrid /> }
      </View>
    );
  }
}

// SearchView.propTypes = {
//   searchViewNum: PropTypes.number
// }

// export default connect(
//   mapStateToProps,
//   actions
// )(SearchView)
