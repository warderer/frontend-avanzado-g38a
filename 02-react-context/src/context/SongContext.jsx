// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre DIFERENTES niveles de componentes, de forma DIRECTA y SIN necesidad de pasar props de un componente a otro.

// Para usar CONTEXT requerimos seguir 3 pasos

// 1. Crear el contexto
import { createContext } from 'react'
const SongContext = createContext()

// 2. Crear el proveedor (provider) del contexto. Este maneja de donde se tiene la información y como se va a compartir. Un proveedor es un componente que envuelve a otros componentes y les da acceso a la información que contiene.

// La información que se comparte es a través de un prop llamado value, que es un objeto que contiene la información que se va a compartir entre los componentes hijos.

function SongProvider ({ children }) {
  const data = {

  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
