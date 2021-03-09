import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const ButtonWrapper = styled(RectButton)`
  min-width: 100%;
  width: 100%;
  height: 60px;
  background: #6e37e0;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Poppins-Regular";
  color: #fff;
  font-size: 18px;
`;
