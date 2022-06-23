import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderBox = styled.div`
  width: 100%;
  height: 34px;
  background-color: #000000CC;
  ul li {
      list-style: none;
      float: left;
      margin-left: 20px;
  }

  a {
      text-decoration-line: none;
      font-size: 12px;
      color: #f5f5f7;
      margin-left: 30px;
  }

  a:hover {
    color: #D3D3D3;
  }

  .menu {
      position: absolute;
      top: -7px;
      left: 250px
  }

  padding-top: 10px;

  .apple_home {
    font-size: 18px;
  }

  .search {
    font-size: 15px;
    position: absolute;
    top: 11px;
    right: 350px;
    bottom: 5px;
    color: #f5f5f7;
  }

  .shopping {
    font-size: 15px;
    position: absolute;
    top: 11px;
    right: 280px;
    color: #f5f5f7;
  }
`;


function Header() {
    return (
       <div>
           <HeaderBox>
           <ul className="menu">
                     <li>
                        <a href="https://www.apple.com/kr/" className="apple_home"><FontAwesomeIcon icon={faApple} /></a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/store" className="apple_store">스토어</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/mac/" className="apple_mac">Mac</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/mac/" className="apple_ipad">iPad</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/iphone/" className="apple_iphone">iPhone</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/watch/" className="apple_watch">Watch</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/airpods/" className="apple_airpods">AirPods</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/tv-home/" className="apple_tv">TV 및 홈</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/services/" className="apple_provide">Apple 독점 제공</a>
                     </li>
                     <li>
                       <a href="https://www.apple.com/kr/shop/accessories/all" className="apple_accessories">악세서리</a>
                     </li>
                     <li>
                       <a href="https://support.apple.com/ko-kr" className="apple_support">고객지원</a>
                     </li>
                 </ul>
                 <ul className="detail">
                   <li>
                     <a href="/" className="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                   </li>
                   <li>
                     <a href="/" className="shopping"><FontAwesomeIcon icon={faBagShopping} /></a>
                   </li>
                 </ul>
           </HeaderBox>
           
       </div>
       
    )
}

export default Header;
