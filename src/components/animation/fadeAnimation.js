import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export function FadeInView({ duration = 1000, children, ...props }) {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);
  return (
    <Animated.View
      style={[
        props.style,
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
