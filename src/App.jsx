import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Attendance_Management from './pages/Attendance_Management/Attendance_Management.jsx';
import Main from './components/Dashboard/Dashboard.jsx';
// import Product from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Attendance from './pages/Attendance/Attendance.jsx';
import Student from './pages/Student/Student.jsx';
import Notice from './pages/Notices/Notices.jsx';
import Setting from './pages/Setting/Setting.jsx';
import './App.css';
import Attendance from './pages/Attendance/Attendance.jsx';

const App = () => {
	// const [renderMenuName, setRenderMenuName] = useState();
	console.log('app useState 실행')
	// 현재 선택된 메뉴 변경
    // const currentMenu = (menu) => {
    //     if (renderMenuName !== menu) {
    //         setRenderMenuName(menu);
    //     }
    // };
	return (
		<div className={'App'}>
			<BrowserRouter>

				<div className={'left'}>
					<Header />
				</div>
				<div className="right">
					<Attendance_Management/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
