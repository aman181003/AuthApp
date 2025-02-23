import React from "react";
import styled from "styled-components";

const ContentContainer = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem; /* Bigger title */
  color: #F1F1F1;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  max-width: 80%;
  text-align: center;
  margin-top: 10px;
  color: #BBBBBB;
`;

const Content = () => {
  return React.createElement(
    ContentContainer,
    null,
    React.createElement(Title, null, "Main Content"),
    React.createElement(Paragraph, null, "This section now takes up the full screen space.")
  );
};

export default Content;
