import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const ItemViewContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0.3rem auto;
  padding: 0.5rem;

  img {
    width: 15rem;
  }

  .form-group {
    width: 90%;
    margin: 0 auto;
  }

  .form-group select {
    background-color: #f7f7f9 !important;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 28rem;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    /* height: 24rem; */
  }
`;

function ItemView({ imgProduct, nameProduct, priceProduct }) {
  return (
    <ItemViewContainer>
      <img src={imgProduct} alt='laptop'></img>
      <p className='small-black-font left'>{nameProduct}</p>
      <p className='small-gray-font left'>${priceProduct}</p>
      <Form>
        <Form.Group controlId='exampleForm.SelectCustom'>
          <Form.Control as='select' custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <hr></hr>
    </ItemViewContainer>
  );
}

export default ItemView;
