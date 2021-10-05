import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/login.js";
import Email from "./pages/email.js";

import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import {Context, initialState, reducer} from "./store";

function App() {
    const [store, dispatch] = useReducer(reducer, initialState);

    const MuiTheme = createTheme({
                palette: {
                    background: {
                        default: "#DBE0F9"
                    },
                    text: {
                        primary: "#6065D9"
                    }
                },
                components: {
                    MuiContainer: {
                        variants: [
                            {
                                props: { variant: "customContainer" },
                                style: {
                                    height: 'auto',
                                    zIndex: "100",
                                    backgroundColor: "white",
                                    padding: "40px",
                                    borderRadius: "20px",
                                    boxShadow: "10px 10px 15px 10px rgba(73, 78, 176, 0.5)",
                                },
                            }
                        ],
                    },
                }
    });

    return (
        <Context.Provider value={{ store, dispatch }}>
            <ThemeProvider theme={ MuiTheme }>
                <CssBaseline/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ Login }/>
                        <Route path="/email" component={ Email }/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Context.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
