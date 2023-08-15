import React from 'react';
import SectionStyled from './SectionStyled';
import Button from '../Button';
import NavBar from '../navbar/NavBar';

const Section1: React.FC= () => {
  return (
    <>
        <SectionStyled>
         <NavBar></NavBar>   
           <div style={{
                    marginTop: "11.62rem",
                    paddingRight: "3rem"
                }}>
                <h1>
                        Agilidade e comprometimento no <br/> transporte nacional e internacional
                    </h1>
                <p style={{
                    fontSize: "2rem"
                }}>
                    Atuando a mais de 25 anos <br /> no mercado com qualidade <br /> e sempre trabalhando para <br /> que sua carga chegue em <br /> segurança.
                </p>  
                <Button label={"Saiba Mais"} type={"light"}/>
           </div>
        </SectionStyled>
    </>
    );
};

export default Section1;