import React from "react";
import styled from "styled-components";
import { BackHeader, Logo } from "../../assets/img/img";
import "./header.css";
const Headerr = styled.header`
  padding: 28px 0px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Item = styled.li`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;
const Select = styled.select`
  outline: none;
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
const Btn1 = styled.button`
  padding: 12px 24px;
  border-radius: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #202020;
  background-color: white;
  border: none;
`;
const Btn2 = styled(Btn1)`
  background-color: black;
  color: #fff;
`;
const Texts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const TwoText = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Text1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #fff;
`;
const Text2 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 840px;
`;
const title = styled.title`
  font-size: 44px;

  display: flex;
  align-items: center;

  color: #202020;
`;

const Ism = styled.div`
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
display: flex;
align-items: center;

color: #202020;
`;




export default function Header() {
  return (
    <Headerr className="header">
      <div className="container">
        <Box>
          <Nav>
            <Left>
              <img src={Logo} alt="logo" />
            </Left>
            <Right>
              <List>
                <Item>Home</Item>
                <Item>About us</Item>
                <Item>Services</Item>
                <Item>Blog</Item>
                <Item>Contact</Item>
              </List>
              <Select name="" id="">
                <option value="">Eng</option>
                <option value="">Uzb</option>
                <option value="">Ru</option>
              </Select>
              <Btn1>For driver</Btn1>
              <Btn2>Get quote</Btn2>
            </Right>
          </Nav>
          <Texts>
            <TwoText>
              <Text1>240,000</Text1>
              <Text2>Miles per year</Text2>
            </TwoText>
            <TwoText>
              <Text1>45,000</Text1>
              <Text2>Delivered loadsper year</Text2>
            </TwoText>
            <TwoText>
              <Text1>650,000</Text1>
              <Text2>Tons of annual delivered goods</Text2>
            </TwoText>
            <TwoText>
              <Text1>500,000</Text1>
              <Text2>Happy customers</Text2>
            </TwoText>
          </Texts>
        </Box>
        <div>About Company</div>
      </div>
    </Headerr>
  );
}
