// function StudentName()
// {
//     return (
//         <h3> Name: Anusree </h3>
//     )
// }
// export default StudentName;



function StudentName(props)
{
    return (
        <>
        <h2>Students</h2>
        Name : {props.name}
        <br />
        Course : {props.course}
        </>
    )
}
export default StudentName;