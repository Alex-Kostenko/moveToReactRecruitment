import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';

interface IGlobalContext {
  token: any;
  setToken: any;
}

interface IProps {
  children: ReactNode;
}

export const GlobalContext = createContext<IGlobalContext>({
  token: '',
  setToken: () => {},
});

export function GlobalProvider({ children }: IProps) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const newToken = Cookies.get('auth') || '';
    setToken(newToken);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
