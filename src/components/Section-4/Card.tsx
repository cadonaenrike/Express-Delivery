import React from "react";
import { styled } from "styled-components";

interface CardProps {
  image: string;
  titulo: string;
  descricao: string;
}

const CardStyled = styled.div`
  width: 600px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.06);
  > img {
    width: 100%;
  }
  > div > p {
    font-size: 1rem;
  }
  > h1 {
    font-size: 2rem;
  }
`;

const Card: React.FC<CardProps> = ({ image, titulo, descricao }) => {
  return (
    <CardStyled>
      <img src={image} alt="" />
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </CardStyled>
  );
};

export default Card;
