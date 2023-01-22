import styled from "styled-components";


export const P = styled.p`
    font-size: 30px;
    line-height: 38px;
    color: #E0E0E0;
`;

export const Imagem = styled.img<{empty: any}>`
  ${(props) =>
  props.empty  
  ? `{
    transform: translateX(-44px)
    }`
    : `{
      transform: translateX(5%)
    }`}  
    transition: 1s
`;

export const ControlInput = styled.section`

  display: flex;
  & input:focus ~ i{
    transform:translateX(-24px);
  }                                   
`;

// export const Imagemicon = styled(InputStyle)`

//   &.${props => props.activeClassName} {
//     transform:translateX(-24px);
//     font-size: 12px;
//     color: lowerblue;
//   }
// `;