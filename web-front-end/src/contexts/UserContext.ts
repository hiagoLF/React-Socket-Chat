import { createContext, useContext } from "react";

export type AtualUserType = {
   user: string;
   setUser?: (user: string) => void;
};

export const UserContext = createContext<AtualUserType>({
   user: "",
   setUser: (user) => console.warn("no user provider"),
});

export const useUser = () => useContext(UserContext);
