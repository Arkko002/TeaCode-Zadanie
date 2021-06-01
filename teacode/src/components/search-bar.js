import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.updateSearch(this.props.searchValue)
    }

    // TODO
    render() {
        return (
            <div className="search-bar">
                <input type="text" onChange={() => this.updateSearch()}/>
            </div>
        )
    }
}


export default SearchBar