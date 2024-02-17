import styled from "styled-components";
import Countdown from "./Countdown";
import Header from "./Header";
import Chat from "./Chat";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Web = ({ currentUser, setcurrentuser }) => {
    const [challenges, setChallenges] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
    const bringmeto = useNavigate("")

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser')
        if (!currentUser) {
            bringmeto('/Signin')
        }
        }, [bringmeto])

    useEffect(() => {
        
    const fetchChallenges = async () => {
        try {
        const response = await fetch(`/challengelist`);
        const data = await response.json();

        const filteredChallenges = selectedDifficulty
            ? data.filter((challenge) => challenge.type === selectedDifficulty)
            : data;

        setChallenges(filteredChallenges);
        } catch (error) {
        console.error("Error fetching challenges", error);
        }
    };

    fetchChallenges();
}, [selectedDifficulty]);


    const handleDifficultyToggle = (difficulty) => {
        setSelectedDifficulty(difficulty)
    };

    const filteredChallenges = challenges.filter(
        (challenge) => challenge.type === selectedDifficulty
    )


    return (
        <div>
        <Header currentUser={currentUser} setcurrentuser={setcurrentuser} />
        <ALL>


        <Section1>
            <Countdown />
            <DifficultyButtons>

            <div>
            <Colorful className="glow-on-hover" type="button">
            <ButtonDifsmall onClick={() => handleDifficultyToggle("Easy")}>Easy</ButtonDifsmall>
            </Colorful>
            {selectedDifficulty === "Easy" && (
            <CHALL>
            <UL>
                {filteredChallenges.map((challenge) => (
                <List key={challenge._id}>
                    {challenge.challenge} - {challenge.type}
                    </List>
                ))}
            </UL>
        </CHALL>
        )}
            </div>


            <div>
            <Colorful className="glow-on-hover" type="button">
            <ButtonDif onClick={() => handleDifficultyToggle("Medium")}>Medium</ButtonDif>
            </Colorful>
            {selectedDifficulty === "Medium" && (
            <CHALL>
            <UL>
                {filteredChallenges.map((challenge) => (
                <List key={challenge._id}>
                    {challenge.challenge} - {challenge.type}
                    </List>
                ))}
            </UL>
        </CHALL>
        )}        
            </div>

            <div>
            <Colorful className="glow-on-hover" type="button">
            <ButtonDifsmall onClick={() => handleDifficultyToggle("Hard")}>Hard</ButtonDifsmall>
            </Colorful>
            {selectedDifficulty === "Hard" && (
            <CHALL>
            <UL>
                {filteredChallenges.map((challenge) => (
                <List key={challenge._id}>
                    {challenge.challenge} - {challenge.type}
                    </List>
                ))}
            </UL>
        </CHALL>
        )}
            </div>

            <div>
            <Colorful className="glow-on-hover" type="button">
            <ButtonDif onClick={() => handleDifficultyToggle("Extreme")}>Extreme</ButtonDif>
            </Colorful>
            {selectedDifficulty === "Extreme" && (
            <CHALL>
            <UL>
                {filteredChallenges.map((challenge) => (
                <List key={challenge._id}>
                    {challenge.challenge} - {challenge.type}
                    </List>
                ))}
            </UL>
        </CHALL>
        )}
            </div>

            </DifficultyButtons>
            </Section1>

            <Section2>
            <Chat />
            </Section2>
        </ALL>
        </div>
    );
};


const Colorful = styled.div`
padding-right: 130px;
`


const DifficultyButtons = styled.div`
text-align: center;
max-height: 700px;
overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: white black;
`

const CHALL = styled.div`

`

const UL = styled.ul`
margin-left: 80px;
`

const ButtonDifsmall = styled.button`
border: 2px solid white;
padding: 15px;
padding-left: 159px;
padding-right: 158px;
color: white;
background-color: transparent;
cursor: pointer;
`

const ButtonDif = styled.button`
border: 2px solid white;
padding: 15px;
padding-left: 150px;
padding-right: 150px;
color: white;
background-color: transparent;
cursor: pointer;
`

const ALL = styled.div`
display: grid;
grid-template-columns: 400px auto;
height: 94vh;
`

const List = styled.p`
padding: 5px;
border: 2px solid black;
border-radius: 20px ;
width: 200px; 
text-align: center;
margin: 5px;
`

const Section1 = styled.div`
width: 400px;
background-color: lightgray;
`

const Section2 = styled.div`
min-width: auto;
`

export default Web;