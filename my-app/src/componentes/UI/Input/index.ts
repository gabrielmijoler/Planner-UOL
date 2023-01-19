import styled from "styled-components";


export const P = styled.p`
    display: flex;
    justify-content: space-between;
`;
export const LabelInput = styled.label`
    font-size: 16px;
    line-height: 20px;
    color: #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const InputStyle = styled.input<{
    sizeplaceholder?:any,
    width?:number,
    height?: number,
    borderRadius?: number,
    background?: string,
    color?: string,
    }>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 1px solid #0f0d0d;
    border-radius: ${props => props.borderRadius}px;
    background: ${props => props.background};
    font-size: ${props => props.sizeplaceholder}px;
    line-height: 15px;
    color: ${props => props.color};
    padding-left: 29px;
`;
