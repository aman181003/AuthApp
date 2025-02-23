import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #181818; /* Charcoal Black */
  color: #F1F1F1;
  text-align: center;
  border-radius: 10px;
`;

const Footer = () => {
  return React.createElement(
    FooterContainer,
    null,
    React.createElement("p", null, `© ${new Date().getFullYear()} My Project. All rights reserved.`)
  );
};

export default Footer;
