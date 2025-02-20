import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Attendance_Management from './pages/Attendance_Management/Attendance_Management.jsx';
import Main from './components/Dashboard/Dashboard.jsx';
// import Product from './pages/Home/Home.jsx';
import Product from './pages/Attendance_Management/Attendance_Management.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import './App.css';
const App = () => {
	return (
		<div className={'App'}>
			<BrowserRouter>

				<div className={'left'}>
					<Header />
				</div>
				{/* <Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product/*" element={<Product />}></Route> */}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/*<Route path="*" element={<NotFound />}></Route>
				</Routes> */}
				<div className="right">
					<Attendance_Management/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
