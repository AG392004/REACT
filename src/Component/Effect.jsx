// // USEEFFECT-- to manage side effects
// backend inn direct data fetch cheya.. fevicon nte title MediaElementAudioSourceNode.apply. external services ayi connect akua..-- handle side effects
// syntax
// useEffect(() => {
  
//   return () => {
    
//   };
// }, [dependencies]);

// return ine ullil clean up code
// dependency array kodutha again and again render avum
// 3 way of givng depen..
// empty dep ar
// no depend..
// condition kodukunnath - if states or props are changed




// import { useState,useEffect } from "react";
// function Clock(){
//     const [seconds,setSeconds] = useState(0)
//     useEffect( 
//         () => { const timer = setInterval(() => {
//             setSeconds(s=>s+1)
//         }, 1000);

//         return ()=>clearInterval(timer)

//      },[] )

//     return (
//         <>
//          <p>{seconds}</p>
//         </>
//     )
// }
// export default Clock;

import { useState,useEffect } from "react";

const FetchProd = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    useEffect( () => {
        const getProd = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const info = await response.json();
                // object of array ayond info.data kodukanam
                setData(info.products)
            }
            catch(error) {
                setError("Failed")
            }
            finally{
            setLoading(false)
            }
        }
            getProd();
},[]);

    if (loading) return <p>loading</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <table>

            <tr>
                <th>Products</th>
                <th>Price</th>
            </tr>

            <tr>
                <td>
                    {data.map((info)=>(
                    <div key={info.id}>
                    <p>{info.title}</p>
                    </div>
                    ))}
                </td>

                <td>
                    {data.map((info)=>(
                    <div key={info.id}>
                    <p>{info.price}</p>
                    </div>
                    ))}
                </td>
            </tr>
            
        </table>
        </>
    )
}
export default FetchProd;



