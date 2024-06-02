import { useContext } from "react";
import { PersonalContext } from "./PersonalProvider";

export const usePersonalApp = () => {
  const context = useContext(PersonalContext);
  if (!context) {
    throw new Error("usePersonalApp must be used within  a personal");
  }
  return context;
};
