import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Account from './pages/Account/Account.jsx';
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
				<div>
					<Account></Account>
				</div>
				{/* <div className={'left'}>
                    
                    {location.pathname !== '/account' && <Header />}
                </div>
				<div className="right">
					<Routes>
                        <Route path="/"  element={<Account />} />
						
                       
						<Route path="/home" element={<Home />} />
                        {<Route path="/student" element={<Student />} />}
                        {<Route path="/attendance-management" element={<Attendance_Management />} />}
						{<Route path="/attendance" element={<Attendance />} />}
                        {<Route path="/notice" element={<Notice />} />}
                        {<Route path="/setting" element={<Setting />} />}
                    </Routes>
				</div> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
