import { Link } from "react-router-dom"
import styled from "styled-components"
import React, { useState } from 'react';

const Header = () => {

        const [isProfileOpen, setProfileOpen] = useState(false);
        const toggleDropdown = () => {
            setProfileOpen(!isProfileOpen);
        };

        return (
        <Everything>
        <Linkstoplaces>
        <Homelink to="/">Home</Homelink>
        <ProfileDiv onClick={toggleDropdown}>Profile</ProfileDiv>
                    <Dropdown isVisible={isProfileOpen}>
                        <CloseButton onClick={toggleDropdown}> x </CloseButton>
                <SHOWUP>
                    <DIV>
                        <WORDS>(username)'s Profile</WORDS>
                    </DIV>
                    <WORDS>Hello User this where you find all your information</WORDS>
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
color: white;
text-decoration: none;
padding: 1%;
text-align: baseline;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const Homelink = styled(Link)`
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
display: ${props => (props.isVisible ? 'block' : 'none')};
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