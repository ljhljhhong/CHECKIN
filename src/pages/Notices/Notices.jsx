import React, { useState } from 'react';
import styles from '../../styles/Notices.module.css';

const Root = () => {
    const [isNoticeModalOpen, setNoticeModalOpen] = useState(false);
    const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeDate, setNoticeDate] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [surveyTitle, setSurveyTitle] = useState('');
    const [surveyDate, setSurveyDate] = useState('');
    const [surveyDescription, setSurveyDescription] = useState('');

    const openNoticeModal = () => setNoticeModalOpen(true);
    const closeNoticeModal = () => setNoticeModalOpen(false);

    const openSurveyModal = () => setSurveyModalOpen(true);
    const closeSurveyModal = () => setSurveyModalOpen(false);

    const handleNoticeSubmit = (e) => {
        e.preventDefault();
        // 공지사항 제출 로직 추가
        console.log('공지사항 제출:', { noticeTitle, noticeDate, noticeContent });
        closeNoticeModal();
    };

    const handleSurveySubmit = (e) => {
        e.preventDefault();
        // 설문조사 제출 로직 추가
        console.log('설문조사 제출:', { surveyTitle, surveyDate, surveyDescription });
        closeSurveyModal();
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.noticeHeader}>
                    <div className={styles.noticeTitle}>
                        공지사항
                    </div>
                </div>
                <div className={styles.buttonWrap}>
                    <div className={styles.button} onClick={openNoticeModal}>
                        <div className={styles.buttonText}>
                            공지작성
                        </div>
                    </div>
                    <div className={styles.button} onClick={openSurveyModal}>
                        <div className={styles.buttonText}>
                            설문작성
                        </div>
                    </div>
                </div>
                <div className={styles.noticeSection}>
                    <div className={styles.noticeItem}>
                        <div className={styles.noticeTitle}>
                            2024학년도 1학기 시간표 안내
                        </div>
                        <div className={styles.noticeDate}>
                            2024.03.15
                        </div>
                        <div className={styles.noticeContent}>
                            안녕하세요. 2024학년도 1학기 시간표를 안내드립니다. 첨부된 파일을 확인해 주시기 바랍니다.
                        </div>
                    </div>
                    <div className={styles.noticeItem}>
                        <div className={styles.noticeTitle}>
                            학생 상담 주간 운영 안내
                        </div>
                        <div className={styles.noticeDate}>
                            2024.03.10
                        </div>
                        <div className={styles.noticeContent}>
                            3월 18일부터 22일까지 학생 상담 주간이 운영됩니다. 상담 신청은 학과 사무실에서 가능합니다.
                        </div>
                    </div>
                    <div className={styles.noticeItem}>
                        <div className={styles.noticeTitle}>
                            동아리 신청 마감 안내
                        </div>
                        <div className={styles.noticeDate}>
                            2024.03.05
                        </div>
                        <div className={styles.noticeContent}>
                            2024학년도 1학기 동아리 신청이 3월 15일에 마감됩니다. 관심 있는 학생들은 서둘러 신청해 주시기 바랍니다.
                        </div>
                    </div>
                    <div className={styles.noticeItem}>
                        <div className={styles.noticeTitle}>
                            도서관 이용시간 변경 안내
                        </div>
                        <div className={styles.noticeDate}>
                            2024.03.01
                        </div>
                        <div className={styles.noticeContent}>
                            3월부터 도서관 이용시간이 변경됩니다. 평일 09:00~22:00, 주말 10:00~17:00
                        </div>
                    </div>
                </div>
                <div className={styles.pagination}>
                    <div className={styles.paginationButtons}>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>
                                1
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>
                                2
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>
                                3
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>
                                4
                            </div>
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonText}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.surveySection}>
                    <div className={styles.surveyHeader}>
                        <div className={styles.surveyTitle}>
                            설문조사
                        </div>
                    </div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyItem}>
                            <div className={styles.surveyTitle}>
                                2024학년도 학생 만족도 조사
                            </div>
                            <div className={styles.surveyDate}>
                                ~2024.03.31
                            </div>
                            <div className={styles.surveyDescription}>
                                학교 생활 및 교육과정에 대한 학생들의 의견을 수렴하고자 합니다. 많은 참여 부탁드립니다.
                            </div>
                            <div className={styles.surveyButton}>
                                <div className={styles.buttonText}>
                                    설문참여
                                </div>
                            </div>
                        </div>
                        <div className={styles.surveyItem}>
                            <div className={styles.surveyTitle}>
                                급식 메뉴 선호도 조사
                            </div>
                            <div className={styles.surveyDate}>
                                ~2024.03.25
                            </div>
                            <div className={styles.surveyDescription}>
                                다음 학기 급식 메뉴 구성을 위한 선호도 조사를 진행합니다.
                            </div>
                            <div className={styles.surveyButton}>
                                <div className={styles.buttonText}>
                                    설문참여
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        <div className={styles.paginationButtons}>
                            <div className={styles.button}>
                                <div className={styles.buttonText}>
                                    1
                                </div>
                            </div>
                            <div className={styles.button}>
                                <div className={styles.buttonText}>
                                    2
                                </div>
                            </div>
                            <div className={styles.button}>
                                <div className={styles.buttonText}>
                                    3
                                </div>
                            </div>
                            <div className={styles.button}>
                                <div className={styles.buttonText}>
                                    4
                                </div>
                            </div>
                            <div className={styles.button}>
                                <div className={styles.buttonText}>
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isNoticeModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeNoticeModal}>&times;</span>
                        <h2>공지작성</h2>
                        <form onSubmit={handleNoticeSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="noticeTitle">제목</label>
                                <input
                                    type="text"
                                    id="noticeTitle"
                                    value={noticeTitle}
                                    onChange={(e) => setNoticeTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="noticeDate">날짜</label>
                                <input
                                    type="date"
                                    id="noticeDate"
                                    value={noticeDate}
                                    onChange={(e) => setNoticeDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="noticeContent">내용</label>
                                <textarea
                                    id="noticeContent"
                                    value={noticeContent}
                                    onChange={(e) => setNoticeContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>제출</button>
                        </form>
                    </div>
                </div>
            )}

            {isSurveyModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeSurveyModal}>&times;</span>
                        <h2>설문작성</h2>
                        <form onSubmit={handleSurveySubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="surveyTitle">제목</label>
                                <input
                                    type="text"
                                    id="surveyTitle"
                                    value={surveyTitle}
                                    onChange={(e) => setSurveyTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="surveyDate">날짜</label>
                                <input
                                    type="date"
                                    id="surveyDate"
                                    value={surveyDate}
                                    onChange={(e) => setSurveyDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="surveyDescription">내용</label>
                                <textarea
                                    id="surveyDescription"
                                    value={surveyDescription}
                                    onChange={(e) => setSurveyDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>제출</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;