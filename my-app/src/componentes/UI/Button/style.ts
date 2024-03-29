import styled from "styled-components";


export const ButtonStyled = styled.button<
    {
        widthsize?: number,
        height?: number,
        fontSize?: number,
        borderRadius?: number,
        borderColors?: any,
        marginleft?: number,
        margintop?: number,
        marginright?: number,
        background?: string,
    }>`

    width: ${props => props.widthsize}px;
    height: ${props => props.height}px;
    background: ${props => props.background};
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: ${props => props.borderRadius}px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.fontSize}px;
    line-height: 40px;
    color: #FFFFFF;
    border-color: ${props => props.borderColors};
    margin-left: ${props => props.marginleft}%;
    margin-top: ${props => props.margintop}%;
    margin-right: ${props => props.marginright}%;
    line-height: 20px;
    
`;