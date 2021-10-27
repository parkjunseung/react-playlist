import React from 'react';
import "./styles.css";
import Search from './components/Search';
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Googlebutton from './components/Googlebutton';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const GridContainer  = styled.div`
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 15% auto;
  position: relative;
`;

const SideBar = styled.div`
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-rows: 1fr 2fr;
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
      <>
        <GlobalStyle />
        <GridContainer className='App'>
          <SideBar>
            <Search onSearch={this.onSearch}></Search>
            <Googlebutton/> 
          </SideBar>
          <VideoList onVideoSelected={this.onVideoSelected}
          data={this.state.videoMataInfo}/>
          {/* <VideoPlayer videoId={this.state.selectedVideoId}/> */}
        </GridContainer>
      </>
    )
  }
}