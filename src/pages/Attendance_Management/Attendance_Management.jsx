import React from "react";
import "../../styles/Attendance_Management.css";

const Root = ({}) => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);
  return (
    <div className={"container"}>
      <div className={"wrap"}>
        <div className={"h2-wrap"}>
          <h2 className={"h2-text"}>출결관리</h2>
        </div>
        <div className={"button-wrap"}>
          <button className={"button"}>오늘</button>
          <button className={"button"}>이번 주</button>
          <button className={"button"}>이번 달</button>
        </div>
        <div className={"selectbox-wrap"}>
          <select id={"search"}>
            <option value="search_condition">검색조건</option>
            <option value="">이름</option>
            <option value="">학과</option>
            <option value="">학년</option>
          </select>
          <div className={"input-wrap"}>
            <div className={"input"}>
              <input type="text" className={"text---3"} placeholder="검색어를 입력하세요" />
            </div>
          </div>
        </div>
        <div className={"info-wrap"}>
          <div className={"infobox bk-blue"}>
            <div className={"infobox-title"}>
              <div className={"infobox-text color-blue"}>전체 학생</div>
            </div>
            <div className={"infobox-content"}>
              <div className={"infobox-content-text"}>128명</div>
            </div>
          </div>
          <div className={"infobox bk-green"}>
            <div className={"infobox-title"}>
              <div className={"infobox-text color-green"}>출석</div>
            </div>
            <div className={"infobox-content"}>
              <div className={"infobox-content-text"}>122명</div>
            </div>
          </div>
          <div className={"infobox bk-purple"}>
            <div className={"infobox-title"}>
              <div className={"infobox-text color-purple"}>지각</div>
            </div>
            <div className={"infobox-content"}>
              <div className={"infobox-content-text"}>4명</div>
            </div>
          </div>
          <div className={"infobox bk-orange"}>
            <div className={"infobox-title"}>
              <div className={"infobox-text color-orange"}>결석</div>
            </div>
            <div className={"infobox-content"}>
              <div className={"infobox-content-text"}>2명</div>
            </div>
          </div>
        </div>
        <div className={"bar-wrap"}>
          <div className={"bar-wrap-h3"}>
            <h3 className={"bar-wrap-h3-text"}>수업 시간표</h3>
          </div>
          <div className={"selectbox-wrap"}>
            <div className={"option"}></div>
            <div className={"option-1"}></div>
            <div className={"option-2"}></div>
            <div className={"option-3"}></div>
            <div className={"input_tt"}>
              <input type="text" className={"text---6"} placeholder="전체시간" />
            </div>
          </div>
        </div>
        <div className={"table"}>
          <div className={"thead"}>
            <div className={"tr"}>
              <div className={"th"}>
                <div className={"text--12"}>이름</div>
              </div>
              <div className={"th-1"}>
                <div className={"text--13"}>학번</div>
              </div>
              <div className={"th-2"}>
                <div className={"text--14"}>팀명</div>
              </div>
              <div className={"th-3"}>
                <div className={"text-0900"}>09:00</div>
              </div>
              <div className={"th-4"}>
                <div className={"text-1010"}>10:10</div>
              </div>
              <div className={"th-5"}>
                <div className={"text-1120"}>11:20</div>
              </div>
              <div className={"th-6"}>
                <div className={"text-1330"}>13:30</div>
              </div>
              <div className={"th-7"}>
                <div className={"text-1440"}>14:40</div>
              </div>
              <div className={"th-8"}>
                <div className={"text-1550"}>15:50</div>
              </div>
              <div className={"th-9"}>
                <div className={"text-1700"}>17:00</div>
              </div>
            </div>
          </div>
          <div className={"tbody"}>
            <div className={"tr-1"}>
              <div className={"td"}>
                <div className={"text--15"}>김지훈</div>
              </div>
              <div className={"td-1"}>
                <div className={"text-2024001"}>2024001</div>
              </div>
              <div className={"td-2"}>
                <div className={"a-6"}>A팀</div>
              </div>
              <div className={"td-3"}>
                <div className={"span-6"}>
                  <div className={"text--16"}>출석</div>
                </div>
              </div>
              <div className={"td-4"}>
                <div className={"span-7"}>
                  <div className={"text--17"}>출석</div>
                </div>
              </div>
              <div className={"td-5"}>
                <div className={"span-8"}>
                  <div className={"text--18"}>출석</div>
                </div>
              </div>
              <div className={"td-6"}>
                <div className={"span-9"}>
                  <div className={"text--19"}>출석</div>
                </div>
              </div>
              <div className={"td-7"}>
                <div className={"span-10"}>
                  <div className={"text--20"}>출석</div>
                </div>
              </div>
              <div className={"td-8"}>
                <div className={"span-11"}>
                  <div className={"text--21"}>출석</div>
                </div>
              </div>
              <div className={"td-9"}>
                <div className={"span-12"}>
                  <div className={"text--22"}>출석</div>
                </div>
              </div>
            </div>
            <div className={"tr-2"}>
              <div className={"td-10"}>
                <div className={"text--23"}>이영희</div>
              </div>
              <div className={"td-11"}>
                <div className={"text-2024002"}>2024002</div>
              </div>
              <div className={"td-12"}>
                <div className={"b"}>B팀</div>
              </div>
              <div className={"td-13"}>
                <div className={"span-13"}>
                  <div className={"text--24"}>지각</div>
                </div>
              </div>
              <div className={"td-14"}>
                <div className={"span-14"}>
                  <div className={"text--25"}>출석</div>
                </div>
              </div>
              <div className={"td-15"}>
                <div className={"span-15"}>
                  <div className={"text--26"}>출석</div>
                </div>
              </div>
              <div className={"td-16"}>
                <div className={"span-16"}>
                  <div className={"text--27"}>출석</div>
                </div>
              </div>
              <div className={"td-17"}>
                <div className={"span-17"}>
                  <div className={"text--28"}>출석</div>
                </div>
              </div>
              <div className={"td-18"}>
                <div className={"span-18"}>
                  <div className={"text--29"}>출석</div>
                </div>
              </div>
              <div className={"td-19"}>
                <div className={"span-19"}>
                  <div className={"text--30"}>출석</div>
                </div>
              </div>
            </div>
            <div className={"tr-3"}>
              <div className={"td-20"}>
                <div className={"text--31"}>박민수</div>
              </div>
              <div className={"td-21"}>
                <div className={"text-2024003"}>2024003</div>
              </div>
              <div className={"td-22"}>
                <div className={"a-7"}>A팀</div>
              </div>
              <div className={"td-23"}>
                <div className={"span-20"}>
                  <div className={"text--32"}>결석</div>
                </div>
              </div>
              <div className={"td-24"}>
                <div className={"span-21"}>
                  <div className={"text--33"}>결석</div>
                </div>
              </div>
              <div className={"td-25"}>
                <div className={"span-22"}>
                  <div className={"text--34"}>결석</div>
                </div>
              </div>
              <div className={"td-26"}>
                <div className={"span-23"}>
                  <div className={"text--35"}>결석</div>
                </div>
              </div>
              <div className={"td-27"}>
                <div className={"span-24"}>
                  <div className={"text--36"}>결석</div>
                </div>
              </div>
              <div className={"td-28"}>
                <div className={"span-25"}>
                  <div className={"text--37"}>결석</div>
                </div>
              </div>
              <div className={"td-29"}>
                <div className={"span-26"}>
                  <div className={"text--38"}>결석</div>
                </div>
              </div>
            </div>
            <div className={"tr-4"}>
              <div className={"td-30"}>
                <div className={"text--39"}>최서연</div>
              </div>
              <div className={"td-31"}>
                <div className={"text-2024004"}>2024004</div>
              </div>
              <div className={"td-32"}>
                <div className={"c"}>C팀</div>
              </div>
              <div className={"td-33"}>
                <div className={"span-27"}>
                  <div className={"text--40"}>출석</div>
                </div>
              </div>
              <div className={"td-34"}>
                <div className={"span-28"}>
                  <div className={"text--41"}>출석</div>
                </div>
              </div>
              <div className={"td-35"}>
                <div className={"span-29"}>
                  <div className={"text--42"}>출석</div>
                </div>
              </div>
              <div className={"td-36"}>
                <div className={"span-30"}>
                  <div className={"text--43"}>출석</div>
                </div>
              </div>
              <div className={"td-37"}>
                <div className={"span-31"}>
                  <div className={"text--44"}>출석</div>
                </div>
              </div>
              <div className={"td-38"}>
                <div className={"span-32"}>
                  <div className={"text--45"}>출석</div>
                </div>
              </div>
              <div className={"td-39"}>
                <div className={"span-33"}>
                  <div className={"text--46"}>출석</div>
                </div>
              </div>
            </div>
            <div className={"tr-5"}>
              <div className={"td-40"}>
                <div className={"text--47"}>정현우</div>
              </div>
              <div className={"td-41"}>
                <div className={"text-2024005"}>2024005</div>
              </div>
              <div className={"td-42"}>
                <div className={"b-1"}>B팀</div>
              </div>
              <div className={"td-43"}>
                <div className={"span-34"}>
                  <div className={"text--48"}>출석</div>
                </div>
              </div>
              <div className={"td-44"}>
                <div className={"span-35"}>
                  <div className={"text--49"}>지각</div>
                </div>
              </div>
              <div className={"td-45"}>
                <div className={"span-36"}>
                  <div className={"text--50"}>출석</div>
                </div>
              </div>
              <div className={"td-46"}>
                <div className={"span-37"}>
                  <div className={"text--51"}>출석</div>
                </div>
              </div>
              <div className={"td-47"}>
                <div className={"span-38"}>
                  <div className={"text--52"}>출석</div>
                </div>
              </div>
              <div className={"td-48"}>
                <div className={"span-39"}>
                  <div className={"text--53"}>출석</div>
                </div>
              </div>
              <div className={"td-49"}>
                <div className={"span-40"}>
                  <div className={"text--54"}>출석</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bar-wrap"}>
          <div className={"bar-wrap-h3"}>
            <h3 className={"bar-wrap-h3-text"}>금일 특이사항</h3>
          </div>
          <div className={"div-26"}>
            <div className={"div-27"}>
              <div className={"div-28"}>
                <div className={"text-2024002-"}>2024002 이영희</div>
              </div>
              <div className={"div-29"}>
                <div className={"text----"}>지각 사유: 교통 체증</div>
              </div>
            </div>
            <div className={"div-30"}>
              <div className={"div-31"}>
                <div className={"text-2024003-"}>2024003 박민수</div>
              </div>
              <div className={"div-32"}>
                <div className={"text-----1"}>결석 사유: 병원 진료</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
