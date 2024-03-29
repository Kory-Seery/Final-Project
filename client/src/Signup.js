import styled from "styled-components"
import {Link, useNavigate } from "react-router-dom"
import React, {useState} from "react";



const Signup = () => {

const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [fullname, setFullName] = useState("");

const [showhiddenpass, setShowHiddenPass] = useState(true)


    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
                const res = await fetch("/createclient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email,
                    fullname,
                    username,
                    password }),
                });

            if (res.ok) {
            localStorage.setItem("currentUser", email);
            localStorage.setItem("currentUser", fullname);
            localStorage.setItem("currentUser", username);
            localStorage.setItem("currentUser", password);
            navigate("/Signin")
            }else {    
                console.log("Error signing up");
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };

    const ShowHiddenPass = (event) => {
        event.preventDefault()
        
        if (showhiddenpass === true) {
            setShowHiddenPass(false) 
        } else {
            setShowHiddenPass(true)
        }
    }


    return (
    <Wrapper>
    <div>
        <form>
            <FO>
            <div>
            <h1>SIGN-UP</h1>
            </div>
            <div>
            <TEXT>
        <MAIL>
                <p>
            Email:{" "}
            <input
                type="text"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </p>
        </MAIL>
        <Full>
        <MAIL>
                <p>
            Fullname:{" "}
            <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
            />
            </p>
                </MAIL>
        </Full>
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
                type= {showhiddenpass ? "password" : "text"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <EYE onClick={(event) => ShowHiddenPass(event)}>👁️</EYE>
            </p>
            
        </PASS>
    </TEXT>
            </div>

        <Footer>
        <div className="glow-on-hover" type="button">
            <Bu to="/Signup" >Clear</Bu>
        </div>
        <div className="glow-on-hover" type="button">
            <Buttonstyle onClick={ handleSignUp}>Confirm</Buttonstyle>
        </div>
        </Footer>
            </FO>
        </form>
        <LinkTO to="/">Go Back To Home Page</LinkTO>
    </div>
    </Wrapper>
    );
}

export default Signup


const LinkTO = styled(Link)`
display: flex;
justify-content: center;
margin-top: -150px;
`

const EYE = styled.button`
cursor: pointer;
background-color: #ccc;
border: 2px solid black;
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
    text-align: center;
    margin: auto;
    
`

const TEXT = styled.div`
margin: 20px;
`

const NICK = styled.div`
margin: 20px;
`

const PASS = styled.div`
margin: 20px;
`

const Full = styled.div`
margin: 20px;
`

const MAIL = styled.div`
margin: 20px;
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

const Wrapper = styled.div`
background: #222;
height: 93.4vh;
padding-top: 60px;
min-width: 700px;
`