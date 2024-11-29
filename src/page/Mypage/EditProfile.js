import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/LoginHeader";

const EditProfile = () => {
  const [name, setName] = useState("회원123");
  const [intro, setIntro] = useState("안녕하세요! 회원123입니다");
  const [email, setEmail] = useState("ggg@gmail.com");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 막기

    alert("프로필이 수정되었습니다!");
  };

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar>
          <MyPageTitle>My Page</MyPageTitle>
          <UserInfo>
            <UserName>{name}</UserName>
            <WelcomeMessage>{intro}</WelcomeMessage>
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
          <Title>프로필 수정</Title>
          <Form onSubmit={handleSubmit}>
            <Label>이름</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="회원444"
            />
            <Label>한 줄 소개</Label>
            <Input
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              placeholder="안녕하세요! 회원123입니다"
            />
            <Label>이메일</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ggg@gmail.com"
            />
            <SubmitButton type="submit">수정 완료</SubmitButton>
          </Form>
        </MainContent>
      </Content>
    </Container>
  );
};

export default EditProfile;

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
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 397px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;
  color: #848484;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #444;
  }
`;
