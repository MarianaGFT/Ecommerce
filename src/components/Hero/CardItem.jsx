import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: auto;
  width: 14rem;
  background-color: #fff;
  /* margin: 0.8rem auto; */
  padding: 0.3rem;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: double;
  margin-top: 1rem;

  .item-name {
    letter-spacing: 2.5px;
    margin: 0;
  }

  .item-reviews {
    margin: 0;
    font-size: 0.9rem;
    color: #606060;
  }

  .item-price {
    font-size: 1.2rem;
    font-weight: bold;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    margin: 1rem;
  }
`;

function CardItem({ img, name, reviews, price }) {
  return (
    <CardContainer>
      <img src={img} alt='Iphone pink'></img>
      <p className='item-name'>{name}</p>
      <p className='item-reviews'>{reviews} reviews</p>
      <p className='item-price'>${price}</p>
    </CardContainer>
  );
}

export default CardItem;
