import React from "react";
import styled from "styled-components";
import { api } from "../../api/apiClient";

const PracticeButton = ({ item }) => {
  const handlePracticeButton = async () => {
    const music_id = item.music_id;

    try {
      const response = await api.post("/music/add/", { music_id });

      alert("연습 목록에 추가되었습니다.");
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  return <Button onClick={handlePracticeButton}>+ 연습하기</Button>;
};

export default PracticeButton;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  color: #333;
  cursor: pointer;
  height: 30px; /* 버튼 높이를 고정 */
  line-height: 1; /* 텍스트 높이 일치 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #bbb;
  }

  &:active {
    background-color: #aaa;
  }
`;
