import React from "react";
import { ToggleNavProvider } from "./ToggleNavContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToggleNavProvider>{children}</ToggleNavProvider>;
};

export default AppProvider;
