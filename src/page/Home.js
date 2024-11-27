import React from "react";
import styled from "styled-components";
import LoginHeader from "../component/Header/LoginHeader";
import SearchBar from "../component/Home/SearchBar";
import Music from "../component/Home/Music";

const Home = () => {
  const data = [
    {
      id: "1",
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      album: "Die with a Smile",
      playCount: "7331300",
      duration: "4:11",
    },
  ];

  return (
    <Container>
      <LoginHeader />
      <Content>
        <SearchBar />
        <Table>
          <thead>
            <tr>
              <TableHeader>#</TableHeader>
              <TableHeader>제목</TableHeader>
              <TableHeader>재생</TableHeader>
              <TableHeader>앨범</TableHeader>
              <TableHeader>재생시간</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Music key={item.id} index={index} item={item} />
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: calc(100vh - 80px);
  align-items: center;
  padding-top: 47px;
`;

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
