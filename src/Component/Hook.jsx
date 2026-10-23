// Create a component to add two numbers by clicking a button
// import { useState } from "react";
// function Hook()
// {
//     const a = 10 , b = 20;
//     const [num,setNum] = useState(0);
//     return(
//         <>
//         <button onClick={()=>setNum(a+b)}>ADD</button>
//         {/* <button onClick={()=>setNum(num+a+b)}>ADD</button> */}
//         <h2>Sum: {num}</h2>
//         </>
//     )
// }
// export default Hook;


// Check if text in two input fields matches
// import { useState } from "react";
// function Hook()
// {
//     const [text1,setText1] = useState("");
//     const [text2,setText2] = useState("");
//     const [cmp,setCmp] = useState("");

//     function Check()
//     {
//         if (text1==text2)
//         {
//             return ("String matched")
//         }
//         else
//         {
//             return("Not match")
//         }
//     }
//     return (
//         <>

//         <h2> TEXT MATCHING </h2>

//         <input 
//         type="text"
//         value={text1} 
//         onChange={ (e) => setText1 (String(e.target.value))}
//         placeholder="Enter your first text"
//         />

//          <input 
//         type="text"
//         value={text2} 
//         onChange={ (e) => setText2 (String(e.target.value))}
//         placeholder="Enter your second text"
//         />

//         <button onClick={Check}>COMPARE</button>

        
//         <h3> answer : {cmp} </h3>

//         </>

//     )


// }
// export default Hook;


// COUNTER
// import { useState } from "react";
// function App(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//         <h2>{count}</h2>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <button onClick={()=>setCount(count-1)}>-</button>
//         <button onClick={()=>setCount(0)}>0</button>
//         </>
//     )

// }
// export default App;



// Create input field and show entered text in h1 tag
// import { useState } from "react";
// function Hook()
// {
//     const [a,setA] = useState("");
//     return(
//         <>

//         <label htmlFor="">Enter your text :</label>

//         <input 
//             type="text" 
//             value={a}
//             onChange={ (e) => setA (e.target.value)}
//         />
//         <h1>{setA}</h1>

      

        {/* <input 
//         type="text"
//         value={text2} 
//         onChange={ (e) => setText2 (String(e.target.value))}
//         placeholder="Enter your second text"
//         /> */}


//         </>   
//     )
// }
// export default Hook;



import { createContext, useContext, useState } from "react";

// Create context
const CounterContext = createContext();

// Provider component
function CounterProvider() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter/>
    </CounterContext.Provider>
  );
}

// Counter component
function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
export default CounterProvider;


// import { createContext, useContext, useState } from "react";

// 1. Create Context
// const CountContext = createContext();

// 2. Create the Counter component
// function Counter() {
//     const { count, setCount } = useContext(CountContext);

//     return (
//         <>
//             <h2>Count: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 +
//             </button>

//             <button onClick={() => setCount(count - 1)}>
//                 -
//             </button>

//             <button onClick={() => setCount(0)}>
//                 Reset
//             </button>
//         </>
//     );
// }

// 3. Provide the counter value
// function App() {
//     const [count, setCount] = useState(0);
//     return (
//         <CountContext.Provider value={{ count, setCount }}>
//             <h1>Counter App</h1>
//             <Counter />
//         </CountContext.Provider>
//     );
// }

// export default App;