import styled from "styled-components";
import Button from "../UI/Button/Button";


export const ControlDashboard = styled.section`
    display: grid;
    width: 100%;
    height: 250px;
    grid-template-areas:
    "nav  main"
    "nav  main";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 8fr;

`;

export const Head = styled.head`
    display: flex;
    height: 100px;
    align-items: center;
    margin-left: 2%;
    width: 100%;
`;


export const Nav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px 0px 50px;
    flex-direction: column;
`;

export const Main = styled.main`
    grid-area: main;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    height: 71vh;
    overflow-y: scroll;
    overflow-x: scroll;
`;
  
export const Time = styled.p`
    width: 85px;
    height: 75px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 19px 0px;
`;
  
export const Weeks = styled.button`
    width: 290px;
    height: 33px;
    background: #FF0024;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const InputWeeks = styled.select`
    width: 240px;
    height: 45px;
    left: 418px;
    top: 164px;
    background: #FFFFFF;
    border: 1px solid #FECE00;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-size:14;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 3px;

`;
 
export const SectionWeek = styled.section`
    display: flex;
    width: 1750px;
    height: 40px;
    margin-left: 12%;
`;

export const Imagemlogo = styled.img`
    position: fixed;
    width: 780px;
    height: 780px;
    left: 1225px;
    top: 447px;
    mix-blend-mode: normal;
    opacity: 0.5;
    float: right;
`;

export const SectionButton = styled.section`
    display: flex;
    justify-content: center;
    margin-left: 35%;
`;

  
export const Pvazia = styled.section`
    width: 512px;
    height: 85px;
`;

  