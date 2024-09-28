// src/components/ChatList.js
import React from 'react';
import './ChatList.css'; // Create a CSS file for chat list styles

const ChatList = () => {
  const chats = [
    { id: 1, name: 'Mahnoor', message: 'When are we going to meet?' },
    // Add more chat items as needed
  ];

  return (
    <div id="chat-list">
      <input type="text" id="search-bar" placeholder="Search" />
      <div className="chats">
        <i id="archieve-logo" className="ri-archive-2-fill"></i>
        <p className="contact-name" id="archi">Archive</p>
      </div>
      <hr />
      <div id="all-chats">
        {chats.map(chat => (
          <div key={chat.id} className="chat-item">
            <div className="image-div">
              <img className="dp" src="bla bla.jpg" alt="Profile" />
            </div>
            <div className="contact">
              <p className="contact-name">{chat.name}</p>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
