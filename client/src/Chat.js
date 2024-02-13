import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';



const Chat = () => {
  
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const conversationElem = useRef(null);

  useEffect(() => {
    if (conversationElem.current) {
      conversationElem.current.scrollTop = conversationElem.current.scrollHeight;
    }
  }, [chatHistory]);


  const responseMapping = {
    hello: "Hi there! How can I help you?",
    hi: "Hi there! How can I help you?",
    hey: "Hi there! How can I help you?",
    "how are you": "I'm just a computer program, but I'm doing well. How about you?",
    bye: "Goodbye! Have a great day.",
    challenge: `today's challenge is: `,
    help: "Here are some words I know: "
    // Add more responses as needed
  };

  const getRandomDelay = () => Math.floor(Math.random() * (3000 - 1000) + 1000);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') {
      return; 
    }

    const userMessage = { type: 'user', content: userInput };
    setChatHistory((prevHistory) => [...prevHistory, userMessage]);

    if (userInput.toLowerCase() === 'exit') {
      setUserInput('');
      return;
    }

    const response = responseMapping[userInput.toLowerCase()] || "I'm sorry, I didn't understand that. To know what to ask for say: help";

    setTimeout(() => {
      const botMessage = { type: 'bot', content: response };
      setChatHistory((prevHistory) => [...prevHistory, botMessage]);
    }, getRandomDelay());

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
            <div key={index}>
              {message.type === 'user' ? (
                <UserMessage>{message.content}</UserMessage>
              ) : (
                <BotMessage>{message.content}</BotMessage>
              )}
            </div>
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
  
  margin: 0 auto;
  padding: 20px;
  border: 3px solid black;
  border-radius: 8px;
  background-color: gray;
  //background-image: url();
  //background-size: cover;
  //background-position: center;
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
  max-width: 30%;
`

const UserMessage = styled(Message)`
margin-left: 80%;
  align-self: flex-end;
  background-color: aqua;
  color: black;
  justify-content: end;
  align-items: end;
`

const BotMessage = styled(Message)`
  align-self: flex-start;
  justify-content: flex-start;
  background-color: black;
  color: white;
`

export default Chat;