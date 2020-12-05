import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import Iphone from "../../assets/img/iphone-pink.jpg";
import Laptop from "../../assets/img/laptop.jpg";
import Playstation5 from "../../assets/img/playstation-5.jpg";

import DetailsItem from "../DetailsItem";

const HeroContainer = styled.div`
  height: auto;
  width: 100%;
  margin-top: 60px;
  padding: 0.3rem;

  .hero-title {
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 2rem;
  }

  img {
    width: 7rem;
    margin: 0.5rem auto;
  }
  .jxdlpm {
    margin: 0.4rem auto;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    .hero-title {
      margin: 0 1rem;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: repeat(1, 100%);
    }

    .jGoalY {
      margin: 0.4rem auto;
    }
    .bdyzDc,
    .bdyzDc {
      margin: 0 auto !important;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .hero-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    .hero-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <p className='hero-title'>LATEST PRODUCTS</p>
      <div className='hero-grid'>
        <CardItem img={Iphone} name='Iphone rosa' reviews='12' price='29.99' />
        <CardItem img={Laptop} name='Laptop Huawei' reviews='10' price='45.99' />
        <CardItem img={Playstation5} name='Playstation 5' reviews='7' price='26.99' />
      </div>
      <DetailsItem img={Playstation5} />
    </HeroContainer>
  );
}

export default Hero;
