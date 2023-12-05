import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeaderStyled = styled.div`
  width: 100vw;
  position: fixed;
  background-color: white;
  z-index: 100;
`;
const HeaderBody = styled.div`
  margin: 25px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 750px) {
    margin: 0;
    height: 90px;
    align-items: center;
  }
`;

const LogoDiv = styled.div`
  cursor: pointer;
`;
const Menubar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: clamp(15px, 2vw, 20px);
  font-weight: bold;
  color: #5c5f70;
  div{
    margin: 10px 17px;
    cursor: pointer;
  }
  @media only screen and (max-width: 750px) {
    position: fixed;
    left: 50%;
    top: 12%;
    transform: translateX(-50%);
    width: ${(props) => (props.isToggled ? '100%' : '0')};
    height: ${(props) => (props.isToggled ? '100%' : '0')};
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
    flex-direction: column;
    background-color: white;
    div{
      height: 0px;
      transition: height 0.3s ease-in-out, margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
      font-size: 30px;
      overflow: hidden;
      opacity: 0;
    }
    .toggleOpen {
      height: 50px;
      margin: 30px auto;
      opacity: 1;
    }
    .toggleClose {
      height: 0px;
      margin: 0 auto;
      opacity: 1;
    }
  }
`;
const Toggle = styled.div`
  width: 16.8px;
  font-size: 2rem;
  padding: 1rem 1rem;
  margin-top: 0.5rem;
  color: gray;
  *{
    display: none;
    user-select: none;
  }
  @media only screen and (max-width: 750px) {
  *{
    display: block;
    user-select: auto;
  }
`;
const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [menuList, setMenuList] = useState(["생활 도움","모임 활동","시니어 여행","도우미 등록","기업/기관"])

  return (
    <HeaderStyled>
      {/* 상단 고정 메뉴바 헤더 */}
      <HeaderBody>
        <LogoDiv>
          {/* 좌측 상단 로고 이미지 */}
          <img
            // src="img/famila-logo.png"
            src={process.env.PUBLIC_URL + "/img/famila-logo.png"}
            alt="Famila-logo"
          />
        </LogoDiv>
        {/* 상단 메뉴바 */}
        <Menubar isToggled={isToggled}>
          {menuList.map((menuItem, index) => (
            <div key={index} className={`${isToggled ? "toggleOpen" : "toggleClose"}`}>
              {menuItem}
            </div>
          ))}
        </Menubar>
        {/* 메뉴 토글 버튼(bar) */}
        <Toggle>
          <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} onClick={() => {
            setIsToggled(!isToggled);
          }} />
        </Toggle>
      </HeaderBody>
    </HeaderStyled>
  );
};

export default Header;
