import { ButtonStyled } from './style';

type Props = {
  label?: string;
  onClick?: (e: any) => void
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined,
  width?: number;
  height?: number;
  fontSize?: number;
  style?: any;
  boderRadius?: number;
  borderColors?: string;
  marginleft?: number;
  margintop?: number;
  marginright?: number;
  background?: string;
  widthsize?: number;
  
};

const Button = (props: Props) => {
  return (
    <>
      <ButtonStyled
        type={props.type || 'button'}
        onClick={props.onClick}
        disabled={props.disabled}
        widthsize={props.width}
        height={props.height}
        fontSize={props.fontSize}
        style={props.style}
        borderRadius={props.boderRadius || 50}
        borderColors={props.borderColors}
        marginleft={props.marginleft}
        margintop={props.margintop}
        background={props.background}
        marginright={props.marginright}
      >
        {props.label}
      </ButtonStyled>
    </>
  );
};

export default Button;