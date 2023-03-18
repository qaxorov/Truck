import React from "react";
import styled from "styled-components";
import { Rectangle1 } from "../../../assets/img/img";

const Cardd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #faf9f9;
  padding: 32px 32px 45px 32px;
  border-radius: 12px;
`;

const Name = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #202020;
`;
const Text = styled.p`
  width: 296px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: rgba(32, 32, 32, 0.7);
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export default function Card({ img, text }) {
  return (
    <Cardd>
      <Texts>
        <Name>{text}</Name>
        <Text>
          Dry Van services and their consolidation requires a lot of experience
          to ensure...
        </Text>
      </Texts>
      <img src={img}></img>
    </Cardd>
  );
}
