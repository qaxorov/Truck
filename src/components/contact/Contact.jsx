import React from "react";
import styled from "styled-components";
const Page = styled.section`
  padding: 40px 0px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Right = styled.div`
  width: 744px;
  height: 440px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Text = styled.h2`
  width: 360px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #202020;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Text1 = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #202020;
`;
const Text2 = styled.p`
  width: 242px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(32, 32, 32, 0.5);
`;
export default function Contact() {
  return (
    <Page>
      <div className="container">
        <Box>
          <Left>
            <Text>The Republic of Panama, Panama City</Text>
            <Bottom>
              <Texts>
                <Text1>Adress</Text1>
                <Text2>Sortis Business Tower, Office 17H Street 56/57</Text2>
              </Texts>
              <Texts>
                <Text1>Contact us</Text1>
                <Text2>+1 278 890 89 76 usmon.designer@mail.com</Text2>
              </Texts>
              <Texts>
                <Text1>Fax</Text1>
                <Text2>Sortis Business Tower, Office 17H Street 56/57</Text2>
              </Texts>
            </Bottom>
          </Left>
          <Right>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Ташкент
              </a>
              <a
                href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Яндекс&nbsp;Карты — транспорт, навигация, поиск мест
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
                width={744}
                height={440}
                frameBorder={1}
                allowFullScreen="true"
                style={{ position: "relative" }}
              />
            </div>
          </Right>
        </Box>
      </div>
    </Page>
  );
}
