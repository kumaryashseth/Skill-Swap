import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from '../pages/FirstPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
// import ProfilePage from '../pages/ProfilePage';
// import DashboardPage from '../pages/DashboardPage';
// import PostSkillPage from '../pages/PostSkillPage';
// import MessagingPage from '../pages/MessagingPage';
import Navbar from '../components/layout/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        {/* <Route path="/post-skill" element={<PostSkillPage />} /> */}
        {/* <Route path="/messaging" element={<MessagingPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;