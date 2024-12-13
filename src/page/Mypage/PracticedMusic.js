import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/Header/LoginHeader";
import MusicInfoTable from "../../component/MyPage/MusicInfoTable";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/apiClient";

const PracticedMusic = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/user/profilecheck/");
        setUserInfo(response);
      } catch (error) {
        console.error("데이터 조회 실패 : ", error);
      }
    };

    const fetchTime = async () => {
      try {
        const response = await api.get("/practice/todayrecode/");
        setTime(response.data.practice_time);
      } catch (error) {
        console.error("시간 조회 실패 : ", error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await api.get("/practice/todaylist/");
        setData(response.data);
      } catch (error) {
        console.error("데이터 조회 실패 : ", error);
      }
    };

    fetchUserInfo();
    fetchData();
    fetchTime();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar>
          <MyPageTitle>My Page</MyPageTitle>
          <UserInfo>
            <UserName>{userInfo.name}</UserName>
            <WelcomeMessage>{userInfo.introduction}</WelcomeMessage>
          </UserInfo>
          <ButtonGroup>
            <SidebarButton onClick={() => navigate("/MyPage/EditProfile")}>
              프로필 수정
            </SidebarButton>
            <SidebarButton onClick={() => navigate("/MyPage/PracticedMusic")}>
              연습한 곡
            </SidebarButton>
            <SidebarButton onClick={() => navigate("/MyPage/MonthlyPractice")}>
              월간 연습 기록
            </SidebarButton>
          </ButtonGroup>
        </Sidebar>
        <MainContent>
          <PracticeTime>
            <TimeTitle>오늘 연습 시간</TimeTitle>
            <TimeBox>
              <Time>{time}</Time>
            </TimeBox>
          </PracticeTime>
          <MusicInfoTable data={data} />
        </MainContent>
      </Content>
    </Container>
  );
};

export default PracticedMusic;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: calc(100vh - 80px);
`;
const Sidebar = styled.div`
  width: 447px;
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
`;

const MyPageTitle = styled.h2`
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  margin-bottom: 40px;
`;

const UserName = styled.h3`
  margin-bottom: 10px;
`;

const WelcomeMessage = styled.p`
  font-size: 14px;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
`;

const PracticeTime = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TimeTitle = styled.h3`
  margin-bottom: 10px;
`;

const TimeBox = styled.div`
  font-size: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f9f9f9;
`;

const Time = styled.span`
  font-weight: bold;
`;
