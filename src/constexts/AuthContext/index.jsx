import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
const useAuth = () =>{
    return useContext(AuthContext)
}
const AuthProvider = ({ children }) => {
  const [value, setValue] = useState('initial value');
  const [currentUser, setCurrentUser] = useState();
  return (
    <AuthContext.Provider
      value={{ value, setValue, currentUser }}
      children={children}/>
  );
};
export default useAuth;
export {AuthProvider};