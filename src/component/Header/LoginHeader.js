import React from "react";
import styled from "styled-components";
import DrumPic from "../../asset/SignIn/드럼.svg";
import UserPic from "../../asset/SignIn/유저.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img className="drum" src={DrumPic} />
      </Logo>
      <Nav>
        <NavItem>
          <a href="#login">로그아웃</a>
        </NavItem>
        <NavItem>
          <UserContainer>
            <a href="#myPage">회원123</a>
            <UserIcon>
              <img className="user-icon" src={UserPic} />
            </UserIcon>
          </UserContainer>
        </NavItem>
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
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const UserIcon = styled.div`
  margin-right: 60px;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
  }
`;