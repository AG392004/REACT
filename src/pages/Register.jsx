import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register({setStudent}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:"",class:"",Course:""});
    const [error,setError] = useState("");

    function handleChange(e) {
        const {name,value} = e.target;
        setFormData({...formData, [name]: value}) 
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.class || !formData.Course){
            setError("Please fill in all field");
        }

        setError("");
        setStudent("formData");
        navigate("/student")
    }

    return(
        <div>
            <form onSubmit={handleChange}>

            <label htmlFor="">Name : </label>
        <input type="text" placeholder="Enter your Full name:"/>

        <label htmlFor="">Class : </label>
        <input type="text" />

        <label htmlFor=""> Address:</label>
        <input type="textarea" />

        <label htmlFor="">Course</label>
        <select name="" id="">
            <option value="Bio">Biology</option>
            <option value="Computer">Computer</option>
            <option value="Commerce">Commerce</option>
        </select>
        
        <button type="submit">Register</button>
        <button type="reset">Reset</button>

      </form>
       {error && <p>{error}</p>}
        </div>
 
    )
}




// export default function Register() {
//     return(
//     <><form action="">
//         <label htmlFor="">Name : </label>
//         <input type="text" placeholder="Enter your Full name:"/>

//         <label htmlFor="">Class : </label>
//         <input type="text" />

//         <label htmlFor=""> Address:</label>
//         <input type="textarea" />

//         <label htmlFor="">Course</label>
//         <select name="" id="">
//             <option value="Bio">Biology</option>
//             <option value="Computer">Computer</option>
//             <option value="Commerce">Commerce</option>
//         </select>
        
//         <button type="submit">Register</button>
//         <button type="reset">Reset</button>

//     </form>
//     </>
// )}