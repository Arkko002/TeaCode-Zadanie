import React from "react";
import Api from "../adapters/api";
import SearchBar from "../components/search-bar";
import ContactsList from "../components/contacts-list"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: [], searchValue: ""}
        this.onClicked = this.onClicked.bind(this)
    }

    onClicked(contact) {
        contact.checked = !contact.checked

        let checkedArr = this.state.contacts
                                .filter(c => {return c.checked})
                                .map(c => {return c.id})

        console.log(checkedArr.join(", "))
    }

    componentDidMount() {
        Api.getUserData()
            .then(data => {
                data.forEach(contact => {
                    contact.checked = false
                })

                this.setState({contacts: data})
            })
            .catch(error => {
                // TODO Error message
                return
            }
        )
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <span>Contacts</span>
                </header>

                <SearchBar searchValue={this.state.searchValue} updateSearch={this.updateSearch}/>
                <ContactsList contacts={this.state.contacts} onClicked={this.onClicked}/>
            </div>
        )
    }
}

export default App