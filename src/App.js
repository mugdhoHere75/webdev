import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import AuthorProfile from "./AuthorProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/author/:authorId" element={<AuthorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
