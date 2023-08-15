import styled from "styled-components";

interface ButtonStyledProps {
  type: "dark" | "light";
}

const ButtonStyled = styled.button<ButtonStyledProps>`
border-radius: 8px;
color: ${(props) => (props.type === "dark" ? "black" : "white")};
background-color: inherit;
border: 2px solid ${(props) => (props.type === "dark" ? "black" : "white")};
font-size: 20px;
`;

export default ButtonStyled;