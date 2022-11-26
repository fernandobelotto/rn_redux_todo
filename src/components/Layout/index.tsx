import { Box, KeyboardAvoidingView } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  return <KeyboardAvoidingView flex={1}>{props.children}</KeyboardAvoidingView>;
};

export default AppLayout;
