import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { ButtonProps } from ".";

export const ButtonWrapper = styled(RectButton) <ButtonProps>`
  min-width: 100%;
  width: 100%;
  height: 60px;
  background: ${props => props.color};
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;

`;

export const ButtonText = styled.Text`
  font-family: "Poppins-Regular";
  color: #fff;
  font-size: 18px;
`;
