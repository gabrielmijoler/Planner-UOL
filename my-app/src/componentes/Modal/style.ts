import styled from "styled-components";


export const DivModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgb(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const Div = styled.div`
    background-color: #FFFFFF;
    color: #000;
    width: 60%;
    height: 30%;
    border-radius: 20px;
`;

export const DivChildren = styled.div`
    display: flex;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 30px);
    top: 6px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;

    &::before,
    &::after{
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
    }
    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }
`;