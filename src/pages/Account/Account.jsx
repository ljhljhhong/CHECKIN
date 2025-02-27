import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Account.css";

const Account = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // useNavigate 훅 추가
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("로그인 시도:", username, password);
    };

    const goToHome = () => {
        navigate('/home');
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <div className='loginTitle'>
                        미지의 세계
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">아이디</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="input-field"
                        />
                    </div>
                    <div className="action-buttons">
                        <button type="submit" className="login-button" onClick={() => {goToHome()}}>로그인</button>
                        <div className="extra-links">
                            <button type="button" className="loginButton">아이디 찾기</button>
                            <button type="button" className="passButton">비밀번호 찾기</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Account;
