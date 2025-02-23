import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1em;
  background-color: #181818; /* Charcoal Black */
  color: #F1F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #BB86FC; /* Pastel Purple */
  color: #0F0F0F;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background-color: #03DAC6; /* Soft Teal */
    color: #0F0F0F;
    transform: scale(1.1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

function Header() {
  return React.createElement(
    HeaderContainer,
    null,
    React.createElement("h1", null, "TOPIC"),
    React.createElement(
      ButtonContainer,
      null,
      React.createElement(Button, null, "Signup"),
      React.createElement(Button, null, "Login")
    )
  );
}

export default Header;
