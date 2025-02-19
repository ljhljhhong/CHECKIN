import React from 'react';
import "../../styles/Home.css";
import Search from '../../assets/icons/search.svg?react';


const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
    <div className={'container'}>
        <div className={'wrap'}>
            <div className={'h2-wrap'}>
                <h2 className={'h2-text'}>홈 대시보드</h2>
            </div>
            <div className={'button-wrap'}>
                <button className={'select-button'}>오늘</button>
                <button className={'non-select-button'}>이번 주</button>
                <button className={'non-select-button'}>저번 달</button>
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
            <div className={'info-wrap'}>
                <div className={'infobox bk-blue'}>
                    <div className={'infobox-title'}>
                        <div className={'infobox-text color-blue'}>
                            총 학생 수
                        </div>
                    </div>
                    <div className={'infobox-content'}>
                        <div className={'infobox-content-text'}>
                            128명
                        </div>
                    </div>
                </div>
                <div className={'infobox bk-green'}>
                    <div className={'infobox-title'}>
                        <div className={'infobox-text color-green'}>
                            오늘 출석률
                        </div>
                    </div>
                    <div className={'infobox-content'}>
                        <div className={'infobox-content-text'}>
                            95.3%
                        </div>
                    </div>
                </div>
                <div className={'infobox bk-purple'}>
                    <div className={'infobox-title'}>
                        <div className={'infobox-text color-purple'}>
                            이번 주 출석률
                        </div>
                    </div>
                    <div className={'infobox-content'}>
                        <div className={'infobox-content-text'}>
                            92.8%
                        </div>
                    </div>
                </div>
                <div className={'infobox bk-orange'}>
                    <div className={'infobox-title '}>
                        <div className={'infobox-text color-orange'}>
                            이번 달 출석률
                        </div>
                    </div>
                    <div className={'infobox-content'}>
                        <div className={'infobox-content-text'}>
                            91.5%
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bar-wrap'}>
                <div className={'bar-wrap-h3'}>
                    <h3 className='bar-wrap-h3-text'>최근 출결 현황</h3>
                </div>
                <div className={'progress-wrap'}>
                    <progress value={85} min={0} max={100}></progress>
                    <div className={'progress-text'}>
                        95%
                    </div>
                </div>
            </div>
        </div>

        <div className={'col-wrap'}>
            <div className='notice'>
                <h2>공지사항</h2>
                <div className='notice-box'>
                    <div className='nb'>
                        <div className={'notice-box-date-text'}>
                            2024.01.15
                        </div>
                        <div className={'notice-box-title-text'}>
                            2024년 1학기 수업 일정 안내
                        </div>
                    </div>
                </div>
                <div className='notice-box'>
                    <div className='nb'>
                        <div className={'notice-box-date-text'}>
                            2024.01.15
                        </div>
                        <div className={'notice-box-title-text'}>
                            2024년 1학기 수업 일정 안내
                        </div>
                    </div>
                </div>
                <div className='notice-box'>
                    <div className='nb'>
                        <div className={'notice-box-date-text'}>
                            2024.01.15
                        </div>
                        <div className={'notice-box-title-text'}>
                            2024년 1학기 수업 일정 안내
                        </div>
                    </div>
                </div>
            </div>
            <div className="notice">
                <h2>공지사항</h2>
                <div className='notice-box'>
                    <div className='nb'>
                        <div className={'notice-box-date-text'}>
                            2024.01.15
                        </div>
                        <div className={'notice-box-title-text'}>
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
