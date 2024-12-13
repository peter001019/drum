import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header/Header";
import { api } from "../api/apiClient";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const reqItem = {
        id,
        password,
        name,
        email,
      };

      const response = await api.post("/user/signup/", reqItem);

      navigate("/");
    } catch (err) {
      alert("회원가입에 문제가 있습니다.");
      console.error("Error : ", err.response.data);
    }
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
const Form = styled.form`
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
