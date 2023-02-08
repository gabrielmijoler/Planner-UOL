import styled from "styled-components";


export const ControlDashboard = styled.section`
    display: flex;
`;

export const Head = styled.section`
    display: flex;
    height: 100px;
    align-items: center;
    margin-left: 2%;
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    margin: 0% 1% 0 4%;
    flex-direction: column;
`;

export const Main = styled.main`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Time = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85px;
    height: 85px;

    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #3B3E45;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;

    margin: 0% 0% 37% 0%;
`;

export const Weeks = styled.button`
    width: 290px;
    height: 33px;
    background: #FF0024;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px 9px 0px 0px;
    display: flex;
    margin: 0px 1px 0px 0px;
    border: none;
    align-items: center;
    font-family: 'Mulish';
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
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
    height: 40px;
    padding-left: 9.3%;
    padding-right: 2%;

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
export const Spanvazio = styled.section`
    width: 85px;
    height: 85px;
    
`;

export const DivPai = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Divcard = styled.div`
    display: flex;
`;

