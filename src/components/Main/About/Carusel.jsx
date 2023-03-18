import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Slide1, Vector1, Vector2 } from "../../../assets/img/img";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={Vector1} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={Vector2} alt="" />
    </div>
  );
}
const Img = styled.img`
  border-radius: 17px;

`

const Sliderr = styled(Slider)`
  width: 1128px;
  border: 1px solid transparent;
  border-radius: 100px !important;
`;
export default function Carusel() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Sliderr {...settings}>
      <Img src={Slide1} alt="" />
      <Img src={Slide1} alt="" />
      <Img src={Slide1} alt="" />
    </Sliderr>
  );
}
