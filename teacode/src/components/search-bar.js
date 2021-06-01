import React from "react";
import "../styles/search-bar.css"

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar-div">
                <input className="search-input"
                       placeholder="Type your search here"
                       type="text"
                       onChange={e => this.props.updateSearch(e.target.value)}/>
            </div>
        )
    }
}


export default SearchBar