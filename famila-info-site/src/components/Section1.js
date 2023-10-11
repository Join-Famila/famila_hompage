import React from "react";
import styled from "styled-components";

const Section1Styled = styled.div`
  width: 100%;
  background-color: white;
  .Section1 {
    height: 100%;
    display: flex;
    position: static;
    justify-content: space-evenly;
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .content-title {
    padding-top: 50px;
    width: 380px;
    margin-left: 100px;
    h1 {
      color: #ec616f;
    }
    p {
      font-size: 20px;
      color: #999999;
    }
  }
  //스크린 너비 600이하일때 적용
  .max-width-600 {
    display: none;
  }
  //스크린 너비 850이상일때 적용
  .min-width-850 {
    display: block;
  }
  //테이블들 묶어놓은 div태그
  .table-div {
    display: flex;
    justify-content: center;
  }

  table {
    border-spacing: 0;
    padding-top: 50px;
    text-align: center;
    //tr의 첫번째 자식 td만 따로 적용
    tr:first-child td {
      width: 280px;
      height: 164px;
      vertical-align: top;
      img {
        margin: 0;
      }
    }
    td {
      width: 280px;
      height: 246px;
      > div {
        padding: 20px;
      }
    }
    //bottom-border: 테이블 칸 하단에 선 긋는 클래스
    .bottom-border {
      border-bottom: 1px solid #e7e8ee;
      > img {
        margin-top: 20px;
      }
    }
    // left-border: 칸 왼쪽에 선 긋는 클래스
    .left-border {
      border-left: 1px solid #e7e8ee;
    }
    .title-red {
      font-size: 22px;
      color: #f88692;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .title-orange {
      font-size: 22px;
      color: #f5935c;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .text {
      font-size: 16px;
      color: #999999;
    }
  }

  //패밀라 회원 000님 인터뷰 영상 부분
  //이미지 자를 div
  .interview-movie-div {
    position: relative;
    //자르고 싶은 사이즈
    width: 100%;
    height: 281px;
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //자를 이미지
  .interview-background-img {
    position: absolute;
    //잘랐을 때 보여주고 싶은 위치
    opacity: 0.8;
    top: -900px;
    //사진 원본 사이즈
    width: 1500px;
    height: 2200px;
  }
  //재생 버튼(button아니고 div)
  .play-button {
    position: absolute;
    cursor: pointer;
    z-index: 1;
  }
  //텍스트 div
  .famila-interview {
    position: absolute;
    right: 20%;
    z-index: 1;
    font-weight: bold;
    font-size: 50px;
    //실제 텍스트
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    color: white;
    //텍스트 중 특정 부분만 색상변경
    .famila-user-text {
      color: #fbabb3;
    }
  }

  @media only screen and (max-width: 1200px) {
    .interview-movie-div > .famila-interview {
      right: 10%;
    }
  }
  @media only screen and (max-width: 850px) {
    .Section1 {
      // height: 130vh;
      flex-direction: column;
    }
    .content-title {
      width: 463px;
    }
    table {
      margin: 0;
    }
    td > div {
      width: 230px;
      margin: 0 auto;
    }
    .interview-movie-div {
      height: 338px;
      display: flex;
      flex-direction: column;
      .play-button,
      .famila-interview {
        position: static;
        margin-bottom: 20px;
        margin-top: 20px;
      }
    }
    .interview-background-img {
      top: -600px;
      width: 1200px;
      height: 1800px;
    }
  }
  @media only screen and (max-width: 600px) {
    .Section1 {
      // height: 250vh;
      justify-content: center;
    }
    .max-width-600 {
      display: block;
    }
    .min-width-850 {
      display: none;
    }
    .content-title {
      width: 330px;
      margin: 0 auto;
    }
    td {
      > div {
        margin: 0 auto;
        padding: 20px;
      }
    }
    .bottom-border {
      border-bottom: 1px solid #e7e8ee;
    }
    .interview-background-img {
      position: absolute;
      opacity: 0.8;
      top: -300px;
      width: 700px;
      height: 1100px;
    }
  }
  @media only screen and (max-width: 430px) {
    .content-title {
      padding-top: 30px;
      width: 90%;
      margin-left: 30px;
    }
  }
  @media only screen and (max-width: 400px) {
    .famila-interview {
      font-size: 30px;
    }
  }
`;

