import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Slider from 'react-slick';
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
  .slick-slide {
    transition: opacity 0.5s ease-in-out;
  }
  .menubar {
    font-size: 18px;
    font-weight: bold;
    color: #5c5f70;
    > div {
      min-width: 100px;
      margin: 10px;
      cursor: pointer;
    }
  }
  .menubar-toggle {
    display: fixed;
    flex-direction: column;
    font-weight: bold;
    font-size: 20px;
    margin-top: 80vw;
    width: 100vw;
    height: 200vh;
    background-color: white;
    div {
      margin: 30px auto;
      min-width: 100px;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 750px) {
    margin: 0;
    height: 90px;
    align-items: center;
  }
`;
const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #eee;
`;

const LogoDiv = styled.div`
  cursor: pointer;
`;
const Menubar = styled.div`
  display: flex;
  @media only screen and (max-width: 750px) {
    margin-left: auto;
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


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
        <Slider {...settings}>
        <Menubar className={`${!isToggled ? "menubar" : "menubar-toggle"}`}
          isToggled={isToggled}>
          {/* 생활 도움*/}
          <div className="life-support">생활 도움</div>
          {/* 모임 활동 */}
          <div className="group-activity">모임 활동</div>
          {/* 시니어 여행 */}
          <div className="senior-trip">시니어 여행</div>
          {/* 도우미 등록 */}
          <div className="supporter-registration">도우미 등록</div>
          {/* 기업/기관 */}
          <div className="corporation-institution">기업/기관</div>
        </Menubar>
        </Slider>
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
