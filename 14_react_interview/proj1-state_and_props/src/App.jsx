import { useState } from 'react';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Priyanshu",
      solved: 20,
    },

    {
      id: 2,
      name: "rohit",
      solved: 30,
    },
    {
      id: 3,
      name: "satyarth",
      solved: 40,
    }

  ]);

const increaseSolved = (id)=>{
  const updatedStudents = students.map((student)=>
    student.id==id ? {...student,solved : student.solved+1}:student
  );
  setStudents(updatedStudents);
};


return (
  <div className="container">
    <h1>Student Solved Problems</h1>

    <h2>Total Student : {students.length}</h2>


    {students.map((student)=>(
       <StudentCard
          key={student.id}
          student={student}
          increaseSolved={increaseSolved}
        />
    ))}
  </div>
)


}



export default App;