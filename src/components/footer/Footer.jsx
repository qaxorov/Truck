import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/img/img";
const Footerr = styled.footer`
  background-color: #161616;
  padding: 60px 0px 120px 0px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
`;
const Text1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;
const Text2 = styled.div`
  width: 264px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const List = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Item = styled.li`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const Img = styled.img`
  width: 94px;
  height: 40px;
`;
const Circle = styled.div`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 100px;
`;
const Divv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export default function Footer() {
  return (
    <Footerr>
      <div className="container">
        <Box>
          <Left>
            <Texts>
              <Text1>+1 (314) 396-6922</Text1>
              <Text2>
                If you have any questions or need help, feel free to contact us.
              </Text2>
            </Texts>
            <Img src={Logo} alt="" />
          </Left>
          <Right>
            <List>
              <Item>Home</Item>
              <Item>About us</Item>
              <Item>Services</Item>
              <Item>Blog</Item>
              <Item>Contact</Item>
            </List>
            <Divv>
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Divv>
          </Right>
        </Box>
      </div>
    </Footerr>
  );
}
