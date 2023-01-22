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
    color: #E0E0E0
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
    padding-top: 2%;
`;  
export const Spanhere = styled.span`
    margin-left: 21%;
`;  
 
export const ImageLaptop = styled.section`
    background-image: url(${ img });
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ErrorSpan = styled.span`
    color: #ffffff;
    margin-left: 15%;

`;

export const Errorbutton = styled.span`
    color: #ffffff;
    margin-top: 10%;
    margin-left: 20%;
    font-size: 16px;
    line-height: 20px;
`;