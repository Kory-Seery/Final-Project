import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom"
import AvatarSelector from "./AvatarSelector";
import avatars from "./Avatars";

const Header = ({setcurrentuser}) => {
        const bringmeto = useNavigate()
        const [currentmood, setCurrentMood] = useState("")
        const [isProfileOpen, setProfileOpen] = useState("false");
        const [currentUser, setCurrentUser] = useState("")
        
        const [selectedAvatar, setSelectedAvatar] = useState(null);
        useEffect(() => {
            const storageuser = localStorage.getItem("currentUser")
            const Mooduser = localStorage.getItem("Mood")
            console.log(storageuser)
            setCurrentUser(storageuser)
            setCurrentMood(Mooduser)
            
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
            setCurrentUser(null)
            bringmeto("/")
        }



        useEffect(() => {
            setSelectedAvatar(currentUser.avatarId);
            setSelectedAvatar(currentmood)
        }, [currentUser, currentmood]);
    

        const deleteClientfrontend = async () => {
            try{
                const res = await fetch(`/deleteClient/${currentUser}`, {
                    method: "DELETE"   
                })

                const result = await res.json()
                if(res.ok) {
                    localStorage.removeItem("currentUser")
                    bringmeto("/")
                    console.log("Account deleted!")
                    console.log(result)
                } else {
                    console.log(currentUser)
                }
            } catch (error) {
                console.error("Error deleting account", error)
            }
        }

        return (
        <Everything>
        <Linkstoplaces>
        <Headerlist>
        <Sendto to="/Web">Home</Sendto>
        <Send to="/Recommend">Suggestions</Send>
        
        <ProfileDiv onClick={toggleDropdown}>Profile</ProfileDiv>
        </Headerlist>
                    <Dropdown isvisible={isProfileOpen}>
                <SHOWUP>
                <Pro>
                    <DIV>
                        <WORDS>{currentUser}'s Profile</WORDS>
                    </DIV>
                    <CloseButton onClick={closedropdown}> x </CloseButton>
                </Pro>
            <ALL>
                <PIC>
                {selectedAvatar ? (
                <PROFILEPIC src={avatars.find(avatar => avatar.id === selectedAvatar)?.url} alt="User Mood" />
            ) : (
                <p>No Mood Selected</p>
            )}
                </PIC>
        <div>
            <Moodselect>Select New Mood:</Moodselect>
            <AvatarSelector onSelect={setSelectedAvatar} />
            
        </div>
                    <WORDS>Hello {currentUser} this where you will find all your information.</WORDS>
                    <WORDS>make sure to leave a challenge Suggestion for possible future challenges</WORDS>
                <BOTTOM>
                    <DIVDEL>
                    <DELETE onClick={deleteClientfrontend}>DELETE ACCOUNT</DELETE>
                    </DIVDEL>
                    <DIVLOG>
                    <Homelink onClick={toggleLogout}>LOG OUT</Homelink>
                    </DIVLOG>
                </BOTTOM> 
            </ALL>
                </SHOWUP>
                </Dropdown>
                
</Linkstoplaces>
</Everything>
    )
}


const Moodselect = styled.p`
margin-top: 10px;
color: black;
`

const DIVLOG = styled.div`

`

const DIVDEL = styled.div`

`

const BOTTOM = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`

const DELETE = styled.button`
color: black;
text-decoration: none;
padding: 1%;
margin: auto;
margin-top: 15px;
text-align: center;
&:hover {
    color: black;
    font-weight: bold;
    background-color:red;
}
`

const Headerlist = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const PROFILEPIC = styled.img`
margin-top: 10px;
width: 100px;
border-radius: 50%;

`

const Send = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
&:hover {
    color: black;
    background-color:skyblue;
}
`
const Sendto = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const ALL = styled.div`
max-width: 90%;
`
const PIC = styled.div`

`

const Everything = styled.div`
width: 100%;
z-index: 200;

`

const Pro = styled.div`
display: flex;

`

const WORDS = styled.p`
color: black;

`

const DIV = styled.div`
border: 2px solid;
width: 100%;
text-align: center;
padding-top: 11px;
border-color: black;
`

const SHOWUP = styled.div`
font-size: 15px;
float: left;
width: 450px;
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
justify-content: space-between;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const Homelink = styled.button`
color: black;
text-decoration: none;
width: 100px;
padding: 9%;
margin: auto;
margin-top: 15px;
text-align: center;
&:hover {
    color: black;
    background-color:skyblue;
}
`

const CloseButton = styled.span`
color: #aaa;
margin: 5px;
padding: 5px;
font-size: 20px;
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