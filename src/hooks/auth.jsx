import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api'

export const AuthContext = createContext();

function AuthProvider({ children }){
  const [ data, setData] = useState({})

  async function signIn({ email, password }){

    try {
      const response = await api.post("/sessions", { email, password});
      const { user, token } = response.data;

      localStorage.setItem("@yournotes:user", JSON.stringify(user));
      localStorage.setItem("@yournotes:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;  //inserindo um token do tipo Bearer de autorização no cabeçalho por padrão de todas as requisições que o user irá fazer. 
      setData({ user, token })

    } catch (error){
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível acessar.")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@yournotes:token");
    localStorage.removeItem("@yournotes:user");

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@yournotes:token");
    const user = localStorage.getItem("@yournotes:user");

    if(token && user ) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return(
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };