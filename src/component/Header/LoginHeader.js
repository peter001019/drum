import React from "react";
import styled from "styled-components";
import DrumPic from "../../asset/SignIn/드럼.svg";
import UserPic from "../../asset/SignIn/유저.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ userInfo }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    alert("로그아웃 되었습니다.");
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/Home")}>
        <img className="drum" src={DrumPic} />
      </Logo>
      <Nav>
        <NavItem>
          <Link to="/" onClick={logoutHandler}>
            로그아웃
          </Link>
        </NavItem>
        <NavItem>
          <UserContainer>
            {userInfo ? (
              <>
                <Link to="/MyPage">{userInfo.name}</Link>
                <UserIcon>
                  <img className="user-icon" src={UserPic} />
                </UserIcon>
              </>
            ) : (
              <></>
            )}
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
  cursor: pointer;
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
