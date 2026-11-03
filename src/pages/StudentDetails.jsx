export default function StudentDetails({student}) {
    if (!student) {
        return <h2>NO STUDENTS REGISTERED YET;</h2>
    }

    return (
        <div>
            <h1>REGISTRATION DETAILS</h1>
            <h3>STUDENT DETAILS</h3>
            <p>{student.name}</p>
            <p>{student.class}</p>
            <p>{student.Course}</p>
        
        </div>
    )
}