import React, { useState, useContext } from "react";
import { AccountBackground } from "../../components/accountBg";
import { SmallLoader } from "../../components/loader/SmallLoader";
import { Spacer } from "../../components/spacer";
import StyledText from "../../components/typography";
import { AuthenticationContext } from "../../context/authentication/authContext";
import {
  AccountContainer,
  AuthBtn,
  AuthInput,
  ErrorContainer,
  Title,
} from "./AccountStyles";

export default function LoginScreen({ navigation }) {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  };
  return (
    <AccountBackground>
      <Title>Login to FooDeli</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="medium">
          <AuthInput
            label="Password"
            value={password}
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <StyledText variant="error">{error.message}</StyledText>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <SmallLoader />
          ) : (
            <AuthBtn
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onSubmit()}
            >
              Login
            </AuthBtn>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthBtn mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthBtn>
      </Spacer>
    </AccountBackground>
  );
}
