import React, { Fragment, useCallback, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from "./styles";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface SignUpProps {
  name: string
  email: string
  password: string
}

const SignUp = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

  const handleSignUp = useCallback(async (data: SignUpProps) => {
    try {
      const dataToString = JSON.stringify(data)
      await AsyncStorage.setItem('credentials', dataToString)
      Alert.alert('Usuário criado com sucesso')
      setTimeout(() => {
        navigation.navigate("SignIn")
      }, 500);
    } catch (e) {
      console.error(e)
    }
  }, []);

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
              <Title>Faça seu cadastro</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCorrect={true}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Usuário"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              <Input
                ref={emailRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                ref={passwordRef}
                textContentType="newPassword"
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </Fragment>
  );
};
export default SignUp;
