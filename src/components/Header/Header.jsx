import {React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Header.scss';
import Home from '../../assets/icons/Home.svg?react';
import HS from '../../assets/icons/HomeSelect.svg?react';
import MG from '../../assets/icons/Mangement.svg?react';
import MGSelect from '../../assets/icons/MangementSelect.svg?react';
import Notice from '../../assets/icons/Notice.svg?react';
import NoticeSelect from '../../assets/icons/NoticeSelect.svg?react';
import Setting from '../../assets/icons/setting.svg?react';
import SettingSelect from '../../assets/icons/SettingSelect.svg?react';
import Student from '../../assets/icons/Student.svg?react';
import StudentSelect from '../../assets/icons/StudentSelect.svg?react';
import CA from '../../assets/icons/CurrentAtt.svg?react';
import CASelect from '../../assets/icons/CurrentAttSelect.svg?react';
import Schedule from '../../assets/icons/Schedule.svg?react';
import ScheduleSelect from '../../assets/icons/ScheduleSelect.svg?react';


import '../../reset.css';

// 네비게이션 아이템 컴포넌트
const NavItem = ({ icon: Icon, label, isActive, onClick }) => {
    return (
        <div className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
            <Icon className="icon" />
            <span className="text">{label}</span>
        </div>
    );
};

const Root = () => {
    const [menu, setMenu] = useState(() => {
        return sessionStorage.getItem('menu') || '홈';
    }); // 현재 선택된 메뉴 상태
    console.log('Header useState 실행');
    const navigate = useNavigate(); // useNavigate 훅 추가
    const sendSelectMenu = (menu) => {
        setMenu(menu);
        sessionStorage.setItem('menu', menu);
        // selectMenu(menu);
        switch (menu) {
            case '로그인':
                navigate('/');
                break;
            case '홈':
                navigate('/home');
                break;
            case '학생관리':
                navigate('/student');
                break;
            case '출결관리':
                navigate('/attendance-management');
                break;
            case '출결현황':
                navigate('/attendance');
                break;
            case '공지사항':
                navigate('/notice');
                break;
            default:
                navigate('/');
        }
    }
    return (
        <div className="aside">
            <div className="aside-content">
                <h1 className="title">미지의 세계</h1>
                <nav className="nav">
                    <NavItem icon={menu === '홈' ? HS : Home} label="홈" isActive={menu === '홈'} onClick={() => sendSelectMenu('홈')} />
                    <NavItem icon={menu === '학생관리' ? StudentSelect : Student} label="학생관리" isActive={menu === '학생관리'} onClick={() => sendSelectMenu('학생관리')} />
                    <NavItem icon={menu === '출결관리' ? MGSelect : MG} label="출결관리" isActive={menu === '출결관리'} onClick={() => sendSelectMenu('출결관리')} />
                    <NavItem icon={menu === '출결현황' ? CASelect : CA} label="출결현황" isActive={menu === '출결현황'} onClick={() => sendSelectMenu('출결현황')} />
                    <NavItem icon={menu === '공지사항' ? NoticeSelect : Notice} label="공지사항" isActive={menu === '공지사항'} onClick={() => sendSelectMenu('공지사항')} />
                    <NavItem icon={menu === '일정관리' ? ScheduleSelect : Schedule} label="일정관리" isActive={menu === '일정관리'} onClick={() => sendSelectMenu('일정관리')} />
                </nav>
                <button className="logout-Btn">로그아웃</button>
            </div>
        </div>
    );
};

export default Root;
