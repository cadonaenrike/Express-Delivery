import React from "react";
import Card from "./Card";
import { noticias } from "../../assets/noticias";
import { styled } from "styled-components";
import Button from "../Button";

const DivCards = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  gap: 2.5rem;
`;

const TituloStyled = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 5%;

  gap: 2.5rem;
  > h1 {
    font-size: 8.125rem;
    margin: 0;
  }
  > div > p {
    font-size: 2rem;
  }
`;

const Section4: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1a191a",
          width: "100%",
          height: "64.812rem",
          textAlign: "center",
        }}
      >
        <TituloStyled>
          <h1>Blog</h1>
          <div style={{ width: "400px" }}>
            <p>Fique por dentro das novidades da nossa empresa</p>
          </div>
        </TituloStyled>
        <DivCards>
          {noticias.map((item) => (
            <Card
              key={item.titulo}
              image={item.imagem}
              titulo={item.titulo}
              descricao={item.descricao}
            />
          ))}
        </DivCards>
        <Button type="light" label="Saiba Mais" />
      </div>
    </>
  );
};

export default Section4;
