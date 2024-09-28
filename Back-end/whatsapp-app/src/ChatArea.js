// src/components/ChatArea.js
import React, { useState } from 'react';
import './ChatArea.css';

const ChatArea = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', type: 'received' },
    { id: 2, text: 'I\'m good, thanks!', type: 'sent' },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, type: 'sent' }]);
      setNewMessage('');
    }
  };

  return (
    <div id="chat-area">
      <div id="chats-section-center">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.type}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div id="chats-section-bottom">
        <input 
          type="text" 
          placeholder="Type a message" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatArea;
