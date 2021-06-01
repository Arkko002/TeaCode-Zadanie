import React from "react";
import Api from "../adapters/api";
import SearchBar from "../components/search-bar";
import ContactsList from "../components/contacts-list"
import "../styles/App.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: [], filteredContacts: [], searchValue: ""}
        this.onClicked = this.onClicked.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
    }

    onClicked(contact) {
        contact.checked = !contact.checked

        let checkedArr = this.state.contacts
                                .filter(c => {return c.checked})
                                .map(c => {return c.id})

        console.log(checkedArr.join(", "))
        this.forceUpdate()
    }

    updateSearch(newValue) {
        if (newValue.length > 0) {
            let filteredContacts = this.state.contacts.filter(c => {return c.first_name.includes(newValue) || c.last_name.includes(newValue)})
            this.setState({filteredContacts: filteredContacts})
        } else {
            this.setState({filteredContacts: this.state.contacts})
        }

        this.setState({searchValue: newValue})
    }

    componentDidMount() {
        Api.getUserData()
            .then(data => {
                data.forEach(contact => {
                    contact.checked = false
                })

                this.setState({contacts: data, filteredContacts: data})
            })
            .catch(error => {
                console.error(error)
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
                <ContactsList contacts={this.state.filteredContacts} onClicked={this.onClicked}/>
            </div>
        )
    }
}

export default App