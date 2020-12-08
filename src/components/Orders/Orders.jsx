import React from "react";
import styled from "styled-components";
import { Form, Button, Table } from "react-bootstrap";

const OrdersContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 70px 1rem 1rem 1rem;
  text-align: left;
  display: grid;
  /* grid-template-rows: 100px 100px; */
  grid-template-columns: 1fr;

  .btn-dark {
    background-color: #000;
    border-color: #000;
    width: 9rem;
    height: 3rem;
    border-radius: 0 !important;
    margin-bottom: 1.3rem;
  }

  .table {
    margin: 1rem auto;
  }

  .form-control {
    width: 100%;
    height: 3rem;
  }

  .table {
    width: 100%;
  }

  .user-info {
    margin: 0;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .form-control {
      width: 25rem;
      height: 3rem;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    grid-template-columns: 35% 65%;
    .user-info {
      margin-left: 1rem;
    }

    .form-control {
      width: 14rem;
    }

    .table {
      margin: 0;
      margin-top: 1rem !important;
      width: 90%;
    }

    .user-info {
      margin: 0 0 0 2rem;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    .user-info {
      margin: 0 0 0 3rem;
    }
  }
`;

function Orders() {
  return (
    <OrdersContainer>
      <div className='user-info'>
        <p className='uppercase'>USER INFO</p>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='small-gray-font'>Name</Form.Label>
            <Form.Control type='text' placeholder='Mariana Fajardo' />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='small-gray-font'>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label className='small-gray-font'>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label className='small-gray-font'>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='dark' type='submit'>
            UPDATE USER
          </Button>
        </Form>
      </div>
      <div>
        <p className='uppercase'>ORDERS</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>156.45</td>
              <td>2020-11-10</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>2</td>
              <td>9081.59</td>
              <td>2020-19-02</td>
              <td>DETAILS</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </OrdersContainer>
  );
}

export default Orders;
