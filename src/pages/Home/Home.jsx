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
            <div className={'div-5'}>
                <div className={'div-6'}>
                    <div className={'div-7'}>
                        <div className={'div-8'}>
                            <div className={'text---'}>
                                총 학생 수
                            </div>
                        </div>
                        <div className={'div-9'}>
                            <div className={'text-128'}>
                                128명
                            </div>
                        </div>
                    </div>
                    <div className={'div-10'}>
                        <div className={'div-11'}>
                            <div className={'text---4'}>
                                오늘 출석률
                            </div>
                        </div>
                        <div className={'div-12'}>
                            <div className={'text-953'}>
                                95.3%
                            </div>
                        </div>
                    </div>
                    <div className={'div-13'}>
                        <div className={'div-14'}>
                            <div className={'text----1'}>
                                이번 주 출석률
                            </div>
                        </div>
                        <div className={'div-15'}>
                            <div className={'text-928'}>
                                92.8%
                            </div>
                        </div>
                    </div>
                    <div className={'div-16'}>
                        <div className={'div-17'}>
                            <div className={'text----2'}>
                                이번 달 출석률
                            </div>
                        </div>
                        <div className={'div-18'}>
                            <div className={'text-915'}>
                                91.5%
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'div-19'}>
                    <div className={'h3'}>
                        <div className={'text----3'}>
                            최근 출결 현황
                        </div>
                    </div>
                    <div className={'div-20'}>
                        <div className={'div-21'}>
                            <div className={'div-22'}>
                            </div>
                        </div>
                        <div className={'div-23'}>
                            <div className={'text-95'}>
                                95%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
</div>
);
};
export default Root
