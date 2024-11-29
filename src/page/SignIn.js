import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header/Header";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // 회원가입 로직 (예: 데이터 검증 및 서버 통신)
    console.log("아이디:", id);
    console.log("비밀번호:", password);
    console.log("이름:", name);
    console.log("이메일:", email);

    // 로그인 페이지로 이동
    navigate("/");
  };

  return (
    <Container>
      <Header />
      <Content>
        <LeftContent>
          <Title>밴드를 위한 음악 연습장</Title>
          <Description>
            밴드를 위한 최적의 연습 공간을 제공합니다. 쉽게 로그인하고 원하는
            음악을 검색해보세요
          </Description>
        </LeftContent>
        <RightContent>
          <Form>
            <Input
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="이메일"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSignUp}>회원가입</Button>
          </Form>
        </RightContent>
      </Content>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 80px);
`;
const LeftContent = styled.div`
  width: 60%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  box-sizing: border-box;
`;
const RightContent = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
`;
const Description = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Input = styled.input`
  width: 397px;
  height: 53px;
  border-radius: 15px;
  border: 1px solid #000;
  color: #848484;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px; /* 여백 추가 */
`;
const Button = styled.button`
  width: 397px;
  height: 53px;
  border-radius: 15px;
  background: #000;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #444; /* hover 효과 */
  }
`;
