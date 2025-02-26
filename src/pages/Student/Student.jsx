import React, { useState }from 'react';
import "../../styles/Student.css";

const Root = ({}) => {
    const [selectedButton, setSelectedButton] = useState('전체 학생');
    const [isStudentAddSelected, setIsStudentAddSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setIsStudentAddSelected(false);
    };

    const handleStudentAddClick = () => {
        setIsStudentAddSelected(true);
        setSelectedButton('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                    <button
                        className={selectedButton === '전체 학생' ? 'select-button' : 'non-select-button'}
                        onClick={() => handleButtonClick('전체 학생')}
                    >
                        전체 학생
                    </button>
                    <button
                        className={selectedButton === '학년별' ? 'select-button' : 'non-select-button'}
                        onClick={() => handleButtonClick('학년별')}
                    >
                        학년별
                    </button>
                    <button
                        className={selectedButton === '반별' ? 'select-button' : 'non-select-button'}
                        onClick={() => handleButtonClick('반별')}
                    >
                        반별
                    </button>
                    <button
                        className={'isStudentAddSelected'}
                        onClick={handleStudentAddClick}
                        style={{ marginLeft: 'auto' }}
                    >
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
                                <div className={'department'}>학과</div>
                            </div>
                            <div className={'th'}>
                                <div className={'classnumber'}>학번</div>
                            </div>
                            <div class    ={'th'}>
                                <div className={'name'}>이름</div>
                            </div>
                            <div className={'th'}>
                                <div className={'phonenumber'}>전화번호</div>
                            </div>
                            <div className={'th'}>
                                <div className={'email'}>이메일</div>
                            </div>
                            <div className={'th'}>
                                <div className={'grade'}>학년</div>
                            </div>
                        </div>
                    </div>
                    <div className={'tbody'}>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024001</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>고정윤</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-1234-5678</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>jyko@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2023015</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>김준식</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9876-5432</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>jskim@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024003</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>박민지</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-2345-6789</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>mjpark@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024004</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>이수진</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-3456-7890</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>sjlee@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2023005</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>정대현</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-4567-8901</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>dhjung@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024006</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>최예린</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-5678-9012</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>yrchoi@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024007</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>한상우</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-6789-0123</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>swhan@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>컴퓨터공학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2023008</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>강민서</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-7890-1234</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>mskang@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>2학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>정보통신학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024009</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>임지원</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-8901-2345</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>jwlim@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                        <div className={'tr'}>
                            <div className={'td'}>
                                <div className={'department'}>소프트웨어학과</div>
                            </div>
                            <div className={'td'}>
                                <div className={'classnumber'}>2024010</div>
                            </div>
                            <div className={'td'}>
                                <div className={'name'}>송현주</div>
                            </div>
                            <div className={'td'}>
                                <div className={'phonenumber'}>010-9012-3456</div>
                            </div>
                            <div className={'td'}>
                                <div className={'email'}>hjsong@email.com</div>
                            </div>
                            <div className={'td'}>
                                <div className={'grade'}>1학년</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>학생 정보 입력</h2>
                        <form>
                            <label>
                                이름:
                                <input type="text" name="name" />
                            </label>
                            <br />
                            <label>
                                학과:
                                <input type="text" name="department" />
                            </label>
                            <br />
                            <label>
                                학번:
                                <input type="text" name="classnumber" />
                            </label>
                            <br />
                            <label>
                                전화번호:
                                <input type="text" name="phonenumber" />
                            </label>
                            <br />
                            <label>
                                이메일:
                                <input type="email" name="email" />
                            </label>
                            <br />
                            <label>
                                학년:
                                <input type="text" name="grade" />
                            </label>
                            <br />
                            <button type="submit">저장</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;