import React from 'react';
import styles from "../../styles/Attendance.module.css";
import Search from '../../assets/icons/search.svg?react';

const Attendance = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2wrap}>
                    <h2 className={styles.h2Text}>출석률 현황</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={styles.selectButton}>오늘</button>
                    <button className={styles.nonSelectButton}>지시별</button>
                    <button className={styles.nonSelectButton}>수업과목별</button>
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
                                <div className={styles.attendanceTd}>95%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.rowWrap} >
                <div className={styles.h2wrap}>
                    <h2 className={styles.h2Text}>출결 현황</h2>
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            전체 수업
                        </div>
                        <div className={styles.infoBoxContent}>
                            32회
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            출석률
                        </div>
                        <div className={styles.infoBoxContent}>
                            91.5%
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBoxTitle}>
                            평균 참석
                        </div>
                        <div className={styles.infoBoxContent}>
                            29회
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Attendance;
