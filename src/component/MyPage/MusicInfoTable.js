import React from "react";
import styled from "styled-components";
import MusicInfo from "./MusicInfo";

const MusicInfoTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>#</TableHeader>
          <TableHeader>제목</TableHeader>
          <TableHeader>재생</TableHeader>
          <TableHeader>앨범</TableHeader>
          <TableHeader>재생시간</TableHeader>
          <TableHeader>연습 횟수</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <MusicInfo key={item.id} index={index} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

export default MusicInfoTable;

const Table = styled.table`
  margin-top: 46px;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 10px;
  text-align: left;
  font-weight: bold;
`;
