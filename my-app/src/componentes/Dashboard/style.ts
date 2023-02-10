import styled from "styled-components";


export const ControlDashboard = styled.section`
    display: flex;
`;

export const Head = styled.section`
    display: flex;
    height: 100px;
    align-items: center;
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    margin: 0% 1% 0 4%;
    flex-direction: column;
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

    margin: 0% 0% 10% 0%;
`;


export const InputWeeks = styled.select`
    width: 240px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #FECE00;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-size:14;
    color: rgba(0, 0, 0, 0.7);

`;

export const SectionWeek = styled.div`
    display: flex;
    width: 240px;
    height: 33px;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px 9px 0px 0px;
    display: flex;
    margin: 0px 1px 0px 0px;
    border: none;
    font-family: 'Mulish';
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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
    margin-left: 11%;
`;


export const Pvazia = styled.div`
    width: 512px;
    height: 85px;
    border-radius: 10px;
`;

export const Spanvazio = styled.span`
    position: absolute;
    width: 85px;
    height: 75px;

    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgb(168 168 168 / 25%);
    border-radius: 10px;

    color: black;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
`;

export const DivPai = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
`;

export const Divcard = styled.div`
    display: flex;
    padding: 5px;
    width: 193px;
    justify-content: space-around;
`;

export const Containerlist = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ContainerWeek = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: end;
    margin: 0% 0% 0% 8%;
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    width: 85px;
    height: 75px;

    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgb(168 168 168 / 25%);
    border-radius: 10px;

    color: black;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
`;