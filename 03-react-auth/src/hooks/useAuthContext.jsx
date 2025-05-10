import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// Paso 3. Crear un custom hook para consumir el contexto. Este hook es una función que devuelve el contexto y lo hace más fácil de usar en los componentes.

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de un AuthProvider')
  }
  return context
}
