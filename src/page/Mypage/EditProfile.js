import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/LoginHeader";
import { api } from "../../api/apiClient";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const fetchUserInfo = async () => {
    const reqData = {
      name,
      intro,
      email,
    };

    try {
      console.log("요청 : ", reqData);
      const response = await api.get("/user/profilecheck/", reqData);
      setUserInfo(response);
      console.log(response);
    } catch (error) {
      console.error("데이터 조회 실패 : ", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqItem = {
      name,
      introduction: intro,
      email,
    };

    try {
      const response = await api.put("/user/profile/", reqItem);

      if (response) {
        alert("프로필이 수정되었습니다!");
        fetchUserInfo();
      }
    } catch (e) {
      console.error("Error : ", e);
    }
  };

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
          <Title>프로필 수정</Title>
          <Form onSubmit={handleSubmit}>
            <Label>이름</Label>
            <Input
              placeholder="회원444"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label>한 줄 소개</Label>
            <Input
              value={intro}
              placeholder="안녕하세요! 회원123입니다"
              onChange={(e) => setIntro(e.target.value)}
            />
            <Label>이메일</Label>
            <Input
              type="email"
              placeholder="ggg@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
