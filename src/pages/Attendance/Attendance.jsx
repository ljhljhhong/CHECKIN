import React, { useState } from 'react';
import styles from "../../styles/Attendance.module.css";
import Search from '../../assets/icons/search.svg?react';

const initialStudents = [
    { name: "김덕희", id: "20116861", team: "3팀", attendanceRate: "98%" },
    { name: "이영희", id: "20116862", team: "B팀", attendanceRate: "87%" },
    { name: "박민수", id: "20116863", team: "A팀", attendanceRate: "90%" },
    { name: "최서연", id: "20116864", team: "C팀", attendanceRate: "95%" },
    { name: "정현우", id: "20116865", team: "B팀", attendanceRate: "85%" },
    { name: "김동성", id: "20116866", team: "B팀", attendanceRate: "88%" },
    { name: "김동현", id: "22210473", team: "A팀", attendanceRate: "92%" },
    { name: "김명재", id: "20116887", team: "B팀", attendanceRate: "96%" },
    { name: "김유찬", id: "17122727", team: "1팀", attendanceRate: "94%" },
    { name: "박규찬", id: "20117186", team: "1팀", attendanceRate: "89%" },
    { name: "박민준", id: "20118178", team: "3팀", attendanceRate: "91%" },
    { name: "선승한", id: "21113523", team: "3팀", attendanceRate: "83%" },
    { name: "이동현", id: "21113718", team: "1팀", attendanceRate: "97%" },
    { name: "이세영", id: "20117602", team: "2팀", attendanceRate: "99%" },
    { name: "조혜진", id: "23115270", team: "1팀", attendanceRate: "86%" },
];

const Attendance = () => {
    const [selectBtn, setSelectBtn] = useState('all');
    const clickBtn = (btnName) => setSelectBtn(btnName);

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2wrap}>
                    <h2 className={styles.h2Text}>출석률 현황</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={'all' === selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('all')}>전체</button>
                    <button className={'chasi' === selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('chasi')}>차시별</button>
                    <button className={'subject' === selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('subject')}>수업과목별</button>
                </div>
                <div className={styles.selectboxWrap}>
                    <select id={'search'}>
                        <option value="search_condition">검색조건</option>
                        <option value="">이름</option>
                        <option value="">학과</option>
                        <option value="">학년</option>
                    </select>
                    <div className={styles.inputWrap}>
                        <Search id="12:02916" className={styles.svg} />
                        <div className={styles.input}>
                            <input type='text' className={styles.text3} placeholder='검색어를 입력하세요' />
                        </div>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={styles.tr}>
                            <div className={styles.th}><div className={styles.department}>이름</div></div>
                            <div className={styles.th}><div className={styles.classnumber}>학번</div></div>
                            <div className={styles.th}><div className={styles.name}>팀명</div></div>
                            <div className={styles.th}><div className={styles.attendance}>출석률</div></div>
                        </div>
                    </div>
                    <div className={styles.tbody}>
                        {initialStudents.map((student, index) => (
                            <div key={index} className={styles.tr}>
                                <div className={styles.td}><div className={styles.department}>{student.name}</div></div>
                                <div className={styles.td}><div className={styles.classnumber}>{student.id}</div></div>
                                <div className={styles.td}><div className={styles.name}>{student.team}</div></div>
                                <div className={styles.td}>
                                    <div className={styles.attendanceTd2}>
                                        <div className={styles.attendanceTdBar}>
                                            <div className={styles.attendanceTdText2}>{student.attendanceRate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
