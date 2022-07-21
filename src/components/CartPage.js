import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LoginScreen from "./LoginScreen";
import { Link } from "react-router-dom";

const Container = styled.h1`
  font-size: 40px;
  letter-spacing: -3px;
  font-weight: 720;
  margin-left: 330px;
  padding-top: 10px;
  color: #1d1d1f;
  overflow: hidden;
  animation: title 0.8s ease-in;
  @keyframes title {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const LoginTitle = styled.h2`
  font-size: 22px;
  color: #494949;
  text-align: center;
  margin-top: 80px;
  animation: logintitle 2s ease-out;
  @keyframes logintitle {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const Checkbox = styled.input`
  color: #ffffff;
  width: 16px;
  height: 16px;
`;

const CheckboxLabel = styled.label`
  font-size: 14.5px;
  margin-left: 5px;
  position: fixed;
  bottom: 503px;
  font-weight: 530;
`;

const Box = styled.div`
  margin-left: 800px;
  margin-top: 110px;
`;

const ForgotBox = styled.div`
  width: 250px;
  height: 71px;
  border-top: 0.5px solid #d6d6d6;
  margin-left: 730px;
  margin-top: 25px;

  .link {
    font-size: 13px;
    margin-left: 34px;
    text-decoration: none;
    color: #0070c9;
    font-weight: 540;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link2 {
    font-size: 13px;
    color: #0070c9;
    text-decoration: none;
    margin-left: 5px;
  }

  .link2:hover {
    text-decoration: underline;
  }
`;

const NoneID = styled.span`
  font-size: 13px;
  margin-left: 27px;
`;

const HelpBox = styled.div`
  width: 1680px;
  height: 70px;
  border-top: 1.3px solid #CACACA;
  margin-top: 170px;

  .link3 {
    font-size: 16px;
    color: #0070c9;
    text-decoration: none;
    margin-left: 5px;
  }

  .link3:hover {
    text-decoration: underline;
  }
`;

const NeedHelp = styled.span`
  font-size: 17px;
  margin-left: 350px;
  font-weight: 540;
  padding-top: 100px;
`;

const FootNotes = styled.div`
  width: 1680px;
  height: 150px;
  background-color: #f5f5f7;
  .link4 {
    text-decoration: none;
  }
  .link4:hover {
    text-decoration: underline;
  }
`;

const AboutInfo = styled.p`
  font-size: 12px;
  color: #6e6e73;
  margin-left: 350px;
`

function CartPage() {
  return (
    <div>
      <Header />
      <Container className="title">
        더욱 빠르게 결제하시려면 로그인하세요.
      </Container>
      <LoginTitle className="logintitle">Apple Store에 로그인하세요</LoginTitle>
      <LoginScreen />
      <Box>
        <Checkbox type="checkbox" />
        <CheckboxLabel>아이디 저장</CheckboxLabel>
      </Box>
      <ForgotBox>
        <br />
        <Link to="/delete" className="link">
          Apple ID 또는 암호를 잊으셨습니까?
        </Link>
        <br />
        <br />
        <NoneID>Apple ID가 없으십니까?</NoneID>
        <Link to="/delete" className="link2">
          지금 만드세요.
        </Link>
      </ForgotBox>
      <HelpBox>
        <br />
        <NeedHelp>도움이 더 필요하신가요?</NeedHelp>
        <Link to="/delete" className="link3" style={{
          fontWeight: '540',
        }}>
          지금 채팅하기
        </Link>
        <span style={{
          marginLeft: '5px',
        }}>
          또는 080-330-8877 번호로 문의하세요.</span>
      </HelpBox>
      <FootNotes>
        <AboutInfo>
          <br />
          사업자등록번호: 120-81-84429 | 통신판매업신고번호: 제 2011-서울강남-00810호<br />
          대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517<br />
          대표전화 : 080-330-8877 | 팩스 : 02-6928-0000 <br /><br />
          Apple 온라인 스토어는 업계 표준 암호화를 사용하여 제출된 고객 비밀 정보를 보호합니다.
          <Link to="/delete" className="link4" style={{
            color: '#000000',
            marginLeft: '2px',
          }}>보안정보</Link>에 대해 더 알아보기.
        </AboutInfo>
        <hr style={{
          width: '1000px',
          marginLeft: '350px'
        }}
        />
        <p style={{
          fontSize: '12px',
          marginLeft: '1290px'
        }}>Apple Inc.</p>
        <p style={{
          fontSize: '12px',
          marginTop: '-27px',
          marginLeft: '350px'
        }}>
          대한민국
        </p>
      </FootNotes>
      <head>
        <title>로그인 -- 보안 결제 - Apple (KR)</title>
      </head>
    </div>
  );
}

export default CartPage;
