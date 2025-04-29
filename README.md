# Módulo de Frontend Avanzado (con React)
Bienvenido al repositorio del curso de Frontend Avanzado. Este curso está diseñado para profundizar el conocimiento de React, especificamente en tareas de uso de Formularios, Contextos y Autenticación.

# Contenido del Curso
- [1) Manejo de Formularios](#1-manejo-de-formularios)
- [2) Contexto (createContext y useContext)](#2-contexto-createcontext-y-usecontext)
- [3) SASS y BEM](#3-sass-y-bem)
- [4) Autenticación I](#4-autenticación-i)
- [5) Autenticación II](#5-autenticación-ii)
- [6) Introducción a Testing (con Cypress)](#6-introducción-a-testing-con-cypress)

<br />

# 1. Manejo de Formularios
## Objetivos
- Aprenderás a distinguir entre componentes controlados y no controlados en React, comprendiendo sus características y casos de uso.
- Además, implementarás correctamente un formulario avanzado utilizando react-hook-form con validaciones.

## Introducción a Manejo de Formularios
En el desarrollo de aplicaciones web, los formularios son una herramienta muy usada para recopilar y gestionar información de los usuarios. En React, los formularios pueden manejarse de dos maneras principales: mediante componentes controlados y no controlados, cada uno con sus propias características y casos de uso.

### Componentes Controlados
En los componentes controlados, React toma el control total del estado del formulario. Esto significa que cada cambio en un campo del formulario se refleja directamente en el estado del componente. Para lograr esto, los valores de los campos se enlazan a una propiedad del estado mediante la propiedad `value`, y los cambios se manejan a través del evento `onChange`.

El uso de componentes controlados ofrece un control granular sobre los datos del formulario, permitiendo implementar validaciones en tiempo real, formateo dinámico y sincronización inmediata con otros componentes de la interfaz.

### Componentes No Controlados
Por otro lado, los componentes no controlados utilizan referencias (refs) para acceder directamente a los valores de los campos del formulario, en lugar de mantener el estado en React. Este enfoque puede ser útil en formularios simples o cuando se requiere integrar React con bibliotecas externas.

El uso de componentes no controlados solo permite implementar validaciones cuando se envia el formulario, pero como ventaja suelen tener mejor rendimiento.

## Recursos:
- [React Hook Form](https://react-hook-form.com/): Librería para creación de formularios en React.
- [Plantilla de Código Base: Simple Form](https://gist.github.com/warderer/609ef41b6e934597105914aa70ccc0f2#file-simpleform-jsx)
- [Plantilla de Código: React Hook Form](https://gist.github.com/warderer/609ef41b6e934597105914aa70ccc0f2#file-reacthookform-jsx)

## Comandos de Apoyo
Creación de proyecto nuevo con Vite:
```bash
npm create vite@latest 01-react-forms -- --template react
cd 01-react-forms
npm install
```

Instalar dependencia react-hook-form
```shell
npm install react-hook-form
```

<br />

# 2. Contexto (createContext y useContext)
## Objetivos
- Descubrirás cómo aplicar el hook createContext y useContext para compartir datos globales en tus aplicaciones React a través de un Provider. 
- Comprenderás el concepto de un custom Hook de React para consumir el contexto de manera adecuada.
- Desarrollarás una aplicación musical práctica en la que usarás el contexto para centralizar el estado y optimizar la comunicación entre componentes.

## Introducción a Context
A medida que las aplicaciones React crecen en tamaño y complejidad, compartir datos entre múltiples componentes puede volverse desafiante. Si bien es posible pasar información a través de las props, este enfoque puede resultar engorroso cuando los datos deben ser accesibles por múltiples niveles de componentes. Aquí es donde el Contexto (y su hook asociado, useContext) se convierte en una solución poderosa para la gestión eficiente de estados globales.

### ¿Qué es el Contexto en React?
El Contexto es una API incorporada en React que permite compartir datos globales (como temas, configuraciones de usuario o autenticación) entre componentes, sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Esto mejora la legibilidad y la escalabilidad del código.

El Contexto se compone de tres partes principales:

- **El Contexto:** Definir un objeto de contexto usando createContext de React.
- **Proveedor de Contexto:** Utilizar un componente <Provider> para envolver aquellos componentes que necesitan acceder al contexto, especificando el valor que se desea compartir. El <Provider>, como su nombre lo dice, se encargará de proveer el contexto, por lo que contendrá la información que se compartirá y además delimitará de donde a donde existe el contexto. Normalmente envuelve a un componente de orden superior en la jerarquía de componentes de React, ya que él y toda su descendencia, tendrán acceso al contexto.
- **Consumo del Contexto:** Recuperar los datos del contexto utilizando el hook useContext de React en los componentes hijos.

### Ejemplo básico de Context
En este ejemplo, TemaProveedor proporciona el estado tema y la función alternarTema a todos los componentes que lo necesiten, eliminando la necesidad de pasar props manualmente.
```jsx
import React, { createContext, useContext, useState } from "react";

// Creación del Contexto | Context
const TemaContexto = createContext();

// Componente Proveedor | Provider
const TemaProveedor = ({ children }) => {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

// Componente Consumidor | Consumer
const BotonTema = () => {
  const { tema, alternarTema } = useContext(TemaContexto);

  return (
    <button onClick={alternarTema}>
      Cambiar a tema {tema === "claro" ? "oscuro" : "claro"}
    </button>
  );
};

export const App = () => (
  <TemaProveedor>
    <div>
      <h1>Gestión de Tema con Contexto</h1>
      <BotonTema />
    </div>
  </TemaProveedor>
);
```


### ¿Qué es Children?
`children` es una propiedad especial que se pasa automáticamente a los componentes React y que contiene cualquier contenido (componentes, texto, etc.) que esté anidado dentro del componente.

Por ejemplo, si tienes un componente como este:
```jsx
const Componente = ({ children }) => {
  return <div>{children}</div>;
};
```
puedes usarlo así:

```jsx
<Componente>
  <p>Este es el contenido hijo</p>
</Componente>
```

## Recursos
- [Documentación Oficial de Context](https://react.dev/learn/passing-data-deeply-with-context)

<br />

# 3. SASS y BEM
## Objetivos
- Aprenderás a configurar SASS en proyectos React utilizando Vite como herramienta de construcción, mejorando el flujo de trabajo en la gestión de estilos.
- Te familiarizarás con la metodología BEM, que te permitirá organizar y nombrar los estilos de manera clara, escalable y profesional.

## Introducción a SASS y BEM
En el desarrollo de interfaces web modernas, escribir estilos CSS claros, escalables y organizados es tan importante como escribir un código funcional. React permite incorporar diversas herramientas y metodologías para optimizar la escritura de estilos. En esta unidad, aprenderás a usar SASS, un preprocesador CSS, junto con la metodología BEM para nombrar clases de manera estructurada y coherente.

## Recursos
- [SASS](https://sass-lang.com/): Sitio oficial de SASS, donde puedes consultar la documentación.
- [BEM](https://getbem.com/): Sitio de metodología BEM para clases en CSS.

<br />

# 4. Autenticación I
## Objetivos
- Explorarás la diferencia entre autenticación y autorización, comprendiendo su relevancia en el desarrollo web.
- Conocerás la teoría básica sobre el funcionamiento de los JSON Web Tokens (JWT) y su aplicación en sistemas de autenticación y autorización.

## Introducción a Autenticación
Próximamente...

<br />

## Recursos
- [Sitio Oficial JWT](https://jwt.io/)
- [Base64 Decode](https://www.base64decode.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Ejemplo de Login: Bootstrap](https://getbootstrap.com/docs/5.3/examples/sign-in/)
- [Transform Tools: HTML to JSX](https://transform.tools/html-to-jsx)
- [Formulario Base de Signup](https://gist.github.com/warderer/10c5c2c8d826a85d81702738327aff67#file-signup-jsx)

<br />

# 5. Autenticación II
## Objetivos
- Implementarás un sistema funcional de autenticación que permita a los usuarios iniciar sesión en una aplicación React.
- Aprenderás a proteger rutas según los roles de usuario.
- Seras capaz de configurar renderizados condicionales para mostrar contenido dinámico de acuerdo a una condición dada, como el rol de usuario.

<br />

# 6. Introducción a Testing (con Cypress)
## Objetivos
- Conocerás los fundamentos del testing en el desarrollo de software, comprendiendo su relevancia, los tipos de testing y estructura básica de una prueba.
- Aprenderas a instalar y configurar Cypress en tu proyecto React.
- Ejecutarás pruebas end-to-end para garantizar la calidad y el correcto funcionamiento de tu aplicación.

## Introducción a Testing
Próximamente...

<br />

# Recursos Complementarios
- [Documentación de React](https://react.dev/)
- [Lectura: Reemplazar Imagenes Rotas en React](https://www.cesarguerra.mx/como-reemplazar-imagenes-rotas-en-react-colocando-una-imagen-por-defecto-placeholder-fallback-images-on-error/)
- [Configuración de ESLint con Standard JS](https://www.cesarguerra.mx/configuracion-rapida-de-eslint-con-standard-js-para-proyectos-de-javascript-y-de-react-con-vite-js/)

<br />

# Autor
Este repositorio y contenidos son realizados por César Guerra. 
Puedes usarlos libremente, solo recuerda dar los créditos correspondientes =P.

www.cesarguerra.mx
