import React, { useState } from "react";
import styled from "styled-components";

const Section3Styled = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  .Section3 {
    height: 100%;
  }
  hr {
    border: 0;
    height: 1px;
    background: lightgray;
    width: 75%;
  }
  h1 {
    margin: 60px auto;
    color: #ec616f;
    line-height: 1.5em;
    width: 75%;
  }
  .safety-sure {
    padding-left: 40px;
  }
  .management-systems-div {
    width: 75%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 100px;
    > div {
      margin: 20px;
      width: 320px;
      border: 1px solid lightgray;
      border-radius: 20px;
      padding-left: 30px;
      padding-top: 30px;
      padding-bottom: 10px;
      h3 {
        color: #bbb;
        font-weight: normal;
        margin: 10px auto;
      }
      h2 {
        font-weight: bold;
        margin: 15px auto;
      }
    }
  }
  .user-case-div {
    height: 685px;
    background-color: #f7f8f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .case-imgs {
      position: relative;
      .case-img1 {
        position: absolute;
        top: -200px;
        left: -130px;
      }
      .case-img2 {
        width: 377px;
        height: 286px;
        position: absolute;
        top: -270px;
        left: 200px;
      }
      .slide-case-img {
        width: 378px;
        height: 289px;
        display: none;
      }
    }
    .button-div {
      display: flex;
      
      .left-button {
        position: absolute;
        left: 9vw;
        cursor: pointer;
      }
      .right-button {
        position: absolute;
        right: 9vw;
        cursor: pointer;
      }
    }
    .case-info-div {
      margin-bottom: 50px;
      max-width: 450px;
      text-align: center;
      h1 {
        color: #ec616f;
        margin: 15px auto;
      }
      h3 {
        color: gray;
        font-weight: normal;
      }
    }
  }
  .promotion-div {
    width: 75%;
    margin: 150px auto;
    background-color: #ec616f;
    border-radius: 20px;
    padding: 40px 50px;
    word-break: keep-all;
    position: relative;
    user-select: none;
    overflow:hidden;
    h1,
    h3 {
      color: white;
      margin: 0;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    .download-store {
      display: flex;
      > img {
        z-index: 1;
        margin-top: 60px;
        margin-right: 30px;
        cursor: pointer;
      }
    }
    .mobile-imgs {
      position: relative;
    }
    .mobile1-img {
      position: absolute;
      right: 250px;
      bottom: -47px;
    }
    .mobile2-img {
      position: absolute;
      right: 100px;
      bottom: 10px;
    }
    .Section3-background-heart{
      position: absolute;
      left: 50%;
      top:0;
      object-fit:cover;
    }
  }
  @media only screen and (max-width: 1200px) {
    .management-systems-div {
      flex-wrap: wrap;
    }
    .promotion-div {
      .mobile1-img {
        right: 100px;
        bottom: -47px;
      }
      .mobile2-img {
        right: -50px;
        bottom: 10px;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .promotion-div {
      .mobile1-img, .mobile2-img {
        display: none;
      }
    }
    .user-case-div {
      .case-imgs {
        .case-img1 {
          position: absolute;
          top: -220px;
          left: -50px;
        }
        .case-img2 {
          width: 377px;
          height: 286px;
          position: absolute;
          top: -270px;
          left: 150px;
        }
      }
    }

    @media only screen and (max-width: 800px) {
      .user-case-div > .case-imgs {
        .slide-case-img {
          display: flex;
        }
        .case-img1 {
          display: none;
        }
        .case-img2 {
          display: none;
        }
      }
    }
    @media only screen and (max-width: 630px) {
      
      .button-div {
        margin-bottom: 150px;
      }
      .promotion-div {
        h3 {
          font-size: 22px;
        }
        .download-store {
          flex-direction: column;
          > img {
            width: 244px;
            height: 92px;
            margin-top: 30px;
            margin-right: 0;
          }
        }
      }
    }
    @media only screen and (max-width: 450px) {
      .button-div {
        margin-bottom: 200px;
      }
      .user-case-div {
        height: 615px;
        padding-bottom: 20px;
        .case-imgs > .slide-case-img {
          width: 278px;
          height: 300px;
        }
        .case-info-div {
          margin-top: 450px;
          h3 {
            margin: auto 20px;
          }
        }
      }
    }
    @media only screen and (max-width: 400px) {
      .promotion-div {
        margin-top: 100px;
        margin-bottom: 80px;
      }
  }
`;

const Section3 = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const imageList = ["/img/main-img1.png", "/img/main-img2.png"];

  // const [style, setStyle] = useState({
  //   transform: `translateX(-${currentImgIndex}00%)`,
  //   transition: `all 0.4s ease-in-out`,
  // });

  const nextSlide = () => {
    setCurrentImgIndex(
      currentImgIndex === imageList.length - 1 ? 0 : currentImgIndex + 1
    );
    // setStyle({
    //   transform: `translateX(-${currentImgIndex + 1}00%)`,
    //   transition: `all 0.4s ease-in-out`,
    // });
  };
  const prevSlide = () => {
    setCurrentImgIndex(
      currentImgIndex === 0 ? imageList.length - 1 : currentImgIndex - 1
    );
    // setStyle({
    //   transform: `translateX(-${currentImgIndex - 1}00%)`,
    //   transition: `all 0.4s ease-in-out`,
    // });
  };

  return (
    <Section3Styled>
      <div className="Section3">
        <hr />
        <h1 className="safety-sure">
          더 안전하고
          <br />
          확실하게
        </h1>
        {/* 본인 인증 시스템, 검증된 도우미 직원, 악성 유저 관리 div */}
        <div className="management-systems-div">
          {/* 본인 인증 시스템 */}
          <div className="self-certified-div">
            <img
              // src="img/check-circle.png"
              src={process.env.PUBLIC_URL + "/img/check-circle.png"}
              alt="check-circle-img"
            />
            <h3>통신사 인증으로 안전하게!</h3>
            <h2>본인 인증 시스템</h2>
          </div>
          {/* 검증된 도우미 직원 */}
          <div className="verify-supporter-div">
            <img
              // src="img/verify-supporter.png"
              src={process.env.PUBLIC_URL + "/img/verify-supporter.png"}
              alt="verify-supporter-img"
            />
            <h3>철저한 배경조사와 전문적인 교육으로</h3>
            <h2>검증된 도우미 직원</h2>
          </div>
          {/* 악성 유저 관리 */}
          <div className="malicious-user-div">
            <img
              // src="img/malicious-user.png"
              src={process.env.PUBLIC_URL + "/img/malicious-user.png"}
              alt="malicious-user-img"
            />
            <h3>실시간 모니터링과 신속한 조치로</h3>
            <h2>악성 유저 관리</h2>
          </div>
        </div>
        {/* 사용자 사례 div */}
        <div className="user-case-div">
          {/* 사용자 사진 */}
          <div className="case-imgs">
            <img
              className="case-img1"
              // src="img/main-img1.png"
              src={process.env.PUBLIC_URL + "/img/main-img1.png"}
              alt="img1"
            ></img>
            <img
              className="case-img2"
              // src="img/main-img2.png"
              src={process.env.PUBLIC_URL + "/img/main-img2.png"}
              alt="img2"
            ></img>
            <img
              className="slide-case-img"
              alt="slide-case-img"
              src={process.env.PUBLIC_URL + imageList[currentImgIndex]}
            />
          </div>
          {/* 좌우 화살표 버튼 */}
          <div className="button-div">
            <div className="left-button" onClick={prevSlide}>
              <img
                // src="img/left-button.png"
                src={process.env.PUBLIC_URL + "/img/left-button.png"}
                alt="left-button"
              />
            </div>
            <div className="right-button" onClick={nextSlide}>
              <img
                // src="img/right-button.png"
                src={process.env.PUBLIC_URL + "/img/right-button.png"}
                alt="right-button"
              />
            </div>
          </div>
          <div className="case-info-div">
            <img
              // src="img/label-work-type-text.png"
              src={process.env.PUBLIC_URL + "/img/label-work-type-text.png"}
              alt="label-work-type-text.png"
            ></img>
            <h1 className="user-name">김재혁과 김순자</h1>
            <h3>
              어떤 불편이 있는 패밀라 회원 김순자와 패밀라 도우미 김재혁이 인간
              연결의 힘을 통해 외로움과 사회적 고립을 극복하는데 어떻게 서로
              도움이 되었는지 사례를 통해 공유합니다.
            </h3>
          </div>
        </div>
        <div className="promotion-div">
          {/* 프로모션 배경 하트 이미지 */}
          <img
            src={process.env.PUBLIC_URL + "/img/Section3-background-heart.png"}
            alt="Section3-background-heart"
            className="Section3-background-heart"
          ></img>
          <h1>한번 설치해 보세요.</h1>
          <h3>패밀라의 가치를 느끼실거에요.</h3>
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
              // src="img/Google-play.png"/
              src={process.env.PUBLIC_URL + "/img/google-play.png"}
              alt="google-play"
            ></img>
          </div>
        </div>
        <div className="mobile-imgs">
          {/* 왼쪽 모바일 이미지 */}
          <img
            // src="img/mobile1.png"
            src={process.env.PUBLIC_URL + "/img/mobile1.png"}
            alt="mobile1.png"
            className="mobile1-img"
          ></img>
          {/* 오른쪽 모바일 이미지 */}
          <img
            // src="img/mobile2.png"
            src={process.env.PUBLIC_URL + "/img/mobile2.png"}
            alt="mobile2.png"
            className="mobile2-img"
          ></img>
        </div>
      </div>
    </Section3Styled>
  );
};

export default Section3;
