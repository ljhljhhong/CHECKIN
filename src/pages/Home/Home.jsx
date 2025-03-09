import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import Search from '../../assets/icons/search.svg?react';


const Root = ({ }) => {
    
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
                <div className={styles.infoWrap}>
                    <div className={`${styles.infobox} ${styles.bkBlue}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorBlue}`}>
                                전체 학생
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                15명
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkGreen}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorGreen}`}>
                                09:00 ~ 09:59 출석
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                12명
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkPurple}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorPurple}`}>
                                09:00 ~ 09:59 지각
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                1명
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.infobox} ${styles.bkOrange}`}>
                        <div className={styles.infoboxTitle}>
                            <div className={`${styles.infoboxText} ${styles.colorOrange}`}>
                                09:00 ~ 09:59 결석
                            </div>
                        </div>
                        <div className={styles.infoboxContent}>
                            <div className={styles.infoboxContentText}>
                                2명
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 공지사항, 설문조사 */}
            <div className={styles.colWrap}>
                <div className={styles.notice}>
                    <div>
                        <h2>공지사항</h2>   
                        <h3>더보기 +</h3>
                    </div>
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
