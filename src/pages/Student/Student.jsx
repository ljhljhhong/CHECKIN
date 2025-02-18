import React from 'react';
import "../../styles/Student.css";

const Root = ({}) => {
    React.useEffect(() => {
        // Initialize the code
        return () => {}
    }, [])

    return (
        <div className={'container'}>
            <div className={'wrap'}>
                <div className={'h2-wrap'}>
                    <h2 className={'h2-text'}>학생 관리</h2>
                </div>
                <div className={'button-wrap'}>
                    <button className={'select-button'}>전체 학생</button>
                    <button className={'non-select-button'}>학년별</button>
                    <button className={'non-select-button'}>반별</button>
                    <button className={'non-select-button'}>
                        <div className={'img'}></div>
                        학생추가
                    </button>
                </div>
                <div className={'selectbox-wrap'}>
                    <select id={'search'}>
                        <option value="search_condition">검색조건</option>
                        <option value="">이름</option>
                        <option value="">학과</option>
                        <option value="">학년</option>
                    </select>
                    <div className={'input-wrap'}>
                        <img src="https://image-resource.creatie.ai/140826466779355/140826466779357/ef0d5f9b0dd3ddc582782e4f4b44dd00.png" className={'svg'}/>
                        <div className={'input'}>
                            <input type='text' className={'text---3'} placeholder='검색어를 입력하세요'/>
                        </div>
                    </div>
                </div>
                
                <div className={'table'}>
                    <div className={'thead'}>
                        <div className={'tr'}>
                            <div className={'th'}>
                                <div className={'text--10'}>학과</div>
                            </div>
                            <div className={'th'}>
                                <div className={'text--11'}>학번</div>
                            </div>
                            <div class    ={'th'}>
                                <div className={'text--12'}>이름</div>
                            </div>
                            <div className={'th'}>
                                <div className={'text--13'}>전화번호</div>
                            </div>
                            <div className={'th'}>
                                <div className={'text--14'}>이메일</div>
                            </div>
                            <div className={'th'}>
                                <div className={'text--15'}>학년</div>
                            </div>
                        </div>
                    </div>
                    <div className={'tbody'}>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--16'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024001'}>2024001</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--17'}>고정윤</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-1234-5678'}>010-1234-5678</div>
                            </div>
                            <div className={'td'}>
                                <div className={'jykoemailcom'}>jyko@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-1'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--18'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2023015'}>2023015</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--19'}>김준식</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-9876-5432'}>010-9876-5432</div>
                            </div>
                            <div className={'td'}>
                                <div className={'jskimemailcom'}>jskim@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--20'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024003'}>2024003</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--21'}>박민지</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-2345-6789'}>010-2345-6789</div>
                            </div>
                            <div className={'td'}>
                                <div className={'mjparkemailcom'}>mjpark@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-3'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--22'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024004'}>2024004</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--23'}>이수진</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-3456-7890'}>010-3456-7890</div>
                            </div>
                            <div className={'td'}>
                                <div className={'sjleeemailcom'}>sjlee@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-4'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--24'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2023005'}>2023005</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--25'}>정대현</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-4567-8901'}>010-4567-8901</div>
                            </div>
                            <div className={'td'}>
                                <div className={'dhjungemailcom'}>dhjung@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-5'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--26'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024006'}>2024006</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--27'}>최예린</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-5678-9012'}>010-5678-9012</div>
                            </div>
                            <div className={'td'}>
                                <div className={'yrchoiemailcom'}>yrchoi@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-6'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--28'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024007'}>2024007</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--29'}>한상우</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-6789-0123'}>010-6789-0123</div>
                            </div>
                            <div className={'td'}>
                                <div className={'swhanemailcom'}>swhan@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-7'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--30'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2023008'}>2023008</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--31'}>강민서</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-7890-1234'}>010-7890-1234</div>
                            </div>
                            <div className={'td'}>
                                <div className={'mskangemailcom'}>mskang@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-8'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--32'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024009'}>2024009</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--33'}>임지원</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-8901-2345'}>010-8901-2345</div>
                            </div>
                            <div className={'td'}>
                                <div className={'jwlimemailcom'}>jwlim@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-9'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'text--34'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-2024010'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text--35'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-010-9012-3456'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'hjsongemailcom'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'text-10'}>1학년</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;