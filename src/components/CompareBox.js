import React from 'react';
import styled from 'styled-components';
import mbpro13 from '../image/compare_mbpro13.png';
import color from '../image/silver_gray.png';

const CompareBox = styled.div`
  width: 100%;
  height: 2100px;
  background-color: #fafafa;
  padding-top: 113px;
  margin-top: 170px;
  padding-bottom: 113px;

  .c_mbpro13 {
    width: 212px;
    height: 124px;
    margin-left: 340px;
    margin-top: 49px;
  }

  .color1 {
    width: 32px;
    height: 14px;
    margin-left: 427px;
  }

  .figure2 {
    margin-bottom: 5px;
  }
`;

const CompareTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  margin-top: 30px;
`;

const SpanNew = styled.span`
  font-size: 12px;
  color: #bf4800;
  margin-left: 469px;
`;

const Mbpro13Title = styled.h3`
  font-size: 24px;
  margin-left: 398px;
  margin-top: 5px;
  font-weight: 600;
`


function CompareContainer() {
    return (
        <CompareBox>
          <CompareTitle>당신에게 맞는 Mac은?</CompareTitle>
          <figure className="figure1">
            <img className="c_mbpro13" src={mbpro13} />
          </figure>
          <figure className="figure2">
            <img className="color1" src={color} />
          </figure>
          <SpanNew>New</SpanNew>
          <Mbpro13Title>MacBook Pro 13</Mbpro13Title>
        </CompareBox>
    )
};

export default CompareContainer;