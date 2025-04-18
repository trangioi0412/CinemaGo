"use client";
import { createContext, useContext, useState } from "react";
interface OpenFormContextType {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}
export const OpenFormContext = createContext<OpenFormContextType | undefined>(
  undefined
);
export const useOpenForm = (): OpenFormContextType => {
  const context = useContext(OpenFormContext);
  if (!context)
    throw new Error("useOpenForm must be used within OpenFormContext");
  return context;
};

export function OpenFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <OpenFormContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenFormContext.Provider>
  );
}
