import React from 'react';
import "./styles.css";
import Search from './components/Search';
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

export default class App extends React.Component {

  state = {
    videoMataInfo:[],
    selectedVideoId:null
  }

  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId:videoId
    })
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search",{
      params: {
        q:keyword
      }
    })

    // 체크
    // console.log(response)

    this.setState({
      videoMataInfo:response.data.items,
      selectedVideoId:response.data.items[0].id.videoId
    })

    console.log(this.state)
  }

  render () {
    return (
      <div className='App'>
        <Search onSearch={this.onSearch}/>
        <VideoList onVideoSelected={this.onVideoSelected}
        data={this.state.videoMataInfo}/>
        <VideoPlayer videoId={this.state.selectedVideoId}/>
      </div>
    )
  }
}