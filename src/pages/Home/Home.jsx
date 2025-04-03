import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import Search from '../../assets/icons/search.svg?react';


const Root = ({ }) => {

    React.useEffect(() => {
        // Initialize the code
        return () => { }
    }, [])

    {/* 전체 기간 80%에 근접한 학생들 명단 */ }
    const totalDuration = [
        { name: "김민수", percentage: 82 },
        { name: "이지원", percentage: 80 },
        { name: "박준호", percentage: 84 }
    ];

    {/* 차시별 80%에 근접한 학생들 명단 */ }
    const lessonStep = [
        { name: "최서연", percentage: 83 },
        { name: "정다은", percentage: 81 }
    ];

    {/* 수업별 80%에 근접한 학생들 명단 */ }
    const subjectStep = [
        { name: "장현우", percentage: 84 },
        { name: "송민지", percentage: 82 }
    ];

    const TotalDuration = () => {
        return (
            <>
                {totalDuration.map((td, i) => (
                    <div key={i} className={styles.warningGroup}>
                        <div className={styles.warningGroupName}>
                            {td.name}
                        </div>
                        <div className={styles.warningGroupPercent}>
                            {td.percentage}%
                        </div>
                    </div>
                ))}
            </>
        );
    };

    const LessonStep = () => {
        return (
            <>
                {lessonStep.map((ls, i) => (
                    <div key={i} className={styles.warningGroup}>
                        <div className={styles.warningGroupName}>
                            {ls.name}
                        </div>
                        <div className={styles.warningGroupPercent}>
                            {ls.percentage}%
                        </div>
                    </div>
                ))}
            </>
        );
    };

    const SubjectStep = () => {
        return (
            <>
                {subjectStep.map((ss, i) => (
                    <div key={i} className={styles.warningGroup}>
                        <div className={styles.warningGroupName}>
                            {ss.name}
                        </div>
                        <div className={styles.warningGroupPercent}>
                            {ss.percentage}%
                        </div>
                    </div>
                ))}
            </>
        );
    };

    {/* 공지사항 */ }
    const notices = [
        { date: "2024.01.15", title: "2024년 1학기 수업 일정 안내" },
        { date: "2024.02.10", title: "졸업식 안내" },
        { date: "2024.03.05", title: "신입생 오리엔테이션 일정" }
    ];

    {/* 설문조사 */ }
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

    {/* 현재 시간 나타내는 부분 */}
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const tick = () => setDate(new Date());
        const timeId = setInterval(tick, 1000);

        return () => clearInterval(timeId);
    }, []);

    const CurrentTime = () => {
        const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const dayOfWeek = daysOfWeek[date.getDay()]; // 요일 변환
        const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${dayOfWeek})`;

        return (
            <>
                <div className={styles.currentTimeContainer}>
                    <div className={styles.currentTime}>{date.toLocaleTimeString()}</div>
                    <div className={styles.currentDate}>{formattedDate}</div>
                </div>
            </>
        );
    };


    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2Wrap}>
                </div>
                {/* 현재 날짜 및 시간 */}
                <div className={styles.infoWrap2}>
                    <div className={styles.h3}><div className={styles.text}><CurrentTime/></div></div>
                </div>
                {/* 출석률 85% 이하 위험군 학생 */}
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
                                출석
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
                                지각
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
                                결석
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

            {/* 전체 기간 위험군 , 차시별 위험군, 수업별 위험군 */}
            <div className={styles.colWrap}>
                <div className={styles.notice}>
                    <div>
                        <h2>전체 기간 위험군(출석률 85% 이하)</h2>
                    </div>
                    <TotalDuration />
                </div>
                <div className={styles.notice}>
                    <div>
                        <h2>차시별 위험군(출석률 85% 이하)</h2>
                    </div>
                    <LessonStep />
                </div>
                <div className={styles.notice}>
                    <div>
                        <h2>수업별 위험군(출석률 85% 이하)</h2>
                    </div>
                    <SubjectStep />
                </div>
            </div>

            {/* 공지사항, 설문조사 */}
            <div className={styles.colWrap}>
                <div className={styles.notice}>
                    <div className={styles.noticeHeader}>
                        <h2>공지사항</h2>
                        <a href="javascript:void(0);">더보기 +</a>
                    </div>
                    <NoticeContent />
                </div>
                <div className={styles.notice}>
                    <div className={styles.noticeHeader}>
                        <h2>공지사항</h2>
                        <a href="javascript:void(0);">더보기 +</a>
                    </div>
                    <SurveyContent />
                </div>
            </div>
        </div>
    );
};
export default Root
