import styled from "styled-components";
import { InputStyle } from "../UI/Input";


export const P = styled.p`
    font-size: 30px;
    line-height: 38px;
    color: #E0E0E0;
`;

export const Imagem = styled.img`
  margin-left: 20px;
`;

export const ControlInput = styled.section<{empty: any}>`

  display: flex;
  & input:focus ~ i{
    transform:translateX(-24px);
  }
  ${(props) =>
  props.empty
  ? ` & i {
    transform: translateX(-24px)
  }`
  : `& i{
    transform: translateX(-100%)
  }`}
`;

// export const Imagemicon = styled(InputStyle)`

//   &.${props => props.activeClassName} {
//     transform:translateX(-24px);
//     font-size: 12px;
//     color: lowerblue;
//   }
// `;