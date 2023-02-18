import styled from "styled-components";

export const DivToast = styled.div`
    position: absolute;
    z-index: 999;
    top: 10%;
    padding: 5px;
    right: 30px;
`;
export const DivChildren = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    border: 1px solid white;
    border-radius: 25px;
    min-height: 80px;
`;
export const DivText = styled.div`
    display: flex;
    width: 300px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const SpanText = styled.span`
    word-wrap: break-word;
    height: 100%;
    width: 100%;
    text-align: center;
`;
