import styled from "styled-components";


export const ControlDashboard = styled.section`
    display: grid;
    width: 100%;
    height: 250px;
    grid-template-areas:
    "head head"
    "nav  main"
    "nav  main";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 8fr;

`;

export const Head = styled.head`
    /* grid-area: head; */
    display: flex;
    background-color: #b9b9b9;
    height: 100px;
`;


export const Nav = styled.nav`
    grid-area: nav;
    display: flex;
    justify-content: center;
`;

export const Main = styled.main`
    grid-area: main;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    height: 100vh;
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
`;
  
export const Weeks = styled.p`
    width: 290px;
    height: 33px;
    background: #FF0024;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px;
    display: flex;
    justify-content: center;
`;
  
  
export const SectionWeek = styled.section`
    display: flex;
    width: 1750px;
    height: 40px;
    margin-left: 12%;
`;

export const Card = styled.p`
    width: 512px;
    height: 85px;
    background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(10.5px);
    border-radius: 15px;
`;
  
// display: grid;
// grid-template-columns: repeat(6, 300px);
// grid-template-rows: 1fr;
// justify-items: center;
// margin-left: 12%;