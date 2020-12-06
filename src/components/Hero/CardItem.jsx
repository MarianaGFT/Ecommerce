import React from "react";
import styled from "styled-components";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  height: auto;
  width: 14rem;
  background-color: #fff;
  /* margin: 0.8rem auto; */
  padding: 0.3rem;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: double;
  margin-top: 2rem;

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

function CardItem({ producto}) {
  return (
    <CardContainer>
      <Link to={`/product/${producto._id}`}>
      <img src={producto.image} alt='Iphone pink'></img>
      </Link>
      <p className='item-name'>{producto.name}</p>
      <p className='item-reviews'>{producto.numReviews} reviews</p>
      <p className='item-price'>${producto.price}</p>
    </CardContainer>
  );
}

export default CardItem;
