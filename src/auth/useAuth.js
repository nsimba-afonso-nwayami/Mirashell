import { useState, useEffect } from "react";

// Hook de autenticação para gerenciar o token
export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Atualiza o token sempre que ele mudar no localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const logout = () => {
    // Remove o token do localStorage e reseta o estado
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, logout };
};
