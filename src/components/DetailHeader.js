import React from "react";
import styled from "styled-components";
import mbpro13 from "../image/mpro13.png";
import mbpro1416 from "../image/mbpro1416.png";
import compare from "../image/compare.png";
import display from "../image/display.png";
import acc from "../image/accessories.png";
import mon from "../image/monterey.png";

const HeaderBox = styled.div`
  width: 100%;
  height: 116px;
  background-color: #f5f5f799;
  position: absolute;

  ul li {
    list-style-type: none;
  }

  a {
    text-decoration-line: none;
  }

  .mbpro_name {
    font-size: 12px;
    color: #1d1d1f;
    position: absolute;
    left: 480px;
    top: 80px;
  }

  .new {
    color: #bf4800;
    font-size: 10px;
    position: absolute;
    left: 514px;
    bottom: 9px;
  }
  span:hover {
    color: #06c;
  }


`;

const LinkBox = styled.div`
  .a_box1 {
    width: 89.53px;
    height: 89px;
    margin-right: 40px;
  }

  margin-top: -40px;

  display: flex;

  span {
    color: black;
    font-size: 12px;
  }

  justify-content: center;

  margin-top: -10px;
  paddig: 20px;

  .name1 {
    margin-left: 25px;
    position: absolute;
    top: 85px;
  }

  .name2 {
    margin-left: 42px;
    position: absolute;
    top: 85px;
  }

  .name3 {
    margin-left: 47px;
    position: absolute;
    top: 85px;
  }

  .name4 {
    margin-left: 35px;
    position: absolute;
    top: 85px;
  }

  .name5 {
    margin-left: 35px;
    position: absolute;
    top: 85px;
  }
`;

const SectionBox = styled.div`
  width: 100%;
  height: 697.84px;
  padding: 56px 0 82px 0;

  .title {
    text-align: center;
    font-size: 80px;
    font-weight: 600;
    margin-top: 15px;
    color: #1d1d1f;
  }
`;

function DetailHeader() {
  return (
    <HeaderBox>
      <ul className="apple_product">
        <li className="mbpro13">
          <LinkBox>
            <div className="a_box1">
              <a href="https://www.apple.com/kr/macbook-pro-13/" className="macbook_pro13">
                <figure className="macbook pro icon">
                  <img className="m13" src={mbpro13} alt="m13_image" />
                </figure>
                <span className="mbpro_name">MacBook Pro 13</span>
                <span className="new">New</span>
              </a>
            </div>
            <div className="a_box2">
              <a href="https://www.apple.com/kr/macbook-pro-14-and-16/" className="macbook_pro1416">
                <figure className="macbook pro icon">
                  <img className="m1416" src={mbpro1416} alt="m1416_image" />
                </figure>
                <span className="name1">MacBook Pro 14 및 16</span>
              </a>
            </div>
            <div className="a_box3">
              <a href="https://www.apple.com/kr/mac/compare/" className="compare">
                <figure className="compare_icon">
                  <img
                    className="compare_p"
                    src={compare}
                    alt="compare_image"
                  />
                </figure>
                <span className="name2">비교하기</span>
              </a>
            </div>
            <div className="a_box4">
              <a href="https://www.apple.com/kr/displays/" className="display">
                <figure className="display_icon">
                  <img className="monitor" src={display} alt="display_image" />
                </figure>
                <span className="name3">디스플레이</span>
              </a>
            </div>
            <div className="a_box5">
              <a href="https://www.apple.com/kr/shop/mac/accessories" className="accessories">
                <figure className="accessories_icon">
                  <img className="acc" src={acc} alt="acc_image" />
                </figure>
                <span className="name4">액세서리</span>
              </a>
            </div>
            <div className="a_box6">
              <a href="https://www.apple.com/kr/macos/monterey/" className="monterey">
                <figure className="mon_icon">
                  <img className="mon" src={mon} alt="mon_image" />
                </figure>
                <span className="name5">Monterey</span>
              </a>
            </div>
          </LinkBox>
        </li>
      </ul>
    </HeaderBox>
  );
}

export default DetailHeader;
