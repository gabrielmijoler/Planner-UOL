import styled from "styled-components";


export const ButtonStyled = styled.button<{widthsize?: any}>`
    width: ${props => props.widthsize}px;
    height: 67px;
    left: 298px;
    top: 928px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
`;