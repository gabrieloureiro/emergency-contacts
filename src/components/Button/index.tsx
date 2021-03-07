import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { ButtonWrapper, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonWrapper {...rest} style={{ borderRadius: 10 }}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;