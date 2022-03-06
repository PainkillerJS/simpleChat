import { useContext, createContext, useState } from "react";
import type { FC, Dispatch, SetStateAction } from "react";

type TAuthApp = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<TAuthApp>({
  isAuth: false,
  setIsAuth: () => ({})
});

export const AuthProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
