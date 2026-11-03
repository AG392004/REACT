// import File from "./Component/File"
// import Student from "./Component/Student"
// import StudentName from "./Component/StudentName"
// import StudentCard from "./Component/StudentCard";
// import Navbar from "./Component/Navbar";
// import "./App.css";
// import  CounterProvider from "./Component/Hook";
// import Sample from "./Component/Sample";
// import See from "./Component/Usecontext";
// import ThemeProvider from "./Component/Usecontext";
// import Clock from "./Component/Effect";
// import FetchProd from "./Component/Effect";
import { Route, Routes } from "react-router-dom";
import StudentDetails from "./pages/StudentDetails";
import Register from "./pages/Register";


// function App() 
// {
//   return (
//     <div>
//       {/* <File/> */}
//       {/* <Student/> */}
//       {/* <StudentName/> */}
//       {/* <StudentCard/> */}
//       {/* <Navbar/> */}
//       {/* <Sample/> */}
//       {/* <Hook/> */}
//       {/* <CounterProvider/> */}
//       {/* <See/> */}
//       {/* <ThemeProvider/> */}
//       {/* <Clock/> */}
//       {/* <FetchProd/> */}
//     </div>
//   );
// }
// export default App;




// import StudentCard from "./Component/StudentCard";
// function App() {
//   return (
//     <div>
//       <StudentCard />
//     </div>
//   );
// }
// export default App;


function App(){
  const [student,setStudent] = useState(null);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register setStudent={setStudent}/>}/>
        <Route path='/student' element={<StudentDetails student={student}/>}/>
  
      </Routes>
    </div>
  )
}
export default App