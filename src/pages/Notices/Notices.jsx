import React, { useState } from 'react';
import '../../styles/Notices.css';

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
        <div className={'container'}>
            <div className={'wrap'}>
                <div className={'notice-header'}>
                    <div className={'notice-title'}>
                        공지사항
                    </div>
                </div>
                <div className={'button-wrap'}>
                    <div className={'button'} onClick={openNoticeModal}>
                        <div className={'button-text'}>
                            공지작성
                        </div>
                    </div>
                    <div className={'button'} onClick={openSurveyModal}>
                        <div className={'button-text'}>
                            설문작성
                        </div>
                    </div>
                </div>
                <div className={'notice-section'}>
                    <div className={'notice-item'}>
                        <div className={'notice-title'}>
                            2024학년도 1학기 시간표 안내
                        </div>
                        <div className={'notice-date'}>
                            2024.03.15
                        </div>
                        <div className={'notice-content'}>
                            안녕하세요. 2024학년도 1학기 시간표를 안내드립니다. 첨부된 파일을 확인해 주시기 바랍니다.
                        </div>
                    </div>
                    <div className={'notice-item'}>
                        <div className={'notice-title'}>
                            학생 상담 주간 운영 안내
                        </div>
                        <div className={'notice-date'}>
                            2024.03.10
                        </div>
                        <div className={'notice-content'}>
                            3월 18일부터 22일까지 학생 상담 주간이 운영됩니다. 상담 신청은 학과 사무실에서 가능합니다.
                        </div>
                    </div>
                    <div className={'notice-item'}>
                        <div className={'notice-title'}>
                            동아리 신청 마감 안내
                        </div>
                        <div className={'notice-date'}>
                            2024.03.05
                        </div>
                        <div className={'notice-content'}>
                            2024학년도 1학기 동아리 신청이 3월 15일에 마감됩니다. 관심 있는 학생들은 서둘러 신청해 주시기 바랍니다.
                        </div>
                    </div>
                    <div className={'notice-item'}>
                        <div className={'notice-title'}>
                            도서관 이용시간 변경 안내
                        </div>
                        <div className={'notice-date'}>
                            2024.03.01
                        </div>
                        <div className={'notice-content'}>
                            3월부터 도서관 이용시간이 변경됩니다. 평일 09:00~22:00, 주말 10:00~17:00
                        </div>
                    </div>
                </div>
                <div className={'pagination'}>
                    <div className={'pagination-buttons'}>
                        <div className={'button'}>
                            <div className={'button-text'}>
                                1
                            </div>
                        </div>
                        <div className={'button'}>
                            <div className={'button-text'}>
                                2
                            </div>
                        </div>
                        <div className={'button'}>
                            <div className={'button-text'}>
                                3
                            </div>
                        </div>
                        <div className={'button'}>
                            <div className={'button-text'}>
                                4
                            </div>
                        </div>
                        <div className={'button'}>
                            <div className={'button-text'}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'wrap'}>
                <div className={'survey-section'}>
                    <div className={'survey-header'}>
                        <div className={'survey-title'}>
                            설문조사
                        </div>
                    </div>
                    <div className={'survey-content'}>
                        <div className={'survey-item'}>
                            <div className={'survey-title'}>
                                2024학년도 학생 만족도 조사
                            </div>
                            <div className={'survey-date'}>
                                ~2024.03.31
                            </div>
                            <div className={'survey-description'}>
                                학교 생활 및 교육과정에 대한 학생들의 의견을 수렴하고자 합니다. 많은 참여 부탁드립니다.
                            </div>
                            <div className={'survey-button'}>
                                <div className={'button-text'}>
                                    설문참여
                                </div>
                            </div>
                        </div>
                        <div className={'survey-item'}>
                            <div className={'survey-title'}>
                                급식 메뉴 선호도 조사
                            </div>
                            <div className={'survey-date'}>
                                ~2024.03.25
                            </div>
                            <div className={'survey-description'}>
                                다음 학기 급식 메뉴 구성을 위한 선호도 조사를 진행합니다.
                            </div>
                            <div className={'survey-button'}>
                                <div className={'button-text'}>
                                    설문참여
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'pagination'}>
                        <div className={'pagination-buttons'}>
                            <div className={'button'}>
                                <div className={'button-text'}>
                                    1
                                </div>
                            </div>
                            <div className={'button'}>
                                <div className={'button-text'}>
                                    2
                                </div>
                            </div>
                            <div className={'button'}>
                                <div className={'button-text'}>
                                    3
                                </div>
                            </div>
                            <div className={'button'}>
                                <div className={'button-text'}>
                                    4
                                </div>
                            </div>
                            <div className={'button'}>
                                <div className={'button-text'}>
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isNoticeModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeNoticeModal}>&times;</span>
                        <h2>공지작성</h2>
                        <form onSubmit={handleNoticeSubmit}>
                            <div className="form-group">
                                <label htmlFor="noticeTitle">제목</label>
                                <input
                                    type="text"
                                    id="noticeTitle"
                                    value={noticeTitle}
                                    onChange={(e) => setNoticeTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noticeDate">날짜</label>
                                <input
                                    type="date"
                                    id="noticeDate"
                                    value={noticeDate}
                                    onChange={(e) => setNoticeDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noticeContent">내용</label>
                                <textarea
                                    id="noticeContent"
                                    value={noticeContent}
                                    onChange={(e) => setNoticeContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">제출</button>
                        </form>
                    </div>
                </div>
            )}

            {isSurveyModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeSurveyModal}>&times;</span>
                        <h2>설문작성</h2>
                        <form onSubmit={handleSurveySubmit}>
                            <div className="form-group">
                                <label htmlFor="surveyTitle">제목</label>
                                <input
                                    type="text"
                                    id="surveyTitle"
                                    value={surveyTitle}
                                    onChange={(e) => setSurveyTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surveyDate">날짜</label>
                                <input
                                    type="date"
                                    id="surveyDate"
                                    value={surveyDate}
                                    onChange={(e) => setSurveyDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surveyDescription">내용</label>
                                <textarea
                                    id="surveyDescription"
                                    value={surveyDescription}
                                    onChange={(e) => setSurveyDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">제출</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;