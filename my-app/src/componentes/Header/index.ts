import styled from "styled-components";


export const Weekeplanner = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 0px 12px 24px;
    gap: 8px;
    width: 588px;
    height: 64px;
    background: #000000;
    border-radius: 0px 14px 15px 0px;
    color: #fff;
`;


export const ControlHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 145px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);

`;
export const Titulo = styled.span`
    font-size: 20px;
`;
export const SectionLogOut = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 20px;
    margin-right: 1%;
`;