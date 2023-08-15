import styled from "styled-components";

const CardServicoStyled = styled.div`
  width: 26.25rem;
  height: 36.25rem;
  border-radius: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  > p {
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem 3rem 2rem 3rem;
  }

  > div {
    background-color: #01c000;
    opacity: 0.7;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    place-items: center;
  }

`;

export default CardServicoStyled;
