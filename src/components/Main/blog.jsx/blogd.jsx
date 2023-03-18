import React from "react";
import styled from "styled-components";
import { Truck1, Truck2, Truck3, Truck4 } from "../../../assets/img/img";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const Page = styled.section`
  padding: 40px 0px;
`;
const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #202020;
`;
const Cardds = styled.div`
  display: flex;
  gap: 24px;
`;
export default function Blogd() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Title>Blog</Title>
          <Cardds>
            <Card img={Truck1} />
            <Card img={Truck2} />
            <Card img={Truck3} />
            <Card img={Truck4} />
          </Cardds>
        </Box>
      </div>
    </Page>
  );
}
