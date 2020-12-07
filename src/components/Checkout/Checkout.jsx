import React from "react";
import styled from "styled-components";
import { Form, Row, Col, Button } from "react-bootstrap";
import PlayStation5 from "../../assets/img/playstation-5.jpg";

const CheckoutContainer = styled.div`
  padding: 1rem;
  height: auto;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .btn-info {
    border-radius: 8px;
    width: 11rem;
    margin: 0.8rem auto;
  }

  div {
    margin: 1.3rem auto 0 auto;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const RoundedWhite = styled.div`
  height: auto;
  background-color: #cecccc;
  padding: 0.8rem;
  border-radius: 15px;
  text-align: justify;
  /* margin-bottom: 1.3rem; */
  margin: 0 auto;

  img {
    width: 8rem;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    width: 23rem;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 26rem;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 38rem;
  }
`;

function Checkout() {
  return (
    <CheckoutContainer>
      <p className='titles-pages'>Checkout</p>
      <GridContainer>
        <div>
          <p className='weight-medium-font'>Datos de envío</p>
          <RoundedWhite>
            <p>
              <b>C.P. 28973</b>
              <br></br>
              Cristóbal Colón #750 - Villa de Álvarez - Colima - Mex<br></br>Mariana Fajardo -
              3121743226
            </p>
          </RoundedWhite>
        </div>
        <div>
          <p className='weight-medium-font'>Resumen de compra</p>
          <RoundedWhite>
            <img src={PlayStation5} alt='Playstation 5'></img>
            <br></br>
            <b>1 x PlayStation</b>
            <p className='small-gray-font'>
              Descripción del playstation va aqui xd sirve pa jugar <br></br>
              <b>$1251730</b>
            </p>
            <hr></hr>
            <p className='right'>Sub total: $1574</p>
            <hr></hr>
            <p className='right'>Total: $1574</p>
          </RoundedWhite>
        </div>
        <div>
          <p className='weight-medium-font'>Método de pago</p>
          <RoundedWhite>
            <Form>
              <fieldset>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type='radio'
                      label='Tarjeta de crédito'
                      name='formHorizontalRadios'
                      id='formHorizontalRadios1'
                      className='uppercase'
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Form>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control type='number' placeholder='1234-5678-9000-0000' />
              </Form.Group>
            </Form>
            <Form>
              <Form.Label>Fecha de expiración</Form.Label>
              <Form.Row>
                <Col xs={3}>
                  <Form.Control as='select' className='mr-sm-2' id='inlineFormCustomSelect' custom>
                    <option value='0'>Mes</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Control>
                </Col>
                <Col xs={3}>
                  <Form.Control placeholder='Año' />
                </Col>
                <Col>
                  <Form.Control placeholder='Código de seguridad' />
                </Col>
              </Form.Row>
            </Form>
          </RoundedWhite>
        </div>
        <div>
          <Button variant='info'>Finalizar compra</Button>
        </div>
      </GridContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
