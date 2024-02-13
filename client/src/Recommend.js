import styled from "styled-components";
import Header from "./Header";
import { useState, useEffect } from "react";

const Recommend = ({ setcurrentuser }) => {
const [currentUser, setCurrentUser] = useState("");
useEffect(() => {
    const storageuser = localStorage.getItem("currentUser");
    console.log(storageuser);
    setCurrentUser(storageuser);
}, []);

const handleSuggestion = async (event) => {
    event.preventDefault();
    try {
        const difficulty = document.querySelector("#difficulty").value;
        const time = document.querySelector("#time").value;
        const suggestionText = document.querySelector("#suggestionText").value;

        const res = await fetch(`/createSuggestion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            currentUser,
            difficulty,
            time,
            suggestionText,
        }),
        });

        if (res.ok) {
            document.querySelector("#difficulty").value = "";
            document.querySelector("#time").value = "";
            document.querySelector("#suggestionText").value = "";

            console.log("Suggestion submitted successfully");
        } else {
        console.log("Error Sending Suggestion");
        }
    } catch (error) {
        console.error("Error with Suggestion:", error);
    }
    };



    return (
        <div>
        <Header currentUser={currentUser} setcurrentuser={setcurrentuser} />
        <Wrapper>
            <div>
            <form onSubmit={handleSuggestion}>
                <FO>
                <div>
                    <H1>SUGGESTION</H1>
                </div>
                <TEXT>
                    <NICK>
                    <H3 value={currentUser}>Username: {currentUser}</H3>
                    </NICK>
                </TEXT>
                <SELECT>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty">
                    <option value="">Select one</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                        <option value="Extreme">Extreme</option>
                    </select>
                    <Time>
                    <label htmlFor="time">Time:</label>
                    <select id="time">
                        <option value="">Select one</option>
                        <option value="2-5 minutes">2-5 minutes</option>
                        <option value="30 minutes - 1 hour">30 minutes - 1 hour</option>
                        <option value="1-2 hours">1-2 hours</option>
                        <option value="3 - 24 hours">3 - 24 hours</option>
                    </select>
                </Time>
                </SELECT>
                <TEXT>
                    <form>    
                <H3 htmlFor="suggestionText">Suggestion:</H3>
                <INPUT id="suggestionText" rows="4" cols="60" placeholder="provide special instructions for the challenge here"></INPUT>
                    </form>
                    </TEXT>
                    <Footer>
                <div className="glow-on-hover" type="button">
                    <Bu to="/Recommend">Clear</Bu>
                </div>
                <div className="glow-on-hover" type="button">
                    <Buttonstyle type="submit">Confirm</Buttonstyle>
                </div>
                </Footer>
            </FO>
            </form>
        </div>
        </Wrapper>
    </div>
    );
};

const NICK = styled.div`
`

const H3 = styled.h3`
margin: 5px;
`

const INPUT = styled.textarea`
width: 50%;
padding-bottom: 120px;
`

const Time = styled.div`
margin-left: 20px;
`

const SELECT = styled.div`
display: flex;
justify-content: center;
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-left: 31%;
    position: absolute;
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

const H1 = styled.h1`
margin-bottom: 10px;
`

const FO = styled.div`
border: 2px solid black;
border-radius: 10px;
box-shadow:  0px 0px 50px 5px lightblue;
padding: 20px;
text-align: center;
margin: 100px;
height: 53vh;
background-color: white;
`

const Wrapper = styled.div`
background: #222;
height: 87.4vh;
padding-top: 60px;
`

const TEXT = styled.div`
margin: 20px;
`

export default Recommend;