import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HeaderStyled = styled.div`
  width: 100vw;
  position: fixed;
  background-color: white;
  z-index: 100;
  div {
    display: flex;
    justify-content: center;
  }
  .Header {
    margin: 25px;
  }
  .logo-div {
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
  .toggle {
    width: 16.8px;
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
    flex-direction: column;
    font-weight: bold;
    font-size: 20px;
    margin-top: 80vw;
    width: 100vw;
    height: 150vh;
    background-color: white;
    > div {
      margin: 30px auto;
      min-width: 100px;
      cursor: pointer;
    }
  }
  .toggle-div {
    position: absolute;
    right: 10px;
  }
  .toggle {
    display: none;
    font-size: 2rem;
    padding: 1rem 1rem;
    margin-top: 0.5rem;
    color: gray;
  }
  @media only screen and (max-width: 900px) {
    .menubar {
      margin-left: 150px;
    }
  }
  @media only screen and (max-width: 750px) {
    .Header {
      margin: 0;
      height: 90px;
      align-items: center;
    }
    .toggle {
      display: block;
    }
    .menubar {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .menubar-toggle {
      margin-top: 100vw;
    }
  }
  @media only screen and (max-width: 450px) {
    .menubar-toggle {
      margin-top: 120vw;
    }
  }
  @media only screen and (max-width: 450px) {
    .menubar-toggle {
      margin-top: 120vw;
    }
  }
  @media only screen and (max-width: 380px) {
    .menubar-toggle {
      margin-top: 150vw;
    }
  }
`;

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <HeaderStyled>
      {/* 상단 고정 메뉴바 헤더 */}
      <div className="Header">
        <div className="logo-div">
          {/* 좌측 상단 로고 이미지 */}
          <img
            // src="img/famila-logo.png"
            src={process.env.PUBLIC_URL + "/img/famila-logo.png"}
            alt="Famila-logo"
          />
        </div>
        {/* 상단 메뉴바 */}
        <div className={`${!isToggled ? "menubar" : "menubar-toggle"}`}>
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
        </div>
        <div className="toggle-div">
          {/* 메뉴 토글 버튼(bar) */}
          <div
            className="toggle"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
