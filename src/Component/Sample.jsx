// function Sample()
// {
//     const ar = [1,2,3,4,5]
//     return (
//         <>
//         <ul> { ar.map((ar,index) => ( <li key={index}> {ar} </li> )) } </ul>
//         </>
//     );
// }
// export default Sample;



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


// Create a component to add two numbers by clicking a button




// import React, { createContext, useContext, useState } from 'react';
// const MyContext = createContext();
// function App() {
//     const [value, setValue] = useState('Hello, World!');

// enthelu value update akun inde setvalue use aki cheyua

//     return (
//         <MyContext.Provider value={value}>
//             <ChildComponent />
//         </MyContext.Provider>
//     );
// }

// function ChildComponent() {
//     const contextValue = useContext(MyContext);
//     return <h1>{contextValue}</h1>;
// }
// export default App;

