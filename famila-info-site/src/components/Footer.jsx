import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  hr {
    border: 0;
    height: 0.9px;
    background: lightgray;
  }

  @media only screen and (max-width: 430px) {
    .OtherLink {
      width: 90vw;
      p {
        width: 30%;
        margin: 0;
      }
    }
  }
`;
const FooterBody = styled.div`
  width: 80%;
`;
const CompanyInfoMenu = styled.div`
  display: flex;
  padding: 20px 50px;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    width: auto;
    padding: 50px 0;
  }
`;
const CompanyInfo = styled.div`
  width: 60%;
  color: #999;
  margin-right: 20px;
  p {
    padding-left: 10px;
    line-height: 25px;
    font-size: 18px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-right: 0;
  }
`;
const LineSpace = styled.div`
  height: 10px;
`;

const FooterMenu = styled.div`
  min-width: 40%;
  margin-left: 10px;
`;

const MenuTitle = styled.p`
  color: #ec616f;
  font-size: 18px;
  h3 {
    cursor: pointer;
    font-size: 20px;
    margin: 25px auto;
  }
`;
const OtherLink = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  p {
    max-width: 200px;
    width: 30%;
    margin: 10px;
    color: #999;
    font-size: 18px;
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterBody>
        <hr />
        {/* 회사 정보 및 메뉴 div(flex) */}
        <CompanyInfoMenu>
          <CompanyInfo>
            <img
              // src="img/famila-logo.png"
              src={process.env.PUBLIC_URL + "/img/famila-logo.png"}
              alt="Famila-logo"
            />
            {/* <p>회사명 : 패밀라</p>
            <p>대표자 : 한윤석</p>
            <p>사업자 등록번호 : 728-36-01275</p>
            <p className="LineSpace"> </p>
            <p>주소 : 공유오피스 주소</p>
            <p>문의 : 02-433-1234 | tiger9833@naver.com</p> */}
            <p>
              회사명 : 패밀라
              <br />
              대표자 : 한윤석 <br />
              사업자 등록번호 : 728-36-01275 <br />
              통신판매업 신고번호 : 제2023-서울중랑-1748호 <br />
              <br />
              주소 : 공유오피스 주소 <br />
              문의 : 02-433-1234 | tiger9833@naver.com
            </p>
          </CompanyInfo>
          <FooterMenu>
            <MenuTitle>메뉴</MenuTitle>
            <h3>생활도움 서비스</h3>
            <h3>모임찾기</h3>
            <h3>도우미 등록</h3>
            <h3>제휴문의</h3>
          </FooterMenu>
        </CompanyInfoMenu>
        {/* 외부 링크 */}
        <OtherLink>
          <p>네이버블로그</p>
          <p>네이버카페</p>
          <p>인스타그램</p>
        </OtherLink>
      </FooterBody>
    </FooterStyled>
  );
};

export default Footer;
