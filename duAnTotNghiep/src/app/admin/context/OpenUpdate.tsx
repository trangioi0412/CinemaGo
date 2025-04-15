"use client";
import { createContext, useContext, useState } from "react";
interface OpenUpdateFormContextType {
  isOpenUpdate: boolean;
  setIsOpenUpdate: (state: boolean) => void;
}
export const OpenUpdateFormContext = createContext<
  OpenUpdateFormContextType | undefined
>(undefined);
export const useOpenUpdateForm = (): OpenUpdateFormContextType => {
  const context = useContext(OpenUpdateFormContext);
  if (!context)
    throw new Error("useOpenForm must be used within OpenUpdateFormContext");
  return context;
};

export function OpenUpdateFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  return (
    <OpenUpdateFormContext.Provider value={{ isOpenUpdate, setIsOpenUpdate }}>
      {children}
    </OpenUpdateFormContext.Provider>
  );
}
