import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => this.props.onClicked(this.props.contact)}>
                <img src={this.props.contact.avatar} alt="Avatar"/>
                <span>{this.props.contact.first_name} {this.props.contact.last_name}</span>
                <input type="checkbox" id="checked" checked={this.props.contact.checked}/>
            </button>
            )
    }
}

export default Contact