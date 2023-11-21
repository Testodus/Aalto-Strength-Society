import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface User {
  userID: string | null;
  token: string | null;
}

const AuthContext = createContext<User | null>(null);

const AuthProvider = (children: React.ReactNode) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem('token'));
  const [userID, setUserID_] = useState(localStorage.getItem('userID'));

  // Function to set the authentication token
  const setUser = (newToken: string, newUserID: string) => {
    setToken_(newToken);
    setUserID_(newUserID);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

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
