import React from "react";
import styled from "styled-components";
import lens from "../../asset/Home/돋보기.svg";

const searchBar = () => {
  return (
    <Container>
      <SearchInput placeholder="음악을 검색해보세요!" />
      <LensPic>
        <img className="lens" src={lens} />
      </LensPic>
    </Container>
  );
};

export default searchBar;

const Container = styled.div`
  width: 397px;
  height: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  border: 1px solid #000;
`;

const SearchInput = styled.input`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 41px;
  border: none;
  outline: none;
  flex: 1;
`;

const LensPic = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  cursor: pointer;
`;
