import React from "react";
import { AccountBackground } from "../../components/accountBg";
import { AccountContainer, AuthBtn, Title } from "./AccountStyles";
import { Spacer } from "../../components/spacer";

export default function AccountScreen({ navigation }) {
  return (
    <AccountBackground>
      <Title>Fod Delivery App</Title>
      <AccountContainer>
        <AuthBtn
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthBtn>
        <Spacer size="large">
          <AuthBtn
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthBtn>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
}
