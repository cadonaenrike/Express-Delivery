import React from 'react';
import NavBarStyled from './NavBarStyled';
import LinkStyled from './LinkStyled';
import Button from '../Button';

const NavBar: React.FC= () => {
  return (
    <>
      <NavBarStyled>
        <img style={{
          height:"7rem",
          width:"8rem"
        }} src="/public/assets/images/logoSvg.svg" alt="" />
        <div>
            <LinkStyled href="">Inicio</LinkStyled>
            <LinkStyled href="">Sobre nós</LinkStyled>
            <LinkStyled href="">Serviços</LinkStyled>
            <LinkStyled href="">Blog</LinkStyled>
            <LinkStyled href="">Contato</LinkStyled>
        </div>
        <Button label={"Fale Conosco"} type={"dark"}/>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
