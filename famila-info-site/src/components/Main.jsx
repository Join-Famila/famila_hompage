import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  .Main {
    height: 100%;
    padding-top: 90px;
    padding-bottom: 160px;
    color: #ec616f;
    overflow: hidden;
    position: relative;
    user-select: none;
  }
  .background-heart {
    position: absolute;
    top: 90px;
    right: 0;
    object-fit: cover;
  }
  .info {
    width: 371px;
    height: 234px;
    margin-top: 7%;
    margin-left: 10vw;
    > h1,
    h4 {
      margin: 10px auto;
      word-break: keep-all;
    }
    h4 {
      line-height: 20px;
    }
  }
  .main-info {
    font-size: 64px;
  }
  .sub-info {
    font-weight: 100;
    font-size: 18px;
  }
  .download-store {
    display: flex;
    margin-left: 10vw;
    margin-top: 3%;
    user-select: all;
  }
  .download-store > img {
    min-width: 20%;
    // max-height: 66.8px;
    margin-top: 60px;
    margin-right: 30px;
    cursor: pointer;
  }
  .main-imgs {
    position: absolute;
    right: 0;
    top: 120px;
  }
  .main-img1 {
    position: absolute;
    right: 80px;
    top: 30vh;
    transform: rotate(4deg);
  }
  .main-img2 {
    position: absolute;
    right: 15vw;
    transform: rotate(-4deg);
  }

  @media only screen and (max-width: 1200px) {
    .Main {
      padding-bottom: 90px;
    }
    .background-heart {
      left: 50%;
    }
    .main-img1 {
      width: 321px;
      height: 240px;
    }
    .main-img2 {
      right: 10vw;
      width: 366px;
      height: 274px;
    }
  }

  @media only screen and (max-width: 850px) {
    .main-imgs {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .info {
      width: 325px;
    }
    .main-info {
      font-size: 54px;
    }
    .download-store {
      flex-direction: column;
      > img {
        margin-top: 30px;
      }
    }
    .download-store > img {
      width: 250px;
      height: 90px;
    }
    .main-img1 {
      width: 321px;
      height: 240px;
    }
    .main-img2 {
      width: 366px;
      height: 273px;
    }
  }
  @media only screen and (max-width: 400px) {
    .info {
      width: 250px;
      height: auto;
    }
    .main-info {
      font-size: 40px;
    }
    .sub-info {
      font-size: 16px;
    }

    .download-store > img {
      width: 179px;
      height: 66.8px;
    }
  }
`;

const Main = () => {
  return (
    <MainStyled>
      {/* Main div */}
      <div className="Main">
        <img
          // src="img/Main-background-heart.png"
          src={process.env.PUBLIC_URL + "/img/Main-background-heart.png"}
          className="background-heart"
          alt="background-heart"
        />
        {/* 패밀라 소개글 */}

        <div className="info">
          {/* 메인 패밀라 소개(큰 글씨) */}
          <h1 className="main-info">안녕! 우리는 패밀라 입니다.</h1>
          {/* 서브 패밀라 소개(메인 글씨 하단 작은 글씨) */}
          <h4 className="sub-info">
            우리는 시니어에게 동반자 관계로서 긴밀한 1:1 생활도우미 서비스를
            드리고 다양한 취미기반 모임을 연결해줍니다.
          </h4>
        </div>
        {/* 앱 다운로드 */}
        <div className="download-store">
          {/* 앱 스토어 */}
          <img
            // src="img/App-store.png"
            src={process.env.PUBLIC_URL + "/img/app-store.png"}
            alt="app-store"
          ></img>
          {/* 구글 플레이 */}
          <img
            // src="img/Google-play.png"
            src={process.env.PUBLIC_URL + "/img/google-play.png"}
            alt="google-play"
          ></img>
        </div>
      </div>
      <div className="main-imgs">
        <img
          className="main-img1"
          // src="img/main-img1.png"
          src={process.env.PUBLIC_URL + "/img/main-img1.png"}
          alt="img1"
        ></img>
        <img
          className="main-img2"
          // src="img/main-img2.png"
          src={process.env.PUBLIC_URL + "/img/main-img2.png"}
          alt="img2"
        ></img>
      </div>
    </MainStyled>
  );
};

export default Main;
