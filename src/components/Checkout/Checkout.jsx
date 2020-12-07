import React from "react";
import styled from "styled-components";
import PlayStation5 from "../../assets/img/playstation-5.jpg";

const CheckoutContainer = styled.div`
  padding: 1rem;
  height: auto;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const RoundedWhite = styled.div`
  height: auto;
  background-color: #cecccc;
  padding: 0.8rem;
  border-radius: 15px;
  text-align: justify;
  margin-bottom: 1.3rem;

  img {
    width: 10rem;
  }
`;

function Checkout() {
  return (
    <CheckoutContainer>
      <p className='titles-pages'>Checkout</p>
      <GridContainer>
        <p className='weight-medium-font'>Datos de envío</p>
        <RoundedWhite>
          <p>
            <b>C.P. 28973</b>
            <br></br>
            Cristóbal Colón $750 - Villa de Álvarez - Colima - Mex<br></br>Mariana Fajardo -
            3121743226
          </p>
        </RoundedWhite>
        <p className='weight-medium-font'>Resumen de compra</p>
        <RoundedWhite>
          <img src={PlayStation5} alt='Playstation 5'></img>
          <br></br>
          <b>1 x PlayStation</b>
          <p className='small-gray-font'>
            Descripción del playstation va aqui xd sirve pa jugar <b>$1251730</b>
          </p>
          <hr></hr>
          <p className='right'>Sub total: $1574</p>
          <hr></hr>
          <p className='right'>Total: $1574</p>
        </RoundedWhite>
      </GridContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
