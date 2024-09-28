import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import ChatList from "./ChatList";
import ChatArea from "./ChatArea";
import Profile from "./Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat" element={<ChatArea />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;