import React from "react";
import { ToggleNavProvider } from "./ToggleNavContext";
import { OpenFormProvider } from "./OpenForm";
import { OpenUpdateFormProvider } from "./OpenUpdate";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToggleNavProvider>
      <OpenUpdateFormProvider>
        <OpenFormProvider>{children}</OpenFormProvider>
      </OpenUpdateFormProvider>
    </ToggleNavProvider>
  );
};

export default AppProvider;
