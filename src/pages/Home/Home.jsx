import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import Search from '../../assets/icons/search.svg?react';


const Root = ({ }) => {
    const [selectBtn, setSelectBtn] = useState('today');
    const clickBtn = (btnName) => {
        setSelectBtn(btnName);
    }
    React.useEffect(() => {
        // Initialize the code
        return () => { }
    }, [])

    const notices = [
        { date: "2024.01.15", title: "2024년 1학기 수업 일정 안내" },
        { date: "2024.02.10", title: "졸업식 안내" },
        { date: "2024.03.05", title: "신입생 오리엔테이션 일정" }
    ];

    const surveys = [
        { date: "2024.01.15", title: "2024년 교육과정 만족도 조사" },
        { date: "2024.02.10", title: "겨울방학 특강 신청 안내" },
        { date: "2024.03.05", title: "2023년 2학기 성적 발표" }
    ];

    const NoticeContent = () => {
        return (
            <>
                {notices.map((notice, i) => (
                    <div key={i} className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                {notice.date}
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                {notice.title}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    const SurveyContent = () => {
        return (
            <>
                {notices.map((surveys, i) => (
                    <div key={i} className={styles.noticeBox}>
                        <div className={styles.nb}>
                            <div className={styles.noticeBoxDateText}>
                                {surveys.date}
                            </div>
                            <div className={styles.noticeBoxTitleText}>
                                {surveys.title}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };


    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2Wrap}>
                    <h2 className={styles.h2Text}>홈 대시보드</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button className={'today' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('today')} >오늘</button>
                    <button className={'week' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('week')} >이번 주</button>
                    <button className={'month' == selectBtn ? styles.selectButton : styles.nonSelectButton} onClick={() => clickBtn('month')} >저번 달</button>
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
                    <NoticeContent />
                </div>
                <div className={styles.notice}>
                    <h2>설문조사</h2>
                    <SurveyContent />
                </div>
            </div>
        </div>
    );
};
export default Root
