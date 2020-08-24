import React from 'react';
import styled from 'styled-components';
import staff from 'assets/staff.png';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 210px;
    background-color: ${({ theme }) => theme.header};
    border-radius: 0 0 50px 50px;
    overflow:hidden;
    @media (min-width: 768px) {
      width: 80%;
      border-radius: 0 0 25px 25px;
  }

  @media (min-width: 1024px) {
      width: 100%;
      border-radius: 0 0 50px 50px;
  }
`;

const Title = styled.h1`
    font-size: 2.4rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-transform: uppercase;
    color:  ${({ theme }) => theme.fontColor};
    z-index:1;
    text-shadow: 2px 2px 8px #aaa;
    @media (min-width: 768px) {
      font-size: 4.6rem;
  }
`;

const StaffImg = styled.img`
    position: absolute;
    bottom:0%;
    left: 0%;
    width: 100%;
    opacity: 0.5;
    
  @media (min-width: 768px) {
    bottom:-50%;
    left: -1%;
    width:100%;
  }
  @media (min-width: 1024px) {
     bottom:-60%;
     width:80%;
  }
`;

const Header = () => (
  <Wrapper>
    <Title>Tabulatura</Title>
    <StaffImg src={staff} alt="staff" />
  </Wrapper>
);

export default Header;
