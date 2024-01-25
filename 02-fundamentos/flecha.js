// function hello() {
//    return 'Hello, World!';
//  }
 
//  console.log(hello);
 


// function sumar (a,b){
//     return a + b;
// }

const sumar = (a, b) => a + b;//variable,funcion(Argumentos) 
const saludar = () => "Hola mundo";//variable,funcion(Argumentos) 



console.log(sumar(5,10)); //imprimir la funcion(con nuestros argumentos)
console.log(saludar())

/* -----------NOTA------------
**Diferencia entre Funciones Tradicionales y Funciones Flecha en JavaScript:**

En JavaScript, las funciones tradicionales y las funciones flecha
 tienen diferencias en su sintaxis y en cómo manejan el contexto (`this`). Aquí hay una breve explicación:

1. --------------**Sintaxis:**-------------
   - **Funciones Tradicionales:**
     ```javascript
     function sumar(a, b) {
         return a + b;
     }
     ```

   - **Funciones Flecha:**
     ```javascript
     const sumar = (a, b) => a + b;
     ```

2. --------------**Contexto (`this`):**----------------
   - **Funciones Tradicionales:**
     - Tienen su propio `this`, que depende de cómo se llame la función.
   - **Funciones Flecha:**
     - No tienen su propio `this`, heredan el `this` del contexto que las rodea.

-----------**Razones para Utilizar Funciones Flecha:**-------------

1. **Sintaxis Concisa:**
   - La sintaxis de las funciones flecha es más concisa, especialmente útil para funciones simples de una sola expresión.

2. **Manejo de Contexto (`this`):**
   - Las funciones flecha simplifican el manejo del contexto (`this`)
    ya que no tienen su propio `this` y heredan el `this` de su contexto padre.

3. **Legibilidad:**
   - Puede hacer que el código sea más claro y legible
    especialmente en situaciones donde las funciones son pasadas 
    como argumentos o se utilizan dentro de funciones de orden superior (como `map`, `filter`, `reduce`).

4. **Sin Cambio de `this`:**
   - Al no tener su propio `this`, evitan problemas comunes asociados con el cambio de `this` en funciones tradicionales.

**Ejemplo:**
```javascript
// Función Tradicional
function saludarTrad() {
    console.log("Hola");
}

// Función Flecha
const saludarFlecha = () => console.log("Hola");

saludarTrad();   // Hola
saludarFlecha(); // Hola
```

**Nota:**
- Aunque las funciones flecha ofrecen ventajas en ciertos escenarios,
 no son siempre la mejor elección. Las funciones tradicionales siguen siendo esenciales
  y se eligen según las necesidades específicas del contexto.
*/