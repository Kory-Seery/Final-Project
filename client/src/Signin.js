import styled from "styled-components";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"


const Signin = ({setcurrentuser}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

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
        setErrorMessage(true);
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
    };

    return (
    <Wrapper>
        <div>
            <form>
            <FO>
        <HIV>
            <H1>SIGN-IN</H1>
        </HIV>
    <TEXT>
        <NICK>
            <p>
            Username:{" "}
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </p>
        </NICK>
        <PASS>
            <p>
            Password:{" "}
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </p>
        </PASS>
    </TEXT>
    <DIVERR>
        <ERROR className={errorMessage ? "show": "hide"} >Invalid Username or Password!</ERROR>
    </DIVERR>
        <Footer>
            <div className="glow-on-hover" type="button">
            <Bu to="/Signin" >Clear</Bu>
            </div>
            <div className="glow-on-hover" type="button">
            <Buttonstyle onClick={(event) => handleSignIn(event)}>Confirm</Buttonstyle>
            </div>
        </Footer>
        </FO >
        </form>
    </div> 
    </Wrapper>
    );
};


const DIVERR = styled.div`
margin: 50px;
`

const ERROR = styled.p`
color: red;
cursor: default;
opacity: 0%;
&.show {
    opacity: 100%;
}
`

const NICK = styled.div`
margin: 20px;
`

const PASS = styled.div`
margin: 20px;
`

const HIV = styled.div`
margin: 20px;
`

const H1 = styled.h1`
margin-bottom: 40px;
`

const FO = styled.div`
border: 2px solid black;
border-radius: 10px;
box-shadow:  0px 0px 50px 5px lightblue;
padding: 20px;
text-align: center;
margin: 100px;
height: 50vh;
background-color: white;
`

const TEXT = styled.div`
margin: 20px;
`

const BUTTON = styled.button`
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0px;
    padding-left: 15%;
    font-size: 40px;
    margin-left: 8%;
    font-family: 'FROZEN ICE', sans-serif;
    color: white;
`
const Buttonstyle = styled(BUTTON)`
    text-align: center;
    padding-right: 50px;
`

const Bu = styled(BUTTON)`
    text-align: center;
    padding-right: 84px;
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-left: 31%;
    position: absolute;
`

const Wrapper = styled.div`
background: #222;
height: 93.4vh;
padding-top: 60px;
`

export default Signin;