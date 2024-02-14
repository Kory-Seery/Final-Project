import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom"
import AvatarSelector from "./AvatarSelector";
import avatars from "./Avatars";

const Header = ({setcurrentuser, onUpdateAvatar}) => {
        const bringmeto = useNavigate()
        const [isProfileOpen, setProfileOpen] = useState("false");
        const [currentUser, setCurrentUser] = useState("")
        const [newAvatarId, setNewAvatarId] = useState("")
        const [selectedAvatar, setSelectedAvatar] = useState(null);
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
            setCurrentUser(null)
            bringmeto("/")
        }

        const handleUpdateAvatar = async () => {
            try {
                console.log("newAvatarId before API call:", newAvatarId);
                console.log("currentUser before API call:", currentUser);
        
                const response = await fetch("/updateAvatar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: currentUser,
                        avatarId: newAvatarId,
                    }),
                });
        
                if (response.ok) {
                    console.log("Avatar updated successfully!");
                    
                    setNewAvatarId(newAvatarId);
                console.log("newAvatarId after API call:", newAvatarId);
                console.log("currentUser after API call:", currentUser);
                } else {
                    const errorResponse = await response.json();
                    console.error("Failed to update avatar:", response.status, errorResponse);
                }
            } catch (error) {
                console.error("Error updating avatar:", error);
            }
        };

        useEffect(() => {
            setSelectedAvatar(currentUser.avatarId);
        }, [currentUser]);
    

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
                <PROFILEPIC src={avatars.find(avatar => avatar.id === selectedAvatar)?.url} alt="User Avatar" />
            ) : (
                <p>No avatar selected</p>
            )}
                </PIC>
        <div>
            <p>Select New Avatar:</p>
            <AvatarSelector onSelect={setSelectedAvatar} />
            <button onClick={handleUpdateAvatar}>Update Avatar</button>
        </div>
                    <WORDS>Hello User this where you find all your information</WORDS>
                    <Homelink onClick={toggleLogout}>Log Out</Homelink>
                    <Homelink onClick={deleteClientfrontend}>DELETE ACCOUNT</Homelink>
            </ALL>
                </SHOWUP>
                </Dropdown>
                
</Linkstoplaces>
</Everything>
    )
}


const Headerlist = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const PROFILEPIC = styled.img`
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
padding: 1%;
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