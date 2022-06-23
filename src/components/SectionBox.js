import React from 'react';
import styled from 'styled-components';
import listimage from '../image/list_image.jpeg';
import listimage2 from '../image/1416.jpeg';

const SectionBox = styled.div`
  width: 100%;
  height: 750px;
  padding: 56px 0 82px 0;

  .title {
    text-align: center;
    font-size: 80px;
    font-weight: 600;
    margin-top: 100px;
    color: #1d1d1f;
  }


  .image1 {
    width: 374px;
    height: 218px;
  }

  .product1 {
    width: 980px;
    height: 552.29px;
    margin-left: 340px;
    padding-top: 40px;
  }



  .t-span1 {
    position: absolute;
    bottom: 190px;
    left: 430px;
    font-size: 40px;
    font-weight: 600;
  }

  .price1 {
    position: absolute;
    bottom: 150px;
    left: 481px;
    font-size: 24px;
    font-weight: 600;
  }

  .span1 {
    position: absolute;
    left: 550px;
    bottom: 250px;
    color: #bf4800
  }

  .button1 {
    position: absolute;
    text-decoration: none;
    bottom: 79px;
    left: 470px;
    background: #0071e3;
    color: white;
    width: 89.18px;
    height: 36px;
    border-radius: 980px;
    font-size: 17px;
    text-align:center;
    font-weight: 600;
  }
  .button1:hover {
    background: #0066cc;
  }

  .p1 {
    position: absolute;
    left: 17px;
    bottom: -7px;
    font-size: 15px;
  }

  .button2 {
    text-decoration: none;
    color: #0066cc;
    position: absolute;
    bottom: 87px;
    left: 578px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }


  .see-more:hover {
    text-decoration: underline;
  }

  .see-more {
    color: #0066cc;
    text-decoration: none;
  }

  .p-class1 {
    position: absolute;
    left: 505px;
    bottom: -17px;
    font-size: 16px;
    color: #86868b;
    margin-top: 18.7px;
    letter-spacing: -0.9px;
    font-weight: 400;
  }

  .image2 {
    width: 578px;
    height: 258px;
  }
  
  .product2 {
    width: 980px;
    height: 592.29px;
    margin-left: 750px;
    margin-top: -591px;
  }

  .t-span2 {
    position: absolute;
    top: 699px;
    left: 870px;
    font-size: 40px;
    font-weight: 600;
  }

  .price2 {
    position: absolute;
    top: 760px;
    left: 969px;
    font-size: 24px;
    font-weight: 600;

  }

  .button3 {
    text-decoration: none;
    position: absolute;
    bottom: 79px;
    background: #0071e3;
    width: 85.7px;
    height: 36px;
    border-radius: 980px;
    left: 965px;
  }

  .button3:hover {
    background: #0066cc;
  }

  .p2 {
    position: absolute;
    top: -8px;
    left: 13px;
    color: white;
    font-weight: 500;
  }

  .see-more2 {
    text-decoration: none;
    color: #0066cc;
  }

  .see-more2:hover {
    text-decoration: underline;
  }

  .button4 {
    position: absolute;
    bottom: 86px;
    left: 1075px;
  }
  
`;

function Section() {
    return (
        <SectionBox>
        <h1 className="title">MacBook Pro</h1>
        <div className="product1">
            <figure className="figure1">
                <img className="image1" src={listimage} alt="image" />
            </figure>
            <span className="span1">New</span>
            <span className="t-span1">MacBook Pro 13</span>
            <span className="price1">₩1,790,000 부터</span>
            <a href="https://www.apple.com/kr/shop/buy-mac/macbook-pro/13" className="button1"><p className="p1">가격 보기</p></a>
            <span className="button2"><a href="https://www.apple.com/kr/macbook-pro-13/" className="see-more">더 알아보기 &gt;</a></span>
            <p className="p-class1">출시일은 추후 공개</p>
        </div>
        <div className="product2">
          <figure className="figure2">
            <img className="image2" src={listimage2} alt="image" />
          </figure>
          <span className="t-span2">MacBook Pro 14 및 16</span>
          <span className="price2">₩2,690,000 부터</span>
          <a href="/" className="button3"><p className="p2">구입하기</p></a>
          <span className="button4"><a href="/" className="see-more2">더 알아보기 &gt;</a></span>
        </div>
      </SectionBox>
    )
}

export default Section;