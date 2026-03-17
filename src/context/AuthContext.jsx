import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // role can be: null (guest), 'client', or 'provider'
  const [user, setUser] = useState(null);

  // Load state from local storage on mount (simulating persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem('sm_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (role, data) => {
    const userData = { role, ...data };
    setUser(userData);
    localStorage.setItem('sm_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sm_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
