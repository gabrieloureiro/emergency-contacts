import React from "react";
import { TextInputProps } from "react-native";
import { InputWrapper, InputText, Icon } from "./styles";

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <InputWrapper>
      {icon && <Icon name={icon} size={20} color="#666360" />}
      <InputText
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </InputWrapper>
  );
};

export default Input;
