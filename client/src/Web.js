import styled from "styled-components";
import Countdown from "./Countdown";
import Header from "./Header";
import Chat from "./Chat";
import React, { useState, useEffect } from "react";

const Web = ({ currentUser, setcurrentuser }) => {
    const [challenges, setChallenges] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");

    useEffect(() => {
        fetchChallenges();
    }, [selectedDifficulty]);

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

    const handleDifficultyToggle = (difficulty) => {
        setSelectedDifficulty(difficulty === selectedDifficulty ? null : difficulty);
    };

    return (
        <div>
        <Header currentUser={currentUser} setcurrentuser={setcurrentuser} />
        <ALL>


        <Section1>
            <Countdown />
            <DifficultyButtons>
            <button onClick={() => handleDifficultyToggle("Easy")}>Easy</button>
            <button onClick={() => handleDifficultyToggle("Medium")}>Medium</button>
            <button onClick={() => handleDifficultyToggle("Hard")}>Hard</button>
            <button onClick={() => handleDifficultyToggle("Extreme")}>Extreme</button>
            </DifficultyButtons>
            <ul>
                {challenges.map((challenge) => (
                <List key={challenge._id}>
                    {challenge.challenge} - {challenge.type}

                    </List>
                ))}
            </ul>

            </Section1>

            <Section2>
            <Chat />
            </Section2>
        </ALL>
        </div>
    );
                };

const DifficultyButtons = styled.div`

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
`

const Section1 = styled.div`
width: 400px;
background-color: lightgray;
`

const Section2 = styled.div`
min-width: auto;
`

export default Web;