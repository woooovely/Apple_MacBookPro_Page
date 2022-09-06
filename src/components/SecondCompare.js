import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mbp14 from '../image/mbp14.png';
import color from '../image/silver_gray.png';
import cpu from '../image/m1pro_m1max.png';
import memory from '../image/memory.png';
import battery from '../image/battery.png';
import camera from '../image/camera.png';
import speaker from '../image/speaker.png';
import touchid from '../image/touchid.png';

const Mac14 = styled.h3`
  font-size: 24px;
  margin-left: 770px;
  margin-top: 29px;
  font-weight: 600;
`

const Price = styled.span`
  font-size: 14px;
  margin-left: 807px;
`;

const BuyButton = styled.button`
  margin-left: 830px;
  width: 59.9px;
  height: 24px;
  font-size: 12px;
  background-color: #0071e3;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-weight: 540;
  cursor: pointer;
  margin-top: 3.8px;
  &:hover {
    background-color: #0066CC;
  }
`;

const SeeMore = styled.p`
  &:hover {
    text-decoration: underline;
  }
  margin-top: 15px;
  margin-left: 825px;
  width: 100px;
`;

const LineBox = styled.div`
  border-bottom: 1px solid #dcdcdc;
  width: 290px;
  margin-left: 730px;
  margin-top: 33px;
`;

const Display = styled.h4`
  font-size: 21px;
  margin-left: 831px;
  margin-top: 60px;
  font-weight: 600;
`;

const AboutDisplay = styled.p`
  font-size: 14px;
  margin-left: 780px;
  margin-top: -15px;
`;

const AboutChip = styled.p`
  font-size: 14px;
  margin-left: 755px;
  margin-top: -6px;
`;

const Max = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const CPU = styled.h4`
  font-size: 21px;
  font-weight: 700;
  margin-left: 842px;
  margin-top: -10px; 
`;

const AboutCPU = styled.p`
  font-size: 14px;
  margin-left: 859px;
  margin-top: -18px;
`;

const GPU = styled.h4`
  font-size: 21px;
  font-weight: 700;
  margin-left: 842px;
  margin-top: -9px;
`;

const AboutMemory = styled.p`
  font-size: 14px;
  margin-left: 807px;
  margin-top: -5px;
`;

const Capacity = styled.h4`
  font-size: 21px;
  font-weight: 700;
  margin-left: 854px;
  margin-top: 55px;
`;

const AboutCapacity = styled.p`
  font-size: 14px;
  margin-left: 783px;
  margin-top: -14px;
`;

const AboutBattery = styled.p`
  font-size: 14px;
  margin-left: 787px;
  margin-top: -13px;
`;

const AboutCamera = styled.p`
  font-size: 14px;
  margin-left: 795px;
  margin-top: -13px;
`;

const Weight = styled.h4`
  font-size: 21px;
  font-weight: 600;
  margin-left: 860px;
  margin-top: 50px;
`;

const BottomLine = styled.div`
  width: 290.66px;
  border-bottom: 1px solid #dcdcdc;
  margin-left: 752px;
  margin-top: 50px;
`

function SecondCompare () {
    return (
        <>
          <figure style={{
            marginLeft: '750px',
            marginTop: '-1585px',
          }}>
            <img src={mbp14} style={{
                width: '214px',
                height: '130px',
            }} />
          </figure>
          <figure style={{
            marginLeft: '843px',
            marginTop: '-2px'
          }}>
            <img src={color} style={{
                width: '32px',
                height: '14px',
            }} />
          </figure>
          <Mac14>MacBook Pro 14</Mac14>
          <p style={{
            marginTop: '-13px'
          }}><Price>₩2,690,000부터</Price></p>
          <Link to="/delete">
            <BuyButton>구입하기</BuyButton>
          </Link>
          <Link to="/delete" style={{
            textDecoration: 'none',
            color: '#0066CC',
            fontSize: '14px',
            fontWeight: '500',
          }} >
             <SeeMore>더 알아보기 &gt;</SeeMore>
          </Link>
          <LineBox />
          <Display>35.9cm</Display>
          <AboutDisplay>Liquid Retina XDR 디스플레이1</AboutDisplay>
          <figure style={{
            marginLeft: '825px',
            marginTop: '47px'
          }}>
            <img src={cpu} style={{
              width: '90px',
              height: '40px'
            }} />
          </figure>
          <AboutChip>Apple M1 Pro 칩 또는 Apple M1 Max 칩</AboutChip>
          <Max style={{
            marginLeft: '862px',
            marginTop: '59px'
          }}>최대</Max>
          <CPU>10코어</CPU>
          <AboutCPU>CPU</AboutCPU>
          <Max style={{
            marginLeft: '860px',
            marginTop: '42.3px'
          }}>최대</Max>
          <GPU>32코어</GPU>
          <p style={{
            fontSize: '14px',
            marginLeft: '858px',
            marginTop: '-18px'
          }}>GPU</p>
          <figure style={{
            marginLeft: '850px',
            marginTop: '55.4px'
          }}>
            <img src={memory} style={{
              width: '48px',
              height: '44px'
            }} />
          </figure>
          <AboutMemory>최대 64GB 통합 메모리</AboutMemory>
          <Capacity>8TB</Capacity>
          <AboutCapacity>구성 가능한 저장 장치 최대 용량2</AboutCapacity>
          <figure style={{
            marginLeft: '855px',
            marginTop: '46.4px'
          }}>
            <img src={battery} style={{
              width: '48px',
              height: '44px',
            }} />
          </figure>
          <AboutBattery>최대 17시간의 배터리 사용 시간4</AboutBattery>
          <figure style={{
            marginLeft: '860px',
            marginTop: '48.8px'
          }}>
            <img src={camera} style={{
              width: '48px',
              height: '44px'
            }}/>
          </figure>
          <AboutCamera>1080p FaceTime HD 카메라</AboutCamera>
          <figure style={{
            marginLeft: '863px',
            marginTop: '48.7px'
          }}>
            <img src={speaker} style={{
              width: '43px',
              height: '34px'
            }} />
          </figure>
          <p style={{
            marginLeft: '805px',
            fontSize: '14px'
          }}>스튜디오급 3 마이크 어레이
             <p style={{
              marginLeft: '-40px',
              fontSize: '14px',
              marginTop: '5.5px'
             }}>공간 음향을 지원하는 6 스피커 사운드 시스템</p>
          </p>
          <Weight>1.61kg</Weight>
          <p style={{
            fontSize: '14px',
            marginLeft: '880px',
            marginTop: '-16px'
          }}>무게</p>
          <figure style={{
            marginLeft: '870px',
            marginTop: '47px'
          }}>
            <img src={touchid} style={{
              width: '48px',
              height: '44px',
            }}/>
          </figure>
          <p style={{
            fontSize: '14px',
            marginLeft: '865px',
            marginTop: '-7px'
          }}>Touch ID</p>
          <BottomLine />
        </>
    )
}

export default SecondCompare;