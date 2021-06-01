import { render } from '@testing-library/react';
import Contact from "../src/components/contact";

test("calls passed function on click", () => {
    let calledFunction = false;
    let fun = (x) => {
        calledFunction = true
    };

    render(<Contact contact={{}} onClick={fun}/>);
    expect(calledFunction).toBeTruthy();
});

test("displays contact information", () => {
    let contact = {avatar: "avatarSrc", last_name: "LastName", first_name: "FirstName"};

    render(<Contact contact={contact} onClick={{}}/>);
    expect("avatarSrc").toBeInTheDocument();
    expect("LastName").toBeInTheDocument();
    expect("FirstName").toBeInTheDocument();
});
