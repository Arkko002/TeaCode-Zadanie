import { render, renderer } from '@testing-library/react';
import TestRenderer from "react-test-renderer";
import ContactsList from "../src/components/contacts-list";
import Contact from "../src/components/contact";

test("renders all of the contacts passed to it", () => {
    const list = [
        {id: 1, avatar: "AvatarSrc", last_name: "LastName", first_name: "FirstName"},
        {id: 2, avatar: "AvatarSrc", last_name: "LastName", first_name: "FirstName"},
        {id: 3, avatar: "AvatarSrc", last_name: "LastName", first_name: "FirstName"}
    ]

    render(<ContactsList contacts={list}/>)
    const contactList = TestRenderer.create(<ContactsList contacts={list}/>)
    const renderedContacts = contactList.root.findAllByType(Contact)

    expect(renderedContacts.length).toBe(list.length)
});

test("displays empty list information", () => {
    let list = [];

    render(<ContactsList contacts={list}/>);
    expect("Contact list is empty").toBeInTheDocument();
});
