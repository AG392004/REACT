// function Usecontext()
// {    
// const products = [
//         {id: 1,name: "Laptop", price: 5000},
//         {id: 2,name: "Phone", price: 3000},
//         {id: 3,name: "Tablet", price:1500}
//     ]
//     return(
//         <>
//         <ul>
//             { products.map( (products) => (<li key={products.id}>{products.name} <br /> {products.price}</li>) ) }
//         </ul>
//         </>
//     );
// }
// export default Usecontext;


// import { useState } from "react";
// function See()
// {
//     const [show,setShow] = useState(false);
//     return(
//         <>
//         <button onClick={
//             () => setShow(!show)}> 
//             {show?"visible":"HIDE"}
//         </button>

//         { show && <p>Hey</p>}

//         </>
//     )
// }
// export default See;


// Implementation toggle theme functionality using Context API
import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

// provider
function ThemeProvider(){
    const [theme, setTheme] = useState("light")
    const toggle = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider value={{theme,toggle}}>
            {/* passing theme and toggle as parameters
            theme has the current theme 
            toggle provides the function settheme is already inside toggle */}
            <ThemeToggle/>
        </ThemeContext.Provider>
    ) 
}

// child/main
export function ThemeToggle() {
    const {theme,toggle} = useContext(ThemeContext);

    return(
        <div>
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      <p>Welcome to my React application!</p>

      <button onClick={toggle}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
        </div>
    )

}

export default ThemeProvider;

// import { createContext, useContext, useState } from "react";

// // Create context
// const CounterContext = createContext();

// Provider component
// function CounterProvider() {
//   const [count, setCount] = useState(0);
//   return (
//     <CounterContext.Provider value={{ count, setCount }}>
//       <Counter/>
//     </CounterContext.Provider>
//   );
// }

// Counter component
// function Counter() {
//   const { count, setCount } = useContext(CounterContext);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }
// export default CounterProvider;

