import React from "react";
import CardServicoStyled from "./CardServiçoStyled";
import Button from "../../Button";

interface CardServicoProps {
  tipoServico: "packageIcon" | "truckIcon" | "deliveryIcon" | "boxIcon";
}

const CardServico: React.FC<CardServicoProps> = ({ tipoServico }) => {
  const renderCardServico = {
    packageIcon: <img src="./assets/images/packageIcon.png" alt="packageIcon" />,
    truckIcon: <img src="./assets/images/truckIcon.png" alt="truckIcon" />,
    deliveryIcon: <img src="./assets/images/deliveryIcon.png" alt="truckIcon" />,
    boxIcon: <img src="./assets/images/deliveryIcon.png" alt="deliveryIcon" />,
  };

  return (
    <>
      <CardServicoStyled>
        <div>{renderCardServico[tipoServico]}</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          nobis iusto libero!
        </p>
        <Button type="dark" label="Solicitar Cotação" />
      </CardServicoStyled>
    </>
  );
};

export default CardServico;
