import React, { createContext } from "react";

const initialData = {
  name: "Helo",
};

const DataContext = createContext(initialData);

export const DataContextProvider = ({ children }) => {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
};
