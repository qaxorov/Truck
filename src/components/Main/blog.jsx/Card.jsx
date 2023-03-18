import React from "react";
import styled from "styled-components";
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Img = styled.img`
  width: 264px;
  height: 196px;
`;
const Text1 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ababab;
`;
const Text2 = styled.p`
  width: 162px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #202020;
`;
const Text3 = styled.p`
  width: 264px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #a0a0a0;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export default function Card({ img }) {
  return (
    <Cards>
      <Img src={img} />
      <Texts>
        <Text1>18-08-21, 14:00</Text1>
        <Text2>Performance health and life</Text2>
        <Text3>No matter how we keep an eye on the truck...</Text3>
      </Texts>
    </Cards>
  );
}
