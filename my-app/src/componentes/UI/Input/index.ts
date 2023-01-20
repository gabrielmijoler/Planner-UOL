import styled from "styled-components";


export const P = styled.section`
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
    bordercolor?: string,
    marginLeft?: number,
    }>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 1px solid;
    border-radius: ${props => props.borderRadius}px;
    background: ${props => props.background};
    font-size: ${props => props.sizeplaceholder}px;
    line-height: 15px;
    color: ${props => props.color};
    padding-left: 29px;
    border-color: ${props => props.bordercolor};
    margin-left: ${props => props.marginLeft}px;

    &.active{
        transform:translateX(-24px);
        }
`;




