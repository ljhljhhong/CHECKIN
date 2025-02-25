import React, { useState } from "react";
import "../../styles/Attendance_Management.css";

const initialStudents = [
  {
    name: "김덕희",
    id: "20116861",
    team: "3팀",
    attendance: [
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "이영희",
    id: "20116862",
    team: "B팀",
    attendance: [
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "박민수",
    id: "20116863",
    team: "A팀",
    attendance: [
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
    ],
    date: "2023-05-01",
  },
  {
    name: "최서연",
    id: "20116864",
    team: "C팀",
    attendance: [
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "정현우",
    id: "20116865",
    team: "B팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "김동성",
    id: "20116866",
    team: "B팀",
    attendance: [
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "김동현",
    id: "22210473",
    team: "A팀",
    attendance: [
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
      "결석",
    ],
    date: "2023-05-01",
  },
  {
    name: "김명재",
    id: "20116887",
    team: "B팀",
    attendance: [
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "김유찬",
    id: "17122727",
    team: "1팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "박규찬",
    id: "20117186",
    team: "1팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "박민준",
    id: "20118178",
    team: "3팀",
    attendance: [
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "선승한",
    id: "21113523",
    team: "3팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "이동현",
    id: "21113718",
    team: "1팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "이세영",
    id: "20117602",
    team: "2팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
  {
    name: "조혜진",
    id: "23115270",
    team: "1팀",
    attendance: [
      "출석",
      "지각",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
      "출석",
    ],
    date: "2023-05-01",
  },
];

const Root = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = () => setDropdownActive(!dropdownActive);

  // 텍스트 검색 상태
  const [textSearchCondition, setTextSearchCondition] = useState("이름");
  const [textSearchTerm, setTextSearchTerm] = useState("");

  // 날짜 검색 상태
  const [dateSearchTerm, setDateSearchTerm] = useState("");

  // 두 검색 조건을 모두 적용해 필터링 (빈값이면 무시)
  const filteredStudents = initialStudents.filter((student) => {
    let textMatch = true;
    if (textSearchTerm) {
      if (textSearchCondition === "이름") {
        textMatch = student.name.includes(textSearchTerm);
      } else if (textSearchCondition === "학번") {
        textMatch = student.id.includes(textSearchTerm);
      }
      // 학과, 학년 조건은 데이터에 없으므로 생략
    }
    let dateMatch = true;
    if (dateSearchTerm) {
      dateMatch = student.date === dateSearchTerm;
    }
    return textMatch && dateMatch;
  });

  return (
    <div className="container">
      <div className="wrap">
        {/* 상단 타이틀 */}
        <div className="h2-wrap">
          <h2 className="h2-text">출결관리</h2>
        </div>

        {/* 날짜 검색 영역, 텍스트 검색 영역  */}
        <div className="selectbox-wrap" style={{ gap: "10px" }}>
          <input 
            type="date"
            className="select"
            value={dateSearchTerm}
            onChange={(e) => setDateSearchTerm(e.target.value)}
          />
          <select className="select"
            id="text-search-condition"
            value={textSearchCondition}
            onChange={(e) => setTextSearchCondition(e.target.value)}
          >
            <option value="이름">이름</option>
            <option value="학번">학번</option>
          </select>
          <div className="input-wrap">
            <div className="input">
              <input
                type="text"

                placeholder="검색어를 입력하세요"
                value={textSearchTerm}
                onChange={(e) => setTextSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 날짜 검색 영역 */}

        {/* 요약 정보 박스 */}
        <div className="info-wrap">
          <div className="infobox bk-blue">
            <div className="infobox-title">
              <div className="infobox-text color-blue">전체 학생</div>
            </div>
            <div className="infobox-content">
              <div className="infobox-content-text">
                {initialStudents.length}명
              </div>
            </div>
          </div>
          <div className="infobox bk-green">
            <div className="infobox-title">
              <div className="infobox-text color-green">출석</div>
            </div>
            <div className="infobox-content">
              <div className="infobox-content-text">
                {
                  initialStudents.filter((s) =>
                    s.attendance.every((status) => status === "출석")
                  ).length
                }
                명
              </div>
            </div>
          </div>
          <div className="infobox bk-purple">
            <div className="infobox-title">
              <div className="infobox-text color-purple">지각</div>
            </div>
            <div className="infobox-content">
              <div className="infobox-content-text">
                {
                  initialStudents.filter((s) =>
                    s.attendance.some((status) => status === "지각")
                  ).length
                }
                명
              </div>
            </div>
          </div>
          <div className="infobox bk-orange">
            <div className="infobox-title">
              <div className="infobox-text color-orange">결석</div>
            </div>
            <div className="infobox-content">
              <div className="infobox-content-text">
                {
                  initialStudents.filter((s) =>
                    s.attendance.some((status) => status === "결석")
                  ).length
                }
                명
              </div>
            </div>
          </div>
        </div>

        {/* 수업 시간표 / 전체 시간 드롭다운 */}
        <div className="info-wrap-1" style={{ marginTop: "20px" }}>
          <div className="h3">
            <div className="text--">수업 시간표</div>
          </div>
          <div
            className={`select ${dropdownActive ? "active" : ""}`}
            onClick={toggleDropdown}
            style={{ position: "relative" }}
          >
            <div className="text---1">전체 시간</div>
            {dropdownActive && (
              <div className="options">
                <div className="option" onClick={() => {}}>
                  옵션1
                </div>
                <div className="option" onClick={() => {}}>
                  옵션2
                </div>
                <div className="option" onClick={() => {}}>
                  옵션3
                </div>
                <div className="option" onClick={() => {}}>
                  옵션4
                </div>
                <div className="option" onClick={() => {}}>
                  옵션5
                </div>
                <div className="option" onClick={() => {}}>
                  옵션6
                </div>
                <div className="option" onClick={() => {}}>
                  옵션7
                </div>
                <div className="option" onClick={() => {}}>
                  옵션8
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 출결 관리 표 */}
        <table className="table">
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>팀명</th>
              <th>09:00</th>
              <th>10:00</th>
              <th>11:00</th>
              <th>13:00</th>
              <th>14:00</th>
              <th>15:00</th>
              <th>16:00</th>
              <th>17:00</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, idx) => (
              <tr key={idx}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.team}</td>
                {student.attendance.map((status, i) => (
                  <td
                    key={i}
                    className={
                      status === "출석"
                        ? "status-attend"
                        : status === "지각"
                        ? "status-late"
                        : "status-absent"
                    }
                  >
                    {status}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Root;
