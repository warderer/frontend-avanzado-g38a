import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// Paso 3. Crear un custom hook para consumir el contexto. Este hook es una función que devuelve el contexto y lo hace más fácil de usar en los componentes.

export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext debe ser usado dentro de un SongProvider')
  }
  return context
}
