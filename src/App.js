import React from "react";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/user-tabs/Profile";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/user-tabs/Gallery";
import ToDo from "./pages/user-tabs/ToDo";
import Post from "./pages/user-tabs/Post";
import UserPage from "./pages/UserPage";
export const config = {
  endpoint: "https://panorbit.in/api/users.json",
};

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />
      {/* Nested Routes for User page */}
      <Route path="/user" element={<UserPage />}>
        <Route index path="/user/profile" element={<Profile />} />
        <Route path="/user/gallery" element={<Gallery />} />
        <Route path="/user/todo" element={<ToDo />} />
        <Route path="/user/posts" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default App;
