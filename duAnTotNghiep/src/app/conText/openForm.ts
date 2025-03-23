"use client";
import { createContext } from "react";
interface FormContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
export const Context = createContext<FormContextType | undefined>(undefined);