const Section1 = () => {
  return (
    <Section1Styled>
      <div className="Section1">
        <div className="content-title">
          <h1>동반자와 함께 즐겁게!</h1>
          <p>
            패밀라는 가족이 되어주고 시니어들이 서로 연결되도록 돕고 시니어들의
            취미기반 모임 및 수업을 운영하여 지역 사회를 지원하고 모두에게 상생
            혜택을 제공합니다.
          </p>
        </div>
        <div className="table-div">
          {/* 생활도움, 모임활동 테이블 */}
          <table className="min-width-850">
            <tbody>
              {/* 첫번째 열(생활도움, 모임활동 이미지) */}
              <tr>
                {/* bottom-border: 테이블 칸 하단에 선 긋는 클래스 */}
                <td className="bottom-border ">
                  {/* 생활도움 */}
                  <img
                    // src="img/life-support.png"
                    src={process.env.PUBLIC_URL + "/img/life-support.png"}
                    alt="life-support.png"
                  />
                </td>
                {/* left-border: 칸 왼쪽에 선 긋는 클래스 */}
                <td className="bottom-border left-border">
                  {/* 모임활동 */}
                  <img
                    // src="img/group-activity.png"
                    src={process.env.PUBLIC_URL + "/img/group-activity.png"}
                    alt="group-activity.png"
                  />
                </td>
              </tr>
              {/* 두번째 열 */}
              <tr>
                <td>
                  <div>
                    {/* 도우미 매칭 */}
                    <img
                      // src="img/Escalator-warning.png"
                      src={
                        process.env.PUBLIC_URL + "/img/Escalator-warning.png"
                      }
                      alt="Escalator-warning.png"
                    />
                    <p className="Escalator-warning title-red">
                      생활도우미 매칭
                    </p>
                    <p className="Escalator-warning text">
                      패밀라와 함께라면 전화나 클릭만으로 함께 할 수 있습니다.
                      1:1 도우미 매칭을 통해 꾸준한 케어를 받습니다.
                    </p>
                  </div>
                </td>
                <td className="left-border">
                  <div>
                    {/* 소득 창출 */}
                    <img
                      // src="img/Attach-money.png"
                      src={process.env.PUBLIC_URL + "/img/Attach-money.png"}
                      alt="Attach-money.png"
                    />
                    <p className="Attach-money title-orange">소득 창출</p>
                    <p className="Attach-money text">
                      취미기반 모임과 수업을 직접 열어서 수익을 얻어 갈 수
                      있습니다. 누구나 모임을 만들고 참여할 수 있습니다.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    {/* 불편함 해소 */}
                    <img
                      // src="img/Emoji-emotions.png"
                      src={process.env.PUBLIC_URL + "/img/Emoji-emotions.png"}
                      alt="Emoji-emotions.png"
                    />
                    <p className="Emoji-emotions title-red">불편함 해소</p>
                    <p className="Emoji-emotions text">
                      장기요양 등급을 받지 못했거나 받았음에도 생활도움이 필요한
                      시니어들 에게 생활 도움을 제공합니다.
                    </p>
                  </div>
                </td>
                <td className="left-border">
                  <div>
                    {/* 외로움 치료 */}
                    <img
                      // src="img/favorite.png"
                      src={process.env.PUBLIC_URL + "/img/favorite.png"}
                      alt="favorite.png"
                    />
                    <p className="favorite title-orange">외로움을 치료하다</p>
                    <p className="favorite text">
                      노년에도 활동하고 배우고 사람과의 연결을 통해 사회적
                      문제인 고독사를 이겨냅니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 스크린 600px 이하일때 표시되는 테이블 */}
          <table className="max-width-600">
            <tbody>
              <tr>
                <td>
                  {/* 생활도움 */}
                  <img
                    // src="img/life-support.png"
                    src={process.env.PUBLIC_URL + "/img/life-support.png"}
                    alt="life-support.png"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    {/* 도우미 매칭 */}
                    <img
                      // src="img/Escalator-warning.png"
                      src={
                        process.env.PUBLIC_URL + "/img/Escalator-warning.png"
                      }
                      alt="Escalator-warning.png"
                    />
                    <p className="Escalator-warning title-red">
                      생활도우미 매칭
                    </p>
                    <p className="Escalator-warning text">
                      패밀라와 함께라면 전화나 클릭만으로 함께 할 수 있습니다.
                      1:1 도우미 매칭을 통해 꾸준한 케어를 받습니다.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bottom-border">
                  <div>
                    {/* 불편함 해소 */}
                    <img
                      // src="img/Emoji-emotions.png"
                      src={process.env.PUBLIC_URL + "/img/Emoji-emotions.png"}
                      alt="Emoji-emotions.png"
                    />
                    <p className="Emoji-emotions title-red">불편함 해소</p>
                    <p className="Emoji-emotions text">
                      장기요양 등급을 받지 못했거나 받았음에도 생활도움이 필요한
                      시니어들 에게 생활 도움을 제공합니다.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {/* 모임활동 */}
                  <img
                    // src="img/group-activity.png"
                    src={process.env.PUBLIC_URL + "/img/group-activity.png"}
                    alt="group-activity.png"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    {/* 소득 창출 */}
                    <img
                      // src="img/Attach-money.png"
                      src={process.env.PUBLIC_URL + "/img/Attach-money.png"}
                      alt="Attach-money.png"
                    />
                    <p className="Attach-money title-orange">소득 창출</p>
                    <p className="Attach-money text">
                      취미기반 모임과 수업을 직접 열어서 수익을 얻어 갈 수
                      있습니다. 누구나 모임을 만들고 참여할 수 있습니다.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    {/* 외로움 치료 */}
                    <img
                      // src="img/favorite.png"
                      src={process.env.PUBLIC_URL + "/img/favorite.png"}
                      alt="favorite.png"
                    />
                    <p className="favorite title-orange">외로움을 치료하다</p>
                    <p className="favorite text">
                      노년에도 활동하고 배우고 사람과의 연결을 통해 사회적
                      문제인 고독사를 이겨냅니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 인터뷰 영상 표시 부분 */}
      <div className="interview-movie-div">
        <img
          className="interview-background-img"
          // src="img/interview-background-img.jpg"
          src={process.env.PUBLIC_URL + "/img/interview-background-img.jpg"}
          alt="interview-background-img.jpg"
        />
        {/* 000님 인터뷰 텍스트 표시 */}
        <div className="famila-interview">
          <p className="famila-user-text">패밀라 회원</p>
          <p>김영숙님 인터뷰</p>
        </div>
        {/* 영상 재생 버튼(div)*/}
        <img
          className="play-button"
          // src="img/play-button.png"
          src={process.env.PUBLIC_URL + "/img/play-button.png"}
          alt="play-button.png"
        />
      </div>
    </Section1Styled>
  );
};

export default Section1;
