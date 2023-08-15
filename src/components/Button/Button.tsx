import React from 'react';
import ButtonStyled from './ButtonStyled';

interface ButtonProps {
    type: "dark" | "light";
    label: string;
}

const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return (
    <>
    <ButtonStyled type={type}>
        {label}
    </ButtonStyled>
    </>
  );
};


export default Button;
