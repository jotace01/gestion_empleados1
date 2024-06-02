import { createContext, useState } from "react";

export const PersonalContext = createContext();

export const PersonalState = {
  Personal: [
    {
      name: "ir al gimnasio",
    },
  ],
};

export const PersonalProvider = ({ children }) => {
  const [personal, setPersonal] = useState([]);

  const addPersonal = (newPersonal) => {
    setPersonal((prevState) => [...prevState, newPersonal]);
    console.log("personal", newPersonal);
  };

  return (
    <PersonalContext.Provider value={{ personal, addPersonal }}>
      {children}
    </PersonalContext.Provider>
  );
};
