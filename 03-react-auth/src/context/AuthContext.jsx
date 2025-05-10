import { createContext } from 'react'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provedor (provider) del contexto.

function AuthProvider ({ children }) {
  // Aquí van los datos que quiero compartir de forma global

  const data = {

  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
