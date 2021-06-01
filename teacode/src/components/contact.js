import React from "react";
import "../styles/contact.css"

class Contact extends React.Component {
    render() {
        return (
            <button className="contact-btn" onClick={() => this.props.onClicked(this.props.contact)}>
                <img src={this.props.contact.avatar} alt="Avatar Missing"/>
                <span>{this.props.contact.first_name} {this.props.contact.last_name}</span>
                <input type="checkbox" id="checked" checked={this.props.contact.checked}/>
            </button>
            )
    }
}

export default Contact