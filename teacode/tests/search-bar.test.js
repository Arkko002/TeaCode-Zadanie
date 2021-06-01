import { render } from '@testing-library/react';
import SearchBar from "../src/components/search-bar";

test("updates value used for searching", () => {
    const updateSearchMock = jest.fn();
    const event = {
        preventDefault() {},
        target: {value: "new-value"}
    };

    //TODO
});

