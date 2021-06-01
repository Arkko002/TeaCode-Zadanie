import React from "react";
import Contact from "./contact"

class ContactsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.contacts !== undefined && this.props.contacts.length > 0) {
            return (
                <div className="contacts-div">
                    <ul className="contacts-ul">
                        {this.props.contacts.map(contact => (
                           <li key={contact.id}> <Contact contact={contact} onClicked={this.props.onClicked}/> </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return <h2>Contact list is empty</h2>
        }
    }
}

export default ContactsList