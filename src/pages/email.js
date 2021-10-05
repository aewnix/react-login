import React, { useContext } from "react";
import { Context } from "../store";

import { Container, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Email() {
    const { store } = useContext(Context);

    return (
        <Container variant="customContainer" maxWidth="sm" sx={{ marginTop: "10%" }}>
            <div className="flex row">
                <CheckCircleIcon fontSize="40px" sx={{ width: '10%', height: "2rem" }}/>
                <h1>Your email address</h1>
            </div>
            <Box sx={{ paddingLeft: "10%", marginTop: "10px" }}>{ store.email }</Box>
        </Container>
    )
}