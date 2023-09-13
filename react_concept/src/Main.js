import React, { useState, useEffect, useRef } from "react";

const Main = () => {
  const [cnt, setCnt] = useState(0);
  const [content, setContent] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const divRef = useRef(null);

  useEffect(() => {
    console.log("useEffect 실행");
  }, []);

  const updateCnt = () => {
    setCnt(cnt + 1);
  };

  const clearCnt = () => {
    setCnt(0);
  };

  const blockMove = (e) => {
    // e.preventDefault();
    alert("이동하면 안됨 !");
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(content); // 상태를 업데이트합니다.
  };

  const handleClick = (e) => {
    divRef.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      <h1>안녕하세요. 윤성현입니다.</h1>
      <p>클릭한 횟수는 {cnt}번 입니다.</p>
      <button onClick={updateCnt}>cnt 1 증가시키기</button>
      <br />
      <button onClick={clearCnt}>cnt 0으로 초기화 시키기</button>
      <br />
      <a href="https://naver.com" onClick={blockMove}>
        네이버 바로 가기
      </a>
      <br />
      <p>나 이거 쓰는 중: {content}</p>
      <input type="text" name="name" onChange={changeContent} />
      <button onClick={handleSubmit}>제출</button>
      {submitValue && (
        <div>
          <p>제출된 값: {submitValue} </p>
        </div>
      )}
      <br />
      <button onClick={handleClick}>색 바꾸기</button>
      <div ref={divRef}>배경색이 바뀝니다</div>
    </div>
  );
};

export default Main;
