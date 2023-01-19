import styled from "styled-components";


export const ButtonStyled = styled.button<
    {
        widthsize?: number,
        height?: number,
        fontSize?: number,
        borderRadius?: number,
        borderColors?: any,
     }>`

    width: ${props => props.widthsize}px;
    height: ${props => props.height}px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: ${props => props.borderRadius}px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.fontSize}px;
    line-height: 40px;
    color: #FFFFFF;
    border-color: ${props => props.borderColors}
`;