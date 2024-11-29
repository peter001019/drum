import React from "react";
import styled from "styled-components";
import Header from "../../component/Header/LoginHeader";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "1",
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      album: "Die with a Smile",
      playCount: "7331300",
      duration: "4:11",
      practiceCount: "5",
    },
  ];

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar>
          <MyPageTitle>My Page</MyPageTitle>
          <UserInfo>
            <UserName>회원123</UserName>
            <WelcomeMessage>
              안녕하세요! 회원123입니다. 잘 부탁드립니다!
            </WelcomeMessage>
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
        <MainContent></MainContent>
      </Content>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
`;
const Sidebar = styled.div`
  width: 447px;
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  flex-shrink: 0;
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
