import React, { useState } from 'react';
import styles from "../../styles/Student.module.css";

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
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.h2Wrap}>
                    <h2 className={styles.h2Text}>학생 관리</h2>
                </div>
                <div className={styles.buttonWrap}>
                    <button
                        className={selectedButton === '전체 학생' ? styles.selectButton : styles.nonSelectButton}
                        onClick={() => handleButtonClick('전체 학생')}
                    >
                        전체 학생
                    </button>
                    <button
                        className={selectedButton === '학년별' ? styles.selectButton : styles.nonSelectButton}
                        onClick={() => handleButtonClick('학년별')}
                    >
                        학년별
                    </button>
                    <button
                        className={selectedButton === '반별' ? styles.selectButton : styles.nonSelectButton}
                        onClick={() => handleButtonClick('반별')}
                    >
                        반별
                    </button>
                    <button
                        className={styles.isStudentAddSelected}
                        onClick={handleStudentAddClick}
                        style={{ marginLeft: 'auto' }}
                    >
                        학생추가
                    </button>
                </div>
                <div className={styles.selectboxWrap}>
                    <select id={'search'}>
                        <option value="search_condition">검색조건</option>
                        <option value="">이름</option>
                        <option value="">학과</option>
                        <option value="">학년</option>
                    </select>
                    <div className={styles.inputWrap}>
                        <img src="https://image-resource.creatie.ai/140826466779355/140826466779357/ef0d5f9b0dd3ddc582782e4f4b44dd00.png" className={styles.svg}/>
                        <div className={styles.input}>
                            <input type='text' className={styles.text3} placeholder='검색어를 입력하세요'/>
                        </div>
                    </div>
                </div>
                
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={styles.tr}>
                            <div className={styles.th}>
                                <div className={styles.department}>학과</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.classnumber}>학번</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.name}>이름</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.phonenumber}>전화번호</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.email}>이메일</div>
                            </div>
                            <div className={styles.th}>
                                <div className={styles.grade}>학년</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tbody}>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024001</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>고정윤</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-1234-5678</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>jyko@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>컴퓨터공학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2023015</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>김준식</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-9876-5432</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>jskim@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>2학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>정보통신학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024003</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>박민지</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-2345-6789</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>mjpark@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024004</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>이수진</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-3456-7890</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>sjlee@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>컴퓨터공학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2023005</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>정대현</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-4567-8901</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>dhjung@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>2학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>정보통신학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024006</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>최예린</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-5678-9012</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>yrchoi@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024007</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>한상우</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-6789-0123</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>swhan@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>컴퓨터공학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2023008</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>강민서</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-7890-1234</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>mskang@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>2학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>정보통신학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024009</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>임지원</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-8901-2345</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>jwlim@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024010</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>송현주</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-9012-3456</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>hjsong@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024010</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>송현주</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-9012-3456</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>hjsong@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024010</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>송현주</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-9012-3456</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>hjsong@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                        <div className={styles.tr}>
                            <div className={styles.td}>
                                <div className={styles.department}>소프트웨어학과</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.classnumber}>2024010</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.name}>송현주</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.phonenumber}>010-9012-3456</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.email}>hjsong@email.com</div>
                            </div>
                            <div className={styles.td}>
                                <div className={styles.grade}>1학년</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
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