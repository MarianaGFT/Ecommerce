import React from "react";
import styled from "styled-components";
import { button } from "react-bootstrap";

const DetailsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  .information-container {
    height: auto;
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    text-align: left;
    /* padding: 0 2rem; */
  }

  table,
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .container-table button {
    width: 11rem;
  }

  img {
    width: 9rem;
  }

  .product-mayus {
    letter-spacing: 2px;
    font-weight: bold;
    margin: 0 0.5rem;
  }

  .product-minus {
    color: #55595c;
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }
`;

const TableDetails = styled.div`
  height: auto;
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: inline-flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const LowerCase = styled.p`
  color: #55595c;
  font-size: 0.8rem;
  margin: 0 0.5rem;
`;

function DetailsItem({ img }) {
  return (
    <DetailsContainer>
      <div className='information-container'>
        <div>
          <div className='container-img'>
            <img src={img}></img>
          </div>
          <div className='container-info'>
            <p className='product-mayus'>PLAY STATION 5</p>
            <hr></hr>
            <LowerCase>12 reviews</LowerCase>
            <hr></hr>
            <p className='product-mayus'>PRICE: $29.99</p>
            <hr></hr>
            <LowerCase>
              Description Meet Echo Dot - Our most popular smart speaker with a fabric design. It is
              our most compact smart speaker that fits perfectly into small space
            </LowerCase>
          </div>
          <div className='container-table'>
            <TableDetails>
              <LowerCase>Price:</LowerCase>
              <LowerCase>$29.99</LowerCase>
            </TableDetails>
            <TableDetails>
              <p className='product-minus'>Stock:</p>
              <p className='product-minus'>Out of stock</p>
            </TableDetails>
            <TableDetails>
              <button type='button' class='btn btn-secondary'>
                ADD TO CART
              </button>
            </TableDetails>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
}

export default DetailsItem;
