import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { AccountBackground } from "../../components/accountBg";
import {
  AccountContainer,
  AnimationWrapper,
  AuthBtn,
  Title,
} from "./AccountStyles";
import { Spacer } from "../../components/spacer";

export default function AccountScreen({ navigation }) {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <AccountBackground>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          ref={animation}
          resizeMode="cover"
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../../assets/2056-gagaha.json")}
        />
      </AnimationWrapper>

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
