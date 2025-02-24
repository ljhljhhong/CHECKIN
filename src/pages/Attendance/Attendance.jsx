import React from 'react';
import "../../styles/Attendance.css";
import Search from '../../assets/icons/search.svg?react';

const Attendance = () => {
    return (
        <div className={'container'}>
                <div className={'wrap'}>
                    <div className={'h2-wrap'}>
                        <h2 className={'h2-text'}>출석률 현황</h2>
                    </div>
                    <div className={'button-wrap'}>
                        <button className={'select-button'}>오늘</button>
                        <button className={'non-select-button'}>지시별</button>
                        <button className={'non-select-button'}>수업과목별</button>
                    </div>
                    <div className={'selectbox-wrap'}>
                        <select id={'search'}>
                            <option value="search_condition">검색조건</option>
                            <option value="">이름</option>
                            <option value="">학과</option>
                            <option value="">학년</option>
                        </select>
                        <div className={'input-wrap'}>
                            <Search id="12:02916" className={'svg'}/>
                            <div className={'input'}>
                                <input type='text' className={'text---3'} placeholder='검색어를 입력하세요'/>
                            </div>
                        </div>
                    </div>
                    <div className={'table'}>
                        <div className={'thead'}>
                            <div className={'tr'}>
                                <div className={'th'}>
                                <div className={'department'}>이름</div>
                                </div>
                                <div className={'th'}>
                                    <div className={'classnumber'}>학번</div>
                                </div>
                                <div class={'th'}>
                                    <div className={'name'}>팀명</div>
                                </div>
                                <div className={'th'}>
                                    <div className={'attendance'}>출석률</div>
                                </div>
                            </div>
                        </div>
                        <div className={'tbody'}>
                            <div className={'tr'}>
                                <div className={'td'}>
                                <div className={'department'}>김준식</div>
                                </div>
                                <div className={'td'}>
                                    <div className={'classnumber'}>19120566</div>
                                </div>
                                <div className={'td'}>
                                    <div className={'name'}>세미콜론</div>
                                </div>
                                <div className={'td'}>
                                <div className={'attendance-td'}>95%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        
                
            </div>
    );
};

export default Attendance;
