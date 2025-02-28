import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Account from './pages/Account/Account.jsx';
import Home from './pages/Home/Home.jsx';
import Attendance_Management from './pages/Attendance_Management/Attendance_Management.jsx';
// import Product from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Attendance from './pages/Attendance/Attendance.jsx';
import Student from './pages/Student/Student.jsx';
import Notice from './pages/Notices/Notices.jsx';
import './App.css';
// import Layout from './components/Layout/Layout.jsx';

// ✅ Layout 컴포넌트를 따로 분리
const Layout = ({ children }) => {
    return (
        <div className="App">
            <div className="left">
                <Header />
            </div>
            <div className="right">
                {children}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            {/* ✅ Layout이 필요 없는 페이지 */}
            <Route path='/' element={<Account />} />

            {/* ✅ Layout이 필요한 페이지 */}
            <Route path='/home' element={<Layout> <Home /> </Layout>} />
            <Route path='/student' element={<Layout> <Student /> </Layout>} />
            <Route path='/attendance-management' element={<Layout> <Attendance_Management /> </Layout>} />
            <Route path='/attendance' element={<Layout> <Attendance /> </Layout>} />
            <Route path='/notice' element={<Layout> <Notice /> </Layout>} />
        </Routes>
    );
};

export default App;
