import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginHeader from "../component/Header/LoginHeader";
import SearchBar from "../component/Home/SearchBar";
import Music from "../component/Home/Music";
import { api } from "../api/apiClient";

const Home = () => {
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/user/profilecheck/");

        setUserInfo(response);
      } catch (error) {
        console.error("데이터 조회 실패 : ", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSearch = async (data) => {
    try {
      console.log("검색어:", data);
      const response = await api.get("/music/search/", { data });
      console.log("검색 결과:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  return (
    <Container>
      <LoginHeader userInfo={userInfo} />
      <Content>
        <SearchBar onSearch={handleSearch} />
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
