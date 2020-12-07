import React from "react";
import styled from "styled-components";

const RoundedWhite = styled.div`
  height: auto;
  background-color: #cecccc;
  padding: 0.5rem;
  border-radius: 15px;
`;

function RoundedWhiteContainer() {
  return <RoundedWhite></RoundedWhite>;
}

export default RoundedWhiteContainer;
