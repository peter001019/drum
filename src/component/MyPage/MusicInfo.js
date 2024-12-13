import React from "react";
import styled from "styled-components";

const MusicInfo = ({ index, item }) => {
  return (
    <Row>
      <Cell>{index + 1}</Cell>
      <Cell>
        <TitleContainer>
          <AlbumImage
            src={item.album_cover} // Replace with the album image URL
            alt="Album"
          />
          <div>
            <Title>{item.title}</Title>
            <Artist>{item.artist}</Artist>
          </div>
        </TitleContainer>
      </Cell>
      <Cell>{item.total_count}</Cell>
      <Cell>{item.album_name}</Cell>
      <Cell>{item.play_time}</Cell>
      <Cell>{item.practice_count}</Cell>
    </Row>
  );
};

export default MusicInfo;

const Row = styled.tr`
  border-bottom: 1px solid #ddd;
  height: 60px; /* 행 높이 고정 */
  display: table-row; /* 기본 테이블 행 스타일 */
`;

const Cell = styled.td`
  padding: 10px;
  vertical-align: middle; /* 세로 정렬 */
  height: 100%; /* td 높이를 테이블 행에 맞춤 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AlbumImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Artist = styled.div`
  color: #555;
  font-size: 14px;
`;
