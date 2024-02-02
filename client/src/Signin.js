import styled from "styled-components";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Signin = ({setcurrentuser}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSignIn = async (event) => {
        event.preventDefault()
    try {
        const response = await fetch("/clientsignin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const getdata = await fetch(`/getclient/${username}`)
            const clientdata = await getdata.json()
            setcurrentuser(clientdata)
        localStorage.setItem("currentUser", username);
        setErrorMessage(null);
        navigate("/Web")
        } else {
            
        setErrorMessage("Invalid username or password");
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        setErrorMessage("An error occurred during sign-in");
    }
    };

    return (
    <Wrapper>
        <form>
        <div>
            <h1>Sign-in</h1>
        </div>
        <div>
            <p>
            Nickname:{" "}
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </p>
        </div>
        <div>
            <p>
            Password:{" "}
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </p>
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Footer>
            <div className="glow-on-hover" type="button">
            <Buttonstyle type="reset">Clear</Buttonstyle>
            </div>
            <div className="glow-on-hover" type="button">
            <Buttonstyle onClick={(event) => handleSignIn(event)}>Confirm</Buttonstyle>
            </div>
        </Footer>
        </form>
    </Wrapper>
    );
};

const BUTTON = styled.button`
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0px;
    padding-left: 15%;
    font-size: 40px;
    font-family: 'FROZEN ICE', sans-serif;
    color: white;
`
const Buttonstyle = styled(BUTTON)`
    padding-left: 70px;
    padding-right: 70px;
`

const Footer = styled.footer`
    display: flex;
`

const Wrapper = styled.div``



export default Signin;


