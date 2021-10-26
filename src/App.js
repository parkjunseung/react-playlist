import React from 'react';
import "./styles.css";
import Search from './components/Search';
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Googlebutton from './components/Googlebutton';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-template-rows: 70px auto;
`;

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
      <StyledDiv className='App'>
        <Search onSearch={this.onSearch}/>
        <VideoList onVideoSelected={this.onVideoSelected}
        data={this.state.videoMataInfo}/>
        <VideoPlayer videoId={this.state.selectedVideoId}/>
        <Googlebutton/>
      </StyledDiv>
    )
  }
}