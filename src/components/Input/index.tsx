import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";
import { InputWrapper, InputText, Icon } from "./styles";
import { useField } from "@unform/core"

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <InputWrapper>
      {icon && <Icon name={icon} size={20} color="#666360" />}
      <InputText
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </InputWrapper>
  );
};

export default Input;
