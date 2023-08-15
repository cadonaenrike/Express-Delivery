import React from "react";
import Section3Styled from "./Section3Styled";
import CardServico from "./CardServiço/CardServiço";

const Section3: React.FC = () => {
  return (
    <>
      <Section3Styled>
        <h1>Serviços</h1>
        <div>
          <CardServico tipoServico="packageIcon" />
          <CardServico tipoServico="truckIcon" />
          <CardServico tipoServico="deliveryIcon" />
          <CardServico tipoServico="boxIcon" />
        </div>
      </Section3Styled>
    </>
  );
};

export default Section3;
