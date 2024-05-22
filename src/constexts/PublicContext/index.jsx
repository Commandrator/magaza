import React, { createContext, useState } from 'react';
const AuthContext = createContext();
const PublicProvider = ({ children }) => {
  const [value, setValue] = useState('initial value');
  return (
    <AuthContext.Provider
      value={{ value, setValue }}
      children={children}/>
  );
};
export default PublicProvider;