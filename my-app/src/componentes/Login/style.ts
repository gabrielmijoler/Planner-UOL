import styled from "styled-components";


export const P = styled.p`
    font-size: 30px;
    line-height: 38px;
    color: #E0E0E0;
`;

export const Imagem = styled.img<{empty: any}>`
  ${(props) =>
  props.empty  
  ? `{
    transform: translateX(-44px)
    }`
    : `{
      transform: translateX(5%)
    }`}  
    transition: 1s
`;

export const ControlInput = styled.section`
  display: flex;                             
`;

export const Spanlogin = styled.span`
    display: flex;
    justify-content: center;
    color: #E9B425;
    margin-top: 6%;
`;
export const SectionButton = styled.div`
    padding: 8px;
`;
