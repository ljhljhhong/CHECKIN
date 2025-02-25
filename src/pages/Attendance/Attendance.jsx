import React, { useState } from 'react';
import styles from "../../styles/Attendance.module.css";
import Search from '../../assets/icons/search.svg?react';

const Attendance = () => {
    const [selectBtn, setSelectBtn] = useState('all');
    const clickBtn = (btnName) => {
        setSelectBtn(btnName);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2wrap}>
                    <h2 className={styles.h2Text}>출석률 현황</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={'all' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('all')}>전체</button>
                    <button className={'chasi' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('chasi')}>차시별</button>
                    <button className={'subject' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('subject')}>수업과목별</button>
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
                            <div className={styles.th}>
                                <div className={styles.department}>이름</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.classnumber}>학번</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.name}>팀명</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.attendance}>출석률</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tbody}>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>김준식</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>19120566</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>세미콜론</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.attendanceTd}>
                                    <div className={styles.attendanceTdText}>95%</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>김준식</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>19120566</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>세미콜론</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.attendanceTd}>
                                    <div className={styles.attendanceTdText}>95%</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* <div className={styles.wrap} >
                <div className={styles.h2wrap}>
                    <h2 className={styles.h2Text}>출결 현황</h2>
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            <div className={styles.infoBoxTitleText} >
                                전체 수업
                            </div>
                        </div>
                        <div className={styles.infoBoxContent}>
                            <div className={styles.infoBoxContentText} >
                                32회
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            <div className={styles.infoBoxTitleText} >
                                출석률
                            </div>
                        </div>
                        <div className={styles.infoBoxContent}>
                            <div className={styles.infoBoxContentText} >
                                91.5%
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            <div className={styles.infoBoxTitleText} >
                                평균 참석
                            </div>
                        </div>
                        <div className={styles.infoBoxContent}>
                            <div className={styles.infoBoxContentText} >
                                29회
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>

    );
};

export default Attendance;
