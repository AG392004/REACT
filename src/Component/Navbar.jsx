// Navbar displays the title. 
// StudentCard StudentName Footer App imports and combines all the components. 
// Nest StudentName inside StudentCard.


import StudentCard from "./StudentCard";
function Navbar()
{
    return(
        <>
        <div className="nav">
        <div id="hov">Home</div>
        <div id="hov">Courses</div>
        <div id="hov">About Us</div>
        <div id="hov">Contact Us</div>
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