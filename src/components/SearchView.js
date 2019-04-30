import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import PhotoList from './PhotoList';
import PhotoGrid from './PhotoGrid';
import { connect } from 'react-redux'
import viewActions from '../actions/ViewAction'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({ viewReducer }) => { //obj contains one or few reducers (root reducer)
    return { searchViewNum : viewReducer.searchViewNum };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        viewActions: bindActionCreators(viewActions, dispatch)
      }
    }
  }

class SearchView extends Component {
  constructor (props) {
    super(props)
  this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    const { handleChangeView } = this.props.actions.viewActions
    handleChangeView(selectedIndex)
  }

  render() {
    const  { searchViewNum } = this.props;
    return (

      <View>
          <SearchBar
            placeholder="Type Here..."
            //onChangeText={this.updateSearch}
            // value={search}
          /> 
        <ButtonGroup
            onPress = { this.updateIndex }
            selectedIndex =  { searchViewNum }
            buttons= {['Grid View','List View']}
          containerStyle={{height: 40 }}  
          />
          <Text>text:{ JSON.stringify(this.props) }</Text>
         { searchViewNum ? <PhotoList /> : <PhotoGrid /> }
      </View>
    );
  }
}

SearchView.propTypes = {
  searchViewNum: PropTypes.number
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView)
