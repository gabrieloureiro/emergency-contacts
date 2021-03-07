import React, { Fragment } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail"></Input>
            <Input name="password" icon="lock" placeholder="Senha"></Input>
            <Button onPress={() => console.log('a')}>Entrar</Button>
            <ForgotPasswordButton>
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
        <Icon name="log-in" size={20} color="#fff" />
        <CreateAccountButtonText>
          Não possui conta? Cadastre-se
        </CreateAccountButtonText>
      </CreateAccountButton>
    </Fragment>
  );
};
export default SignIn;
