import React from "react";

export const initialState = { email: "" };

export const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "updateEmail":
            return { email: action.data};
        default:
            return state;
    }
};

export const Context = React.createContext();
