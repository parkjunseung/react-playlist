import React from "react";
import styled from 'styled-components';


const StyledBackground = styled.div`
    width: 100%;
    height: 95vh;
    background: #eeeeee;
    display: grid;
    grid-template-rows: 50px auto 1fr;
`;
const StyledDiv = styled.div`
    width: 100%;
    font-size: 1.3vw;
    font-weight:bold;
    padding: 1vw 1.5vw;
`;


class Search extends React.Component {
    state={title:""}

    // 문자가 변경되었을때
    onSearchChanged = event => {
        // 타이틀을 저장
        const _title = event.target.value

        console.log(_title)

        this.setState({title:_title})

    }

    onSubmit = event => {
        event.preventDefault();

        console.log(this.state.title)

        this.props.onSearch(this.state.title)
    }

    render(){

        return (
            <StyledBackground>
                <StyledDiv>Music</StyledDiv>
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls">
                        <label>Search</label>
                        <input value={this.state.title}
                        onChange={this.onSearchChanged} id="video-search" type="text" placeholder="Enter Search Keyword"></input>
                    </div>   
                </form>
            </StyledBackground>
        )
    }
}

export default Search;