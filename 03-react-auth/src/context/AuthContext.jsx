import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provedor (provider) del contexto.

function AuthProvider ({ children }) {
  // Lógica de Autenticación
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // Payload del token decodificado

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token)
    setUserPayload(payload)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  // Verificar si el token existe en el localStorage, y si existe, lo voy a cargar en el estado, para que el usuario no tenga que volver a iniciar sesión.
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) { // Si existe el token lo coloco en el estado
      const payload = jwtDecode(token)
      setUserPayload(payload)
      setIsAuth(true)
    }
  }, [])

  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
