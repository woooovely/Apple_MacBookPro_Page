import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background-color: white;

  .greetings {
    text-align: center;
    margin-top: 400px;
    overflow: hidden;
    animation: greetings 1s ease-in;
    @keyframes greetings {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }

    .link:hover {
    color: #9EC1D6;
  }

    animation: link 1.3s ease-out;
    @keyframes link {
        0% {
            opacity: 0;
            transform: translateY(50px)
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }

  }
`;

const MoveText = styled.span`
  margin-left: 770px;
  color: #0066CC;
  font-weight: 500;
`;

function Main () {
    return (
        <Background>
            <h1 className="greetings">
                안녕하세요? 환영합니다.
            </h1>
            <Link to="/macbook-pro/" style={{
                textDecoration: 'none',
            }} className="link">
                <MoveText className="move">MacBook Pro 상세</MoveText>
            </Link>
        </Background>
    )
}

export default Main;