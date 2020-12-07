import React from "react";
import styled from "styled-components";
import Laptop from "../../assets/img/laptop.jpg";
import { Button } from "react-bootstrap";
import Playstation5 from "../../assets/img/playstation-5.jpg";

import ItemView from "./ItemView";

const CartContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0;
  padding: 0.8rem 0.5rem;

  .cart-title {
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 2rem;
    padding-top: 60px;
  }

  hr {
    border-top: 2px solid rgba(0, 0, 0, 0.1) !important;
  }
`;

const WhiteDivTable = styled.div`
  height: auto;
  width: 100%;
  padding: 0.3rem 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 0 auto;

  .btn-dark {
    color: #fff;
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    width: 100%;
    padding: 0.5rem;
    margin: 0.3rem 0;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    width: 28rem;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    width: 23rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  /* grid-template-rows: 100px 100px; */
  grid-template-columns: 1fr;
  /* grid-gap: 5px; */

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function Carrito() {
  return (
    <CartContainer>
      <p className='cart-title'>SHOPPING CART</p>
      <GridContainer>
        <ItemView
          imgProduct={Playstation5}
          nameProduct='Laptop Huawei'
          priceProduct='7854'
        ></ItemView>
        <ItemView
          imgProduct={Playstation5}
          nameProduct='Play Station 5'
          priceProduct='14054'
        ></ItemView>
        <div>
          <WhiteDivTable>
            <p className='uppercase left'>SUBTOTAL (15)</p>
            <p className='small-gray-font left'>$78918.19</p>
          </WhiteDivTable>
          <WhiteDivTable>
            <Button variant='dark'>BUY</Button>
          </WhiteDivTable>
        </div>
      </GridContainer>
    </CartContainer>
  );
}

export default Carrito;
