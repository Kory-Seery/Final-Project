import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import fire from "./photos/fire.gif"


const Chat = () => {
  const [dailyChallenge, setDailyChallenge] = useState('');
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const conversationElem = useRef(null);

  useEffect(() => {
    

      getDailyChallenge();
      scrolltobottom()

    
  }, []);

const scrolltobottom = () => {
  conversationElem.current.scrollTop = conversationElem.current.scrollHeight;
}

  const getDailyChallenge = async () => {
    try {
      const response = await fetch('/dailychallenge'); 
      const challenge = await response.json();
      
      setDailyChallenge(challenge);
      console.log(challenge)
    } catch (error) {
      console.error('Error fetching daily challenge:', error);
    }
  };



  function getResponse(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("sup")) {
        return "Hey there!";
    } else if (userInput.includes("how are you")) {
        return "I'm just a computer program, but I'm doing well. How about you?";
    } else if (userInput.includes("im good")) {
        return "Glad to read that you are doing good (: want to hear a joke? say joke";
    } else if (userInput.includes("bye") || userInput.includes("goodbye")) {
        return "Goodbye! Have a great day.";
    } else if (userInput.includes("recommendation")) {
        return "Make sure you check out the Suggestion tab and leave a challenge recommendation that you may see in the future";
    } else if (userInput.includes("account deletion")) {
        return "If you are looking to PERMANENTLY DELETE ACCOUNT: 1. click profile 2.click DELETE ACCOUNT We are sorry to see you go  ";
    } else if (userInput.includes("mood")) {
        return "A mood is a personal emotion that the user has selected on the profile tab to show how they are feeling";
    } else if (userInput.includes("joke")) {
        return "Why was Cinderella so bad at soccer?... she kept running away from the ball!";
    } else if (userInput.includes("help")) {
        return "Try saying: challenge, recommendation, account deletion, mood, joke";
    } else {
        return "I'm sorry, I didn't understand that. Try asking for help by saying 'help'.";
    }
}


  

  const getRandomDelay = () => Math.floor(Math.random() * (3000 - 1000) + 1000);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') {
      return; 
    }

    const userMessage = { type: 'user', content: userInput };
    setChatHistory((prevHistory) => [...prevHistory, userMessage]);

    if (userInput.toLowerCase() === 'exit') {
      setUserInput('');
      return;
    }


    if (userInput.toLowerCase() === 'challenge') {
      const officalchallenge = dailyChallenge[0]
      const botMessage = { type: 'bot', content: `The daily challenge is a ${officalchallenge.type} one and it is "${officalchallenge.challenge}". I am giving you ${officalchallenge.time}` };
      setChatHistory((prevHistory) => [...prevHistory, botMessage]);
    } else {
      const response = getResponse(userInput)

      setTimeout(() => {
        const botMessage = { type: 'bot', content: response };
        setChatHistory((prevHistory) => [...prevHistory, botMessage]);
      }, getRandomDelay());
    }

    setUserInput('');
  };

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleSendMessage();
  }
};



  return (
    <div> 
      <ChatContainer ref={conversationElem}>
      
        <MessageContainer>
          {chatHistory.map((message, index) => (
            <Message key={index}>
              {message.type === 'user' ? (
                <UserMessage>{message.content}</UserMessage>
              ) : (
                <BotMessage>{message.content}</BotMessage>
              )}
            </Message>
          ))}
        </MessageContainer>
      </ChatContainer>

      <InputContainer>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          onKeyPress={handleKeyPress} 
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </InputContainer>
    </div>
  );
};
    
    const InputContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      margin: 0 auto;
      
    
      input {
        flex: 1;
        padding: 20px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    
      button {
        padding: 20px;
        font-size: 16px;
        background-color: skyblue;
        color: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    
        &:hover {
          background-color: black;
          color: skyblue;
        }
      }
    `

const ChatContainer = styled.div`
  width: 97%;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid skyblue;
  border-radius: 8px;
  background-color: black;
  background-image: url(${fire});
  background-repeat: repeat-x;
  background-position: bottom;
  height: 750px;
  max-height: 750px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: white black;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  
`

const Message = styled.div`
  padding: 18px;
  margin-bottom: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  min-width: 30%;

  
`

const UserMessage = styled(Message)`
  min-width: fit-content;
  background-color: skyblue;
  border: 1px solid white;
  color: white;
  text-shadow: 2px 1px black;
  align-self: flex-end;
`

const BotMessage = styled(Message)`
  align-self: flex-start;
  justify-content: flex-start;
  background-color: black;
  color: white;
  border: 1px solid skyblue;
  text-shadow: 1px 1px skyblue;
`

export default Chat;