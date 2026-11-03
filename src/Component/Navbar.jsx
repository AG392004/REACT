// Navbar displays the title. 
// StudentCard StudentName Footer App imports and combines all the components. 
// Nest StudentName inside StudentCard.

import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";
function Navbar()
{
    return(
        <>
        <div className="nav">
            <h1> Student Management</h1>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
        
            {/* <div id="hov">Register</div> */}
            {/* <div id="hov">About Us</div>
            <div id="hov">Contact Us</div> */}
        </div>
        
        <>
        <br />
            <StudentCard/>            
        </>

        <div className="foot">

            <div className="section1">
            <div><b>FUTURA LABS</b></div>
            Near MC College, Calicut
            </div>

            <div className="section2">
                <div><b>Contact Us</b></div>
                <div>+91 98976 98765</div>
            </div>

        </div>
        
        </>
    );
}
export default Navbar;