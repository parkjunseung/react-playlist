import React from "react";

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
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls">
                        <label>Search</label>
                        <input value={this.state.title}
                        onChange={this.onSearchChanged} id="video-search" type="text" placeholder="Enter Search Keyword"></input>
                    </div>   
                </form>
            </div>
        )
    }
}

export default Search;