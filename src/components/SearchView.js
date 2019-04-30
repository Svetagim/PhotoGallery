import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PhotoList from './PhotoList';
import PhotoGrid from './PhotoGrid';
import viewActions from '../actions/ViewAction'
import photoActions from '../actions/photoAction'

const mapStateToProps = ({ viewReducer }) => { //obj contains one or few reducers (root reducer)
    return { searchViewNum : viewReducer.searchViewNum };
  }

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        viewActions: bindActionCreators(viewActions, dispatch),
        photoActions: bindActionCreators(photoActions, dispatch)
      }
    }
  }

class SearchView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
    }
  this.updateIndex = this.updateIndex.bind(this)
  this.updateSearch = this.updateSearch.bind(this)
  this.handleSubmittion = this.handleSubmittion.bind(this)
  }
  updateIndex(selectedIndex) {
    const { handleChangeView } = this.props.actions.viewActions
    handleChangeView(selectedIndex)
  }
  updateSearch(search) {
    this.setState({ search })
  };
  handleSubmittion() {
    const { handleSearchPhoto } = this.props.actions.photoActions
    handleSearchPhoto(this.state.search)
  };

  render() {
    const  { searchViewNum } = this.props;
    return (

      <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            onSubmitEditing={this.handleSubmittion}
            value={this.state.search}
          /> 
          <ButtonGroup
            onPress = { this.updateIndex }
            selectedIndex =  { searchViewNum }
            buttons= {['Grid View','List View']}
          containerStyle={{height: 40 }}  
          />
         { searchViewNum ? <PhotoList /> : <PhotoGrid /> }
      </View>
    );
  }
}

SearchView.propTypes = {
  searchViewNum: PropTypes.number,
  search: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView)
