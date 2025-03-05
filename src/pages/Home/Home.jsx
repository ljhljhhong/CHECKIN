import React from 'react';
import styles from "../../styles/Home.module.css";
import Search from '../../assets/icons/search.svg?react';


const Root = ({ }) => {
    React.useEffect(() => {
        // Initialize the code
        return () => { }
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2Wrap}>
                    <h2 className={styles.h2Text}>홈 대시보드</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={styles.todayButton}>오늘</button>
                    <button className={styles.nonSelectButton}>이번 주</button>
                    <button className={styles.nonSelectButton}>저번 달</button>
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
                <div className={styles.infoWrap}>
                    <div className={`${styles.infobox} ${styles.bkBlue}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorBlue}`}>
                                총 학생 수
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                128명
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkGreen}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorGreen}`}>
                                오늘 출석률
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                95.3%
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkPurple}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorPurple}`}>
                                이번 주 출석률
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                92.8%
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkOrange}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorOrange}`}>
                                이번 달 출석률
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                91.5%
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.barWrap}>
                    <div className={styles.barWrapH3}>
                        <h3 className={styles.barWrapH3Text}>최근 출결 현황</h3>
                    </div>
                    <div className={styles.progressWrap}>
                        <progress value={85} min={0} max={100}></progress>
                        <div className={styles.progressText}>
                            95%
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.colWrap}>
                <div className={styles.notice}>
                    <h2>공지사항</h2>
                    <div className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                2024.01.15
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                2024년 1학기 수업 일정 안내
                            </div>
                        </div>
                    </div>
                    <div className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                2024.01.15
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                2024년 1학기 수업 일정 안내
                            </div>
                        </div>
                    </div>
                    <div className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                2024.01.15
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                2024년 1학기 수업 일정 안내
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.notice}>
                    <h2>공지사항</h2>
                    <div className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                2024.01.15
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                2024년 1학기 수업 일정 안내
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Root
