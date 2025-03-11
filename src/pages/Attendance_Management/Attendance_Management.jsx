import React, { useState } from "react";
import "../../styles/Attendance_Management.css";

const initialStudents = [
  { name: "김덕희", id: "20116861", team: "3팀", attendance: ["출석", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "이영희", id: "20116862", team: "B팀", attendance: ["지각", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "박민수", id: "20116863", team: "A팀", attendance: ["결석", "결석", "결석", "결석", "결석", "결석", "결석", "결석"], date: "2023-05-01" },
  { name: "최서연", id: "20116864", team: "C팀", attendance: ["출석", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "정현우", id: "20116865", team: "B팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "김동성", id: "20116866", team: "B팀", attendance: ["출석", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "김동현", id: "22210473", team: "A팀", attendance: ["결석", "결석", "결석", "결석", "결석", "결석", "결석", "결석"], date: "2023-05-01" },
  { name: "김명재", id: "20116887", team: "B팀", attendance: ["출석", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "김유찬", id: "17122727", team: "1팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "박규찬", id: "20117186", team: "1팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "박민준", id: "20118178", team: "3팀", attendance: ["출석", "출석", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "선승한", id: "21113523", team: "3팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "이동현", id: "21113718", team: "1팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "이세영", id: "20117602", team: "2팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
  { name: "조혜진", id: "23115270", team: "1팀", attendance: ["출석", "지각", "출석", "출석", "출석", "출석", "출석", "출석"], date: "2023-05-01" },
];


const filterStudents = (students, textCondition, textTerm, dateTerm) => {
  return students.filter(({ name, id, date }) => {
    const textMatch = textTerm ? (textCondition === "이름" ? name.includes(textTerm) : id.includes(textTerm)) : true;
    const dateMatch = dateTerm ? date === dateTerm : true;
    return textMatch && dateMatch;
  });
};

const calculateAttendanceStats = (students) => ({
  total: students.length,
  attend: students.filter(({ attendance }) => attendance.every((s) => s === "출석")).length,
  late: students.filter(({ attendance }) => attendance.some((s) => s === "지각")).length,
  absent: students.filter(({ attendance }) => attendance.some((s) => s === "결석")).length,
});

const getAttendanceClass = (status) => (status === "출석" ? "status-attend" : status === "지각" ? "status-late" : "status-absent");

const Root = () => {
  const [textSearchCondition, setTextSearchCondition] = useState("이름");
  const [textSearchTerm, setTextSearchTerm] = useState("");
  const [dateSearchTerm, setDateSearchTerm] = useState("");

  const filteredStudents = filterStudents(initialStudents, textSearchCondition, textSearchTerm, dateSearchTerm);
  const { total, attend, late, absent } = calculateAttendanceStats(initialStudents);

  return (
    <div className="container">
      <div className="wrap">
        <div className="h2-wrap"><h2 className="h2-text">출결관리</h2></div>

        {/* 검색 필터 */}
        <div className="selectbox-wrap" style={{ gap: "10px" }}>
          <input type="date" className="select" value={dateSearchTerm} onChange={(e) => setDateSearchTerm(e.target.value)} />
          <select className="select" value={textSearchCondition} onChange={(e) => setTextSearchCondition(e.target.value)}>
            <option value="이름">이름</option>
            <option value="학번">학번</option>
          </select>
          <div className="input-wrap" style={{ width: "300px" }}>
            <div className="input"><input type="text" placeholder="검색어를 입력하세요" value={textSearchTerm} onChange={(e) => setTextSearchTerm(e.target.value)} /></div>
          </div>
        </div>

        {/* 출석 통계 */}
        <div className="info-wrap">
          {[
            { color: "blue", title: "전체 학생", count: total },
            { color: "green", title: "출석", count: attend },
            { color: "orange", title: "지각", count: late },
            { color: "red", title: "결석", count: absent },
          ].map(({ color, title, count }) => (
            <div key={title} className={`infobox bk-${color}`}>
              <div className="infobox-title"><div className={`infobox-text color-${color}`}>{title}</div></div>
              <div className="infobox-content"><div className="infobox-content-text">{count}명</div></div>
            </div>
          ))}
        </div>

        {/* 출결 기록 */}
        <div className="info-wrap-2">
          <div className="h3"><div className="text--">2025-03-05 </div></div>
        </div>

        {/* 출결 표 */}
        <table className="table">
          <colgroup>
            <col style={{ width: "12%" }} /><col style={{ width: "14%" }} /><col style={{ width: "10%" }} />
            {[...Array(8)].map((_, i) => <col key={i} style={{ width: "8%" }} />)}
          </colgroup>
          <thead>
            <tr><th>이름</th><th>학번</th><th>팀명</th>{["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(time => <th key={time}>{time}</th>)}</tr>
          </thead>
          <tbody>
            {filteredStudents.map(({ name, id, team, attendance }, idx) => (
              <tr key={idx}>
                <td>{name}</td><td>{id}</td><td>{team}</td>
                {attendance.map((status, i) => <td key={i} className={getAttendanceClass(status)}>{status}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Root;
