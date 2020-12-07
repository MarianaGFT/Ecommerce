import React,{useContext,useEffect, useState} from "react";
import styled from "styled-components";
import { button,Form } from "react-bootstrap";
import {productosContext} from '../Context/Productos/ProductosState'
import {carritoContext} from '../Context/Carrito/CarritoState'
import Loader from '../Layout/Loader'

const DetailsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  

  .information-container {
    height: auto;
    width: 90%;
    background-color: #fff;
    margin:  50px auto;
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
  align-items:center;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const LowerCase = styled.p`
  
  color: #55595c;
  font-size: 0.8rem;
  margin: 0 0.5rem;
`;

function DetailsItem({match,history}) {
  const {producto,obtenerProducto,loading}=useContext(productosContext)
  const { agregarItem}=useContext(carritoContext)
  const[qty,setQty]=useState(1)

  useEffect(() => {
   obtenerProducto(match.params.id)
  }, [match])

  const clickHandler=e=>{
    e.preventDefault()
    producto.qty=qty
    agregarItem(producto)
    history.push('/carrito')
  }
  return (
    <DetailsContainer>
    
        <div className='information-container'>
        {loading ? (<Loader/>):(
        <div>
        
          <div className='container-img'>
            <img src={producto.image}></img>
          </div>
          <div className='container-info'>
            <p className='product-mayus'>{producto.name}</p>
            <hr></hr>
            <LowerCase>{producto.numReviews}</LowerCase>
            <hr></hr>
            <p className='product-mayus'>PRICE:$ {producto.price}</p>
            <hr></hr>
            <LowerCase>
              {producto.description}
            </LowerCase>
          </div>
          <div className='container-table'>
         {producto.stock!==0 && <TableDetails>
              <LowerCase>Cantidad</LowerCase>
              <LowerCase> <Form.Control size="sm" as ='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                                {/* Toma el array de Stock mapeandolo y haciendo cada uno de los elementos un select
                                   en este por eejemplo cada cantidad de stock que saca la pinta como una opción del select */}
                                    {[...Array(producto.stock ).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}
                                </Form.Control></LowerCase>
            </TableDetails>}
            <TableDetails>
              <LowerCase>Total:</LowerCase>
              <LowerCase>{producto.price * qty}</LowerCase>
            </TableDetails>
            <TableDetails>
              <p className='product-minus'>Stock:</p>
              <p className='product-minus'>{producto.stock==0? "Sin unidades disponibles":"Disponible"}</p>
            </TableDetails>
            <TableDetails>
              <button type='button' class='btn btn-secondary'disabled={producto.stock===0?true:false} onClick={clickHandler}>
                ADD TO CART
              </button>
            </TableDetails>
          </div>
        </div>
       )}
      </div>
      
      
    </DetailsContainer>
  );
}

export default DetailsItem;
