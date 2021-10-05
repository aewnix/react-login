import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store";

import { checkUsername } from "../checkUsername";

import { Button, TextField, FormHelperText, Container } from "@mui/material";

import top from "../assets/img/top.svg";
import bottom from "../assets/img/top.svg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export default function Login() {
    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState(null);
    const { dispatch } = useContext(Context);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await checkUsername(username);

        if (!result.error) {
            dispatch({type: "updateEmail", data: result.data});
            setUsernameError(false);
            history.push("/email");
        } else {
            setUsernameError(result.data);
        }
    }

    return (
        <div>
            <img src={ top } alt="svg-top" className="svg-top" height="1337" width="1337"/>
            <img src={ bottom } alt="svg-bottom" className="svg-bottom" height="896" width="967"/>
            <Container variant="customContainer" autoComplete="off" noValidate sx={{
                position: "absolute",
                top: "25%",
                left: "25%",
            }} maxWidth='sm'>
                <form onSubmit={ handleSubmit }>
                    <VpnKeyIcon fontSize="large"/>
                    <h1>Sign In</h1>
                    <TextField
                        required
                        id="standard-basic"
                        label="E-mail"
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!usernameError}
                        variant="standard"
                    />
                    <FormHelperText error={!!usernameError}>{ usernameError }</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary">Sign In</Button>
                </form>
            </Container>
        </div>
    );
}