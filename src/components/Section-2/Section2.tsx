import React from "react";
import Button from "../Button";
import PStyled from "./SectionStyled2";
import "./H1BlackStyled.css";

const Section2: React.FC = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <h1 className="h1gray">Sobre Nós</h1>
        <h1 className="h1bLack">Sobre Nós</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <div
          style={{
            paddingBottom: "5rem",
          }}
        >
          <PStyled>
            A nossa marca é reconhecida por nossos <br /> clientes pelo
            comprometimento e qualidade <br /> nas operações logísticas de norte
            a sul do Brasil <br /> e nas principais rotas do Mercosul.
          </PStyled>
          <Button label={"Saiba Mais"} type={"dark"} />
        </div>
        <div style={{}}>
          <img style={{}} src="/public/assets/images/rectangle 6.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Section2;
