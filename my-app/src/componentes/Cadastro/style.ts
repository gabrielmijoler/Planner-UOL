import styled from "styled-components";
import img from "../Image/IMGlap.png" 


export const ControlForm = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(50%,1fr));
    grid-template-rows: repeat(auto-fit,minmax(100%,1fr));
    background-color: #2a2d31;
    height: 100vh;
`;

export const TituloWelcome = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 60px;
    color: #E0E0E0;
    margin-top: 40%;
`;

export const SubTitulo = styled.a`
    font-size: 16px;
    margin-left: 2px;
`;

export const SectionInputs = styled.section`
    display: grid;
    justify-items: start;
    justify-content: center;
`;

export const SectionImg = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 5%;
`;  
 
export const ImageLaptop = styled.section`
    background-image: url(${ img });
    background-repeat: no-repeat;
    background-size: cover;
`;