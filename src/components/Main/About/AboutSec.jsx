import React from "react";
import styled from "styled-components";
import Carusel from "./Carusel";
const Page = styled.section`
  padding: 80px 0px 40px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
const Text1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: #202020;
  text-align: center;
`;
const Text2 = styled.p`
  width: 744px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #202020;
  text-align: center;
`;
export default function AboutSec() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Texts>
            <Text1>About Company</Text1>
            <Text2>
              Trucking-Times is an active participant in the transport and
              logistics market of USA, providing a full range of services for
              the transportation of goods of any complexity.
            </Text2>
          </Texts>
          <Carusel />
        </Box>
      </div>
    </Page>
  );
}
