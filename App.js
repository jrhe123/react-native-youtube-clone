import React, { Component } from 'react';
import { 
  View,
} from 'react-native';

// libraries
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';
import VideoList from './components/VideoList';

// API KEY
const API_KEY = 'AIzaSyDA4v_t_ra4IctMjCdnrduOnrls4XtUnLM';


export default class App extends Component {

  state = {
    loading: false,
    videos: [],
  }

  componentWillMount(){
    this.searchYT('Kobe Bryant');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({
      loading: true
    })
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        loading: false,
        videos
      })
    });
  }

  render() {

    const { loading, videos } = this.state;

    return (
      <View style={{flex:1, backgroundColor: '#ddd'}}>

        <AppHeader 
          headerText="Youtube Video"
        />

        <SearchBar 
          onPressSearch={this.onPressSearch}
          loading={loading}
        />

        <VideoList 
          videos={videos}
        />

      </View>
    );
  }
}

