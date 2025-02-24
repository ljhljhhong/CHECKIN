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

const App = () => {
	const [renderMenuName, setRenderMenuName] = useState();
	// 현재 선택된 메뉴 변경
    const currentMenu = (menu) => {
        if (renderMenuName !== menu) {
            setRenderMenuName(menu);
        }
    };
	return (
		<div className={'App'}>
			<BrowserRouter>

				<div className={'left'}>
					<Header selectMenu={currentMenu} />
				</div>
				<div className="right">
					<Routes>
                        <Route path="/" element={<Home />} />
                        {/* 다른 메뉴에 대한 라우트 추가 */}
                        {renderMenuName === "학생관리" && <Route path="/student" element={<Student />} />}
                        {renderMenuName === "출결관리" && <Route path="/attendance-management" element={<Attendance_Management />} />}
                        {renderMenuName === "출결현황" && <Route path="/attendance" element={<Attendance />} />}
                        {renderMenuName === "공지사항" && <Route path="/notice" element={<Notice />} />}
                        {renderMenuName === "설정" && <Route path="/setting" element={<Setting />} />}
                    </Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
