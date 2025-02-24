import React from 'react';
import '../../styles/Header.scss';
import HS from '../../assets/icons/HomeSelect.svg?react';
import MG from '../../assets/icons/Mangement.svg?react';
import Notice from '../../assets/icons/Notice.svg?react';
import Setting from '../../assets/icons/setting.svg?react';
import Student from '../../assets/icons/Student.svg?react';
import CA from '../../assets/icons/CurrentAtt.svg?react';
import '../../reset.css';

// 네비게이션 아이템 컴포넌트
const NavItem = ({ icon: Icon, label, isActive }) => {
    return (
        <div className={`nav-item ${isActive ? 'active' : ''}`}>
            <Icon className="icon" />
            <span className="text">{label}</span>
        </div>
    );
};

const Root = () => {
    return (
        <div className="aside">
            <div className="aside-content">
                <h1 className="title">미지의 세계</h1>
                <nav className="nav">
                    <NavItem icon={HS} label="홈" isActive />
                    <NavItem icon={Student} label="학생관리" />
                    <NavItem icon={MG} label="출결관리" />
                    <NavItem icon={CA} label="출결현황" />
                    <NavItem icon={Notice} label="공지사항" />
                    <NavItem icon={Setting} label="설정" />
                </nav>
            </div>
        </div>
    );
};

export default Root;
