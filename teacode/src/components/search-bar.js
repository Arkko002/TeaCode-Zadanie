import React from "react";
import "../styles/search-bar.css"

class SearchBar extends React.Component {
    // TODO
    render() {
        return (
            <div className="search-bar-div">
                <input className="search-input"
                       placeholder="Type your search here"
                       type="text"
                       onChange={this.updateSearch}/>
            </div>
        )
    }
}


export default SearchBar