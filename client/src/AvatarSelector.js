import React, { useState } from 'react';
import styled from 'styled-components';
import avatars from './Avatars';

const AvatarSelector = ({ onSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState("");

    const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar.id);
    };


    return (
    <AvatarContainer>
        {avatars.map((avatar) => (
        <AvatarOption
            key={avatar.id}
            src={avatar.url}
            alt={`Avatar ${avatar.id}`}
            selected={selectedAvatar && selectedAvatar.id === avatar.id}
            onClick={() => handleAvatarClick(avatar)}
            
        />
        ))}
        </AvatarContainer>
    );
    };


    const AvatarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    `

    const AvatarOption = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    margin: 10px;
    border: ${({ selected }) => (selected ? '2px solid blue' : 'none')};
    `

export default AvatarSelector;