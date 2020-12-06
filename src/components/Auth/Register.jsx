import React,{useState} from 'react'
import styled from 'styled-components'
import {Row,Container,Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FormContainer=styled.div`
   height:auto;
   width:100%;
   padding:1rem;

   .text-container {
    height: auto;
    width: 90%;
    background-color: #fff;
    margin:  50px auto;
    text-align: center;
    /* padding: 0 2rem; */

    .form-container{
    height: auto;
    width: 90%;
    background-color: #fff;
    margin:  50px auto;
    text-align:left;
    display:inline-block
    /* padding: 0 2rem; */
    }

  }
`
const FormSub=styled.form`
max-width:30%;
margin:2rem auto;

padding:2rem;
text-align:left;
label{
  display:block;
  font-weight:bold;
  font-size:20px
}
input{
  display:block;
  width:100%;
  border-radius:5px;
  padding:.5rem;
}
@media screen and (min-width: 320px) {
    max-width:100%;
  }
@media screen and (min-width: 480px) {
    max-width:100%;
  }

  @media screen and (min-width: 768px) {
     max-width:40%;
    }

`
function Login() {
 const [usuario,setUsuario]=useState({
   nombre:'',
   contraseña:''
 })
    return (
    <FormContainer>
      <div className='text-container' >
      <h1>Registro</h1>
      </div>
      <div className='form-container'>
      <FormSub className="form-class">
      <label> Nombre:</label> <input type="text" name="name" placeholder="Nombre"/>
      <label> Contraseña:</label> <input type="text" name="name" placeholder="contraseña"/>
      <label>Confirmar Contraseña:</label> <input type="text" name="name" placeholder="contraseña"/>
      <Button variant="success" style={{marginTop:"5px"}}>Sign</Button>
      <p>Ya tienes una cuenta? <Link to="/login"><span>Accede a tu cuenta</span></Link></p>
      </FormSub>
      </div>
    
    </FormContainer>
      
    )
}

export default Login
