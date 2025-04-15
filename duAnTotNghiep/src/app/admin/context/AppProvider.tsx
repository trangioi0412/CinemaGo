import React from "react";
import { ToggleNavProvider } from "./ToggleNavContext";
import { OpenFormProvider } from "./OpenForm";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToggleNavProvider>
      <OpenFormProvider>{children}</OpenFormProvider>
    </ToggleNavProvider>
  );
};

export default AppProvider;
