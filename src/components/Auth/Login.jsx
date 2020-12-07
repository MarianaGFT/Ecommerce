import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Container, Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { usuariosContext } from "../../Context/Usuarios/UsuariosState";
const FormContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;

  .text-container {
    height: auto;
    width: 90%;
    background-color: #fff;
    margin: 50px auto;
    text-align: center;
    /* padding: 0 2rem; */

    .form-container {
      height: auto;
      width: 90%;
      background-color: #fff;
      margin: 50px auto;
      text-align: left;
      display: inline-block;
      /* padding: 0 2rem; */
    }
  }
`;
const FormSub = styled.form`
  max-width: 30%;
  margin: 2rem auto;

  padding: 2rem;
  text-align: left;
  label {
    display: block;
    font-weight: bold;
    font-size: 20px;
  }
  input {
    display: block;
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem;
  }
  @media screen and (min-width: 320px) {
    max-width: 100%;
  }
  @media screen and (min-width: 480px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;
function Login({ history, location }) {
  const { usuario, autenticado, loguearUsuario } = useContext(usuariosContext);
  const [usuarioInfo, setUsuario] = useState({
    email: "",
    password: "",
  });
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (usuario || autenticado) {
      history.push(redirect);
      return <Redirect to='/' />;
    }
  }, [autenticado, usuario]);

  const { email, password } = usuarioInfo;
  const onChangeHandler = (e) => {
    setUsuario({
      ...usuarioInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(usuarioInfo);
    loguearUsuario(usuarioInfo);
  };
  return (
    <FormContainer>
      <div className='text-container'>
        <h1>Login</h1>
      </div>
      <div className='form-container'>
        <FormSub className='form-class' onSubmit={submitHandler}>
          <label> Nombre:</label>{" "}
          <input
            type='text'
            name='email'
            value={email}
            placeholder='Nombre'
            onChange={onChangeHandler}
          />
          <label> Contraseña:</label>{" "}
          <input
            type='text'
            name='password'
            value={password}
            placeholder='Contraseña'
            onChange={onChangeHandler}
          />
          <Button type='submit' variant='success' style={{ marginTop: "5px" }}>
            Sign
          </Button>
          <p>
            Nuevo cliente?{" "}
            <Link to='/register'>
              <span>Registrate</span>
            </Link>
          </p>
        </FormSub>
      </div>
    </FormContainer>
  );
}

export default Login;
