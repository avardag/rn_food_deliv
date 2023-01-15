import * as React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const SmallLoader = () => (
  <ActivityIndicator animating={true} color={MD2Colors.blue300} size="small" />
);
