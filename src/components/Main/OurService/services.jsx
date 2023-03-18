import React from "react";
import styled from "styled-components";
import { OneTruck, Rectangle1, Rectangle2 } from "../../../assets/img/img";
import Card from "./Card";

const Page = styled.section`
  padding: 40px 0px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;
`;
const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  text-align: center;
  color: #202020;
`;
const Cards = styled.div`
  display: flex;
  gap: 24px;
`;
export default function Services() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Title>Our Service</Title>
          <Cards>
            <Card img={OneTruck} text={"Dry van"} />
            <Card img={Rectangle1} text={"Refeer"} />
            <Card img={Rectangle2} text={"Expedited"} />
          </Cards>
        </Box>
      </div>
    </Page>
  );
}
