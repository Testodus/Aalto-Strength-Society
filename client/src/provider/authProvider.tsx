import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface User {
  userID: string | null;
  token: string | null;
  setUser: (newToken: string, newUserID: string) => void;
}

const AuthContext = createContext<User | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: ProviderProps) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem('token'));
  const [userID, setUserID_] = useState(localStorage.getItem('userID'));

  // Function to set the authentication token
  const setUser = (newToken: string, newUserID: string) => {
    setToken_(newToken);
    setUserID_(newUserID);
  };

  useEffect(() => {
    if (token && userID) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + token + userID;
      localStorage.setItem('token', token);
      localStorage.setItem('userID', userID);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('userID');
    }
  }, [token, userID]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      userID,
      token,
      setUser,
    }),
    [token, userID]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
