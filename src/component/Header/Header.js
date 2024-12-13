import React from "react";
import styled from "styled-components";
import DrumPic from "../../asset/SignIn/드럼.svg";
import UserPic from "../../asset/SignIn/유저.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img className="drum" src={DrumPic} />
      </Logo>
      <Nav>
        <NavItem>
          <Link to="/">로그인</Link>
        </NavItem>
        <NavItem>
          <Link to="/SignIn">회원가입</Link>
        </NavItem>
        <UserIcon>
          <img className="user-icon" src={UserPic} />
        </UserIcon>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const Logo = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 62px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 43px;
  list-style: none;
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const UserIcon = styled.div`
  margin-right: 60px;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
  }
`;
