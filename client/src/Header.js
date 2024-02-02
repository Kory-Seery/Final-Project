import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import React, { useState , useEffect } from 'react';

const Header = ({setcurrentuser}) => {
        const bringmeto = useNavigate()
        const [isProfileOpen, setProfileOpen] = useState("false");
        const [currentUser, setCurrentUser] = useState("")
        useEffect(() => {
            const storageuser = localStorage.getItem("currentUser")
            console.log(storageuser)
            setCurrentUser(storageuser)
            
            /* if (storageuser) {
                const clientparsed = JSON.parse(storageuser)
                setcurrentuser(clientparsed)
            } */
        },[])


        const toggleDropdown = () => {
            setProfileOpen("true");
        };

        const closedropdown = () => {
            setProfileOpen("false");
        }

        const toggleLogout = () => {
            localStorage.removeItem("currentUser")
            localStorage.removeItem("userId")
            setcurrentuser(null)
            bringmeto("/")
        }


        return (
        <Everything>
        <Linkstoplaces>
        <ProfileDiv onClick={toggleDropdown}>Profile</ProfileDiv>
                    <Dropdown isvisible={isProfileOpen}>
                        <CloseButton onClick={closedropdown}> x </CloseButton>
                <SHOWUP>
                    <DIV>
                        <WORDS>{currentUser}'s Profile</WORDS>
                    </DIV>
                    <WORDS>Hello User this where you find all your information</WORDS>
                    <Homelink onClick={toggleLogout}>Log Out</Homelink>
                </SHOWUP>
                </Dropdown>
</Linkstoplaces>
</Everything>
    )
}

const Everything = styled.div`
width: 100%;
z-index: 200;
`

const WORDS = styled.p`
color: black;
`
const DIV = styled.div`
border: 2px solid;
border-color: black;
`


const SHOWUP = styled.div`

`

const Linkstoplaces = styled.div`
display: flex;
text-align: center;
background-color: black;
`

const ProfileDiv = styled.div`
margin-left: 95.5%;
color: white;
text-decoration: none;
padding: 1%;
text-align: baseline;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const Homelink = styled.button`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const CloseButton = styled.span`
color: #aaa;
float: right;
font-size: 28px;
font-weight: bold;
cursor: pointer;

&:hover,
&:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
`


const Dropdown = styled.div`
display: ${(props) => (props.isvisible === "true" ? 'block' : 'none')};
position: absolute;
background-color: lightgray;
border: 1px solid #ccc;
padding: 15px;
z-index: 1;
right: 0;
top: 60px;
color: white;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`
export default Header