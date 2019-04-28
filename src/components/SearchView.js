import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import PhotoList from './PhotoList';
import PhotoGrid from './PhotoGrid';
// import { connect } from 'react-redux'
// import actions from '../actions/ViewAction'
// import PropTypes from 'prop-types'


// const mapStateToProps = ({ todo, user }) => {
//   return {
//     viewNum: viewNum
//   }
// }

export default class SearchView extends Component {
  searchViewNum = 0

  render() {
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
            selectedIndex = { this.searchViewNum }
            // buttons={buttons}
            buttons= {['Grid View','List View']}
          containerStyle={{height: 40 }}  
          />
         { this.searchViewNum ? <PhotoList /> : <PhotoGrid /> }
         
      </View>
    );
  }
}

// SearchView.propTypes = {
//   changeView: viewNum
// }

// export default connect(
//   mapStateToProps,
//   actions
// )(SearchView)
