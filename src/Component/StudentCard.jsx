// NESTED COMPONENT

import StudentName from "./StudentName";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";  
// ./ MEANS CURRENT FOLDER ILL ULLA FILE ANN 

// function StudentCard()
// {
//     return (
//         <div className="container mt-4">
//             <Card style={{width: "18rem"}}>
//                 <Card.Body>
//                     <Card.Title>Student Card</Card.Title>
//                     <StudentName/>
//                     <Card.Text>Course : UI UX DESIGNING </Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                 </Card.Body>
//             </Card>    
//         </div>  );
// }
// export default StudentCard;


// Child component
// export default function Student(props) {
//   return (
//     <>
//     <div>
//         <h2>Students</h2>
//         <p>Name : {props.name}</p>
//         <p>Course : {props.course}</p>
//     </div>
//     </>
//   )
// }

// parent
// export default function StudentCard() {
//   return (
//     <div>
//         <StudentName name="Sneha" course="Python"/>
//         <StudentName name="AAA" course="React"/>
//     </div>
//   )
// }


function StudentCard()
{
    return (
        <>
        <StudentName name="Neshfa" course="Video editing"/>
        <StudentName name="Nandana" course="Video editing"/>
        </>
    )
}
export default StudentCard;